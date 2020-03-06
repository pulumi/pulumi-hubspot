import { Input } from "@pulumi/pulumi";

type ContactPropertyType = "enumeration" | "datetime" | "date" | "number" | "string" | "bool" | "phone_number";
type ContactPropertyFieldType = "textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox" | "calculation_read_time" | "calculation_score" | "calculation_equation" | "phonenumber";

export interface EnumerationOptions {
    description: string | null;
    label: string;
    readOnly: boolean | null;
    displayOrder: number;
    hidden: boolean;
    value: string;
    doubleData?: null;
}

export interface ContactPropertyOutputs {
    createdContactPropery: ContactPropertyProps;
}

export interface ContactPropertyApiArgs {
    // The internal name of the property. The name should always be used when referencing the property through the API.
    name: string;

    // A human readable label for the property. The label is used when displaying the property in the HubSpot app.
    label: string;

    // The property group that the property belongs to.
    groupName: string;

    // The data type of the property.
    type: Input<ContactPropertyType>;

    // Controls how the property appears in the HubSpot app.
    fieldType: Input<ContactPropertyFieldType>;

    // A description of the property. May be an empty string.
    description: string;

    // Whether or not this field displayed in a form.
    formField: boolean;

    // Properties are displayed in order starting with the lowest positive integer value.
    // Values of -1 will cause the property to be displayed after any positive values.
    displayOrder: number;

    // True indicates that the property settings can be modified, but the property cannot be deleted
    // Custom properties should use false
    mutableDefinitionNotDeletable: boolean;

    // A value of true means that the value cannot be set manually, and that only the HubSpot system can update the property.
    // Custom properties should always have this set to false, or the value can't be updated through the API.
    readOnly: boolean;

    // A value of true means that the property settings can't be modified.
    // Custom properties should always have this as false, or the property can't be updated or deleted.
    readOnlyDefinition: boolean;

    // Hidden fields will not appear in the HubSpot UI.
    hidden: boolean;

    // A list of valid options for the property.
    // Required for enumerated properties.
    // This list will be empty for other property types.
    // Each option will have the following format
    options: EnumerationOptions[];

    // Whether or not the property is deleted. This will effectively always be false, as deleted properties will not appear in the API.
    deleted?: false;

    // Read-only. The internal user ID of the last user to update the property in the HubSpot app.
    // This field may not exist if the property was never modified inside HubSpot.
    updateUserId?: number;

    // Read-only. The internal user ID of the user that created the property in the HubSpot app.
    // This field may not exist if the property was not created inside HubSpot.
    createdUserId?: number;

    // For system properties, true indicates that the property is calculated by a HubSpot process
    // Has no effect for custom properties.
    calculated?: boolean;

    // Boolean; For system properties, true indicates that the options are stored
    // Has no effect on custom properties.
    externalOptions?: boolean;
}

export interface ContactPropertyProps {
    // The internal name of the property. The name should always be used when referencing the property through the API.
    name: string;

    // A human readable label for the property. The label is used when displaying the property in the HubSpot app.
    label: string;

    // The property group that the property belongs to.
    groupName: string;

    // The data type of the property.
    type: Input<ContactPropertyType>;

    // Controls how the property appears in the HubSpot app.
    fieldType: Input<ContactPropertyFieldType>;

    // A description of the property. May be an empty string.
    description?: string;

    // Whether or not this field displayed in a form.
    formField?: boolean;

    // Properties are displayed in order starting with the lowest positive integer value.
    // Values of -1 will cause the property to be displayed after any positive values.
    displayOrder?: number;

    // True indicates that the property settings can be modified, but the property cannot be deleted
    // Custom properties should use false
    mutableDefinitionNotDeletable?: boolean;

    // A value of true means that the value cannot be set manually, and that only the HubSpot system can update the property.
    // Custom properties should always have this set to false, or the value can't be updated through the API.
    readOnly?: boolean;

    // A value of true means that the property settings can't be modified.
    // Custom properties should always have this as false, or the property can't be updated or deleted.
    readOnlyDefinition?: boolean;

    // Hidden fields will not appear in the HubSpot UI.
    hidden?: boolean;

    // A list of valid options for the property.
    // Required for enumerated properties.
    // This list will be empty for other property types.
    // Each option will have the following format
    options?: EnumerationOptions[];

    // Whether or not the property is deleted. This will effectively always be false, as deleted properties will not appear in the API.
    deleted?: false;

    // Read-only. The internal user ID of the last user to update the property in the HubSpot app.
    // This field may not exist if the property was never modified inside HubSpot.
    updateUserId?: number;

    // Read-only. The internal user ID of the user that created the property in the HubSpot app.
    // This field may not exist if the property was not created inside HubSpot.
    createdUserId?: number;

    // For system properties, true indicates that the property is calculated by a HubSpot process
    // Has no effect for custom properties.
    calculated?: boolean;

    // Boolean; For system properties, true indicates that the options are stored
    // Has no effect on custom properties.
    externalOptions?: boolean;
}
