// Code used to generate TS Pulumi from HubSpot JSON responses.
// import {
//     getCurrentContactPropertyGroups, buildContactPropertyGroupDirectories,
//     getCurrentContactPropertiesByGroup, generateContactPropertyTS, generateContactPropertyIndexFile
// } from "./src/hubspot/generate_initial_state";

// getCurrentContactPropertyGroups()
//     .then(async (c: any[]) => {
//         const groupNames = c.map(cg => cg.name);
//         buildContactPropertyGroupDirectories(groupNames);

//         const props = await getCurrentContactPropertiesByGroup();

//         for (let i = 0; i < groupNames.length; i++) {
//             const groupName = groupNames[i];
//             const groupProps = props[groupName] || [];
//             generateContactPropertyTS(groupName, groupProps);
//         }

//         generateContactPropertyIndexFile(groupNames);
//     })
//     .catch((e: any) => {
//         throw new Error(e);
//     });

// Code for the contact properties program.
import * as pulumi from "@pulumi/pulumi";
import { contactProperties } from "./src/hubspot/contact_properties/index";

export { contactProperties };
