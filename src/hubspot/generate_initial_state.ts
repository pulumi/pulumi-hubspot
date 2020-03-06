import * as fs from "fs";
import { HubSpotClient } from "../provider/hubspot_client";

export async function getCurrentContactProperties(): Promise<any[]> {
    const hsClient = new HubSpotClient();
    const [ err, contactProperties ] = await hsClient.get("/properties/v1/contacts/properties");
    if (err) {
        throw new Error("Error fetching current contact properties: " + err?.response?.data?.message);
    }

    return contactProperties as any[];
}

function buildArgs(props: any, keys: string[]): string {
    let result = "";
    const propsKeys = Object.keys(props);

    for (let i = 0; i < propsKeys.length; i++) {
        const propKey = propsKeys[i];
        if (keys.indexOf(propKey) > -1) {
            const value = JSON.stringify(props[propKey])
            result += `        ${propKey}: ${value},\n`;
        }
    }

    return result;
}

function generateContactPropertyFunction(prop: any) {
    const buildArgsKeys = [ "name", "label", "groupName", "type", "fieldType", "description", "formField", "displayOrder", "options" ];
    return "\n" +
           `    properties["${prop.name}"] = new ContactProperty("${prop.name}", {\n` +
           buildArgs(prop, buildArgsKeys) +
           `    });\n`;
}

export function generateContactPropertyTS(props: any[]) {
    const buildArgsKeys = [ "name", "label", "groupName", "type", "fieldType", "description", "formField", "displayOrder", "options" ];
    let file = "// Contact Properties.\n" +
               "import * as pulumi from \"@pulumi/pulumi\";\n" +
               "import { ContactProperty } from \"../provider/contact_properties\";\n\n" +
               "const contactProperties = () => {\n" +
               "    const properties: any = {};\n";

    for (let i = 0; i < props.length; i++) {
        file += generateContactPropertyFunction(props[i]);
    }

    file += "\n" +
            "    return properties;\n" +
            "};\n\n" +
            "export { contactProperties };\n";

    fs.writeFileSync("./src/hubspot/hs_contact_properties.ts", file);
}
