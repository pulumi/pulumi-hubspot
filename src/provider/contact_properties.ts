import * as pulumi from "@pulumi/pulumi";
import { HubSpotClient } from "./hubspot_client";
import { getResourceDiffKeys, checkRequiredKeysExist } from "./utils";
import { HubSpotContactPropertiesArgs, ContactPropertyProps } from "../../types/ContactProperty";

class ContactPropertyProvider implements pulumi.dynamic.ResourceProvider {
    private hsClient: HubSpotClient;

    constructor() {
        this.hsClient = new HubSpotClient();
    }

    public async check(old: ContactPropertyProps, update: ContactPropertyProps): Promise<pulumi.dynamic.CheckResult> {
        const requiredKeys = [ "name", "label", "groupName", "type", "fieldType" ];
        const failures = checkRequiredKeysExist(update, requiredKeys);
        return { failures, inputs: update };
    }

    public async diff(id: pulumi.ID, old: ContactPropertyProps, update: ContactPropertyProps): Promise<pulumi.dynamic.DiffResult> {
        const replaces = getResourceDiffKeys(old, update);
        return { replaces };
    }

    public async create(args: ContactPropertyProps): Promise<pulumi.dynamic.CreateResult> {
        const [ err, createdContactProperty ] = await this.hsClient.post("/properties/v1/contacts/properties", args);
        if (err) {
            const propertyExists = err?.response?.data?.propertiesErrorCode === "PROPERTY_EXISTS";
            if (propertyExists) {
                const getURL = "/properties/v1/contacts/properties/named/" + args.name;
                const [ err, existingContactProperty ] = await this.hsClient.get(getURL);
                if (err || !existingContactProperty) {
                    throw new Error(`Error reading contact property [${args.name}]`);
                }

                if (existingContactProperty.calculated === true) {
                    await pulumi.log.info(`Contacty property [${args.name}] cannot be changed because it is calculated. This property will only be managed by Pulumi.`, undefined, undefined, true);
                    return {
                        id: existingContactProperty?.name,
                        outs: { createdContactProperty: existingContactProperty },
                    };
                }

                const { outs } = await this.update(existingContactProperty?.id, existingContactProperty, args)

                return {
                    id: existingContactProperty?.name,
                    outs: outs,
                };
            }
            throw new Error(`Contact Property Creation failed [${args.name}]: ${err?.response?.data?.message}`)
        }

        return {
            id: createdContactProperty?.name,
            outs: { createdContactProperty },
        };
    }

    public async update(id: string, out: any, update: ContactPropertyProps): Promise<pulumi.dynamic.UpdateResult> {
        const fieldUpdates = Object.assign({}, out, update);

        // Throw an error if the API name is changed as this could lead to something breaking.
        // TODO: Find a way to safely change an API name.
        if (fieldUpdates.name !== out.name) {
            throw new Error(`Cannot change API name of contact property. This may cause a workflow to break. [${fieldUpdates.name}]`);
        }

        const url = "/properties/v1/contacts/properties/named/" + fieldUpdates.name;
        const [ err, updates ] = await this.hsClient.put(url, fieldUpdates);
        if (err) {
            console.log(err);
            throw new Error("There was an error updating the contact property: " + err);
        }

        return {
            outs: { createdContactProperty: updates, isUpdate: true },
        };
    }

    public async read(id: string, props: { createdContactProperty: ContactPropertyProps }): Promise<pulumi.dynamic.ReadResult> {
        const url = "/properties/v1/contacts/properties/named/" + props.createdContactProperty.name;
        const [ err, contactProperty ] = await this.hsClient.get(url);
        if (err || !contactProperty) {
            throw new Error(`Error reading contact property [${props.createdContactProperty.name}]`);
        }

        return {
            id: props.createdContactProperty.name,
            props: Object.assign({}, props, { createdContactPropery: contactProperty }),
        };
    }

    public async delete(id: string, props: { createdContactProperty: ContactPropertyProps, isUpdate?: boolean }): Promise<void> {
        if (props.isUpdate) {
            return;
        }

        const isNonHSDeletable = props.createdContactProperty.mutableDefinitionNotDeletable;
        if (isNonHSDeletable) {
            await pulumi.log.info(`The Property '${props.createdContactProperty.name}' cannot be deleted. Removing from Pulumi management.`);
            return;
        }

        const url = "/properties/v1/contacts/properties/named/" + props.createdContactProperty.name;
        const [ err, contactPropery ] = await this.hsClient.delete(url, {});
        if (err) {
            throw new Error(`Error deleting contact property [${props.createdContactProperty.name}]: ${err?.response?.data?.message}`);
        }

        await pulumi.log.info(`Contact property [${props.createdContactProperty.name}] deleted successfully.`, undefined, undefined, true);
    }
}

export class ContactProperty extends pulumi.dynamic.Resource {
    // @ts-ignore
    public readonly createdContactProperty: pulumi.Output<ContactPropertyProps>;

    constructor(name: string, args: HubSpotContactPropertiesArgs, opts?: pulumi.CustomResourceOptions) {
        const contactProperty = new ContactPropertyProvider();
        const resourceName = "hubspot:contactproperty:" + name
        super(contactProperty, resourceName, { ...args, createdContactProperty: undefined }, opts);
    }
}
