import * as pulumi from "@pulumi/pulumi";
import { HubSpotClient } from "./hubspot_client";
import { getResourceDiffKeys, checkRequiredKeysExist } from "./utils";
import { ContactPropertyProps } from "../../types/ContactProperty";

class ContactPropertyProvider implements pulumi.dynamic.ResourceProvider {
    private hsClient: HubSpotClient;

    constructor() {
        this.hsClient = new HubSpotClient();
    }

    private populateDefaultValues(args: ContactPropertyProps): ContactPropertyProps {
        const defaults = {
            description: "",
            formField: false,
            displayOrder: -1,
            mutableDefinitionNotDeletable: false,
            readOnly: false,
            readOnlyDefinition: false,
            hidden: false,
            options: [],
            deleted: false,
            calculated: false,
        };

        return Object.assign({}, defaults, args);
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
        const apiArgs = this.populateDefaultValues(args);

        const [ err, createdContactProperty ] = await this.hsClient.post("/properties/v1/contacts/properties", apiArgs);
        if (err) {
            const propertyExists = err?.response?.data?.propertiesErrorCode === "PROPERTY_EXISTS";
            if (propertyExists) {
                const getURL = "/properties/v1/contacts/properties/named/" + apiArgs.name;
                const [ err, existingContactProperty ] = await this.hsClient.get(getURL);
                if (err || !existingContactProperty) {
                    throw new Error(`Error reading contact property [${apiArgs.name}]`);
                }

                const checkValues = [ existingContactProperty.calculated, existingContactProperty.readOnly ];

                if (checkValues.indexOf(true) > -1) {
                    await pulumi.log.info(`Contacty property [${apiArgs.name}] cannot be changed because it is calculated. This property will only be managed by Pulumi.`, undefined, undefined, true);
                    return {
                        id: existingContactProperty?.name,
                        outs: { createdContactProperty: existingContactProperty },
                    };
                }

                const { outs } = await this.update(existingContactProperty?.id, existingContactProperty, apiArgs)

                return {
                    id: existingContactProperty?.name,
                    outs: outs,
                };
            }
            throw new Error(`Contact Property Creation failed [${apiArgs.name}]: ${err?.response?.data?.message}`)
        }

        return {
            id: createdContactProperty?.name,
            outs: { createdContactProperty },
        };
    }

    public async update(id: string, out: any, update: ContactPropertyProps): Promise<pulumi.dynamic.UpdateResult> {
        const fieldUpdates = Object.assign({}, out, update);
        const apiArgs = this.populateDefaultValues(fieldUpdates);

        // Throw an error if the API name is changed as this could lead to something breaking.
        // TODO: Find a way to safely change an API name.
        if (apiArgs.name !== out.name) {
            throw new Error(`Cannot change API name of contact property. This may cause a workflow to break. [${apiArgs.name}]`);
        }

        const url = "/properties/v1/contacts/properties/named/" + apiArgs.name;
        const [ err, updates ] = await this.hsClient.put(url, apiArgs);
        if (err) {
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

        const apiArgs = this.populateDefaultValues(props.createdContactProperty);

        const isNonHSDeletable = apiArgs.mutableDefinitionNotDeletable;
        const isReadOnly = apiArgs.readOnly;

        if (isNonHSDeletable || isReadOnly) {
            await pulumi.log.info(`The Property '${apiArgs.name}' cannot be deleted. Removing from Pulumi management.`);
            return;
        }

        const url = "/properties/v1/contacts/properties/named/" + apiArgs.name;
        const [ err, contactPropery ] = await this.hsClient.delete(url, {});
        if (err) {
            throw new Error(`Error deleting contact property [${apiArgs.name}]: ${err?.response?.data?.message}`);
        }

        await pulumi.log.info(`Contact property [${apiArgs.name}] deleted successfully.`, undefined, undefined, true);
    }
}

export class ContactProperty extends pulumi.dynamic.Resource {
    // @ts-ignore
    public readonly createdContactProperty: pulumi.Output<ContactPropertyProps>;

    constructor(name: string, args: ContactPropertyProps, opts?: pulumi.CustomResourceOptions) {
        const contactProperty = new ContactPropertyProvider();
        const resourceName = "hubspot:contactproperty:" + name
        super(contactProperty, resourceName, { ...args, createdContactProperty: undefined }, opts);
    }
}
