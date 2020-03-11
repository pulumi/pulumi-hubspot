// Code used to generate TS Pulumi from HubSpot JSON responses.
// import { generateContactPropertyTS, getCurrentContactProperties } from "./src/hubspot/generate_initial_state";
// getCurrentContactProperties()
//     .then((c: any[]) => {
//         generateContactPropertyTS(c);
//     })
//     .catch((e: any) => {
//         throw new Error(e);
//     });

// Code for the contact properties program.
import * as pulumi from "@pulumi/pulumi";
import { ContactProperty } from "./src/provider/contact_properties";

export const hsContactProperties = new ContactProperty("personal_email", {
    description: "This field contains a contact's personal email.",
    label: "Personal Email",
    groupName: "contactinformation",
    type: "string",
    fieldType: "text",
    displayOrder: -1,
});
