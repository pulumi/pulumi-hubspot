// Contact Properties.
import * as pulumi from "@pulumi/pulumi";
import * as contactinformation from "./contactinformation/index";
import * as socialmediainformation from "./socialmediainformation/index";
import * as emailinformation from "./emailinformation/index";
import * as analyticsinformation from "./analyticsinformation/index";
import * as conversioninformation from "./conversioninformation/index";

export const contactProperties = Object.assign({},
contactinformation.contactProperties(),socialmediainformation.contactProperties(),emailinformation.contactProperties(),analyticsinformation.contactProperties(),conversioninformation.contactProperties()
);
