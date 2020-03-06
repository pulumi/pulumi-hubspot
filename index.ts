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
import { contactProperties } from "./src/hubspot/hs_contact_properties";

export const hsContactProperties = contactProperties();
