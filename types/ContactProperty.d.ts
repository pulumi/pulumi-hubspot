import { Input } from "@pulumi/pulumi";

export interface HubSpotContactPropertiesArgs {
    // Required args
    name: Input<string>;
    label: Input<string>;
    groupName: Input<string>;
    type: Input<"enumeration" | "datetime" | "date" | "number" | "string" | "bool" | "phone_number">;
    fieldType: Input<"textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox"| "phonenumber" | "booleancheckbox"| "calculation_equation"| "calculation_score" | "calculation_read_time">;

    // Optional args
    description?: Input<string>;
    formField?: Input<boolean>;
    displayOrder?: Input<number>;
    options?: Input<EnumerationOptions[]>;
}

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

export interface ContactPropertyProps {
    // Required args
    name: string;
    label: string;
    groupName: string;
    type: "enumeration" | "datetime" | "date" | "number" | "string";
    fieldType: "textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox";

    // Optional args
    description?: string;
    formField?: boolean;
    displayOrder?: number;
    options?: EnumerationOptions[];
    mutableDefinitionNotDeletable?: boolean;
}
