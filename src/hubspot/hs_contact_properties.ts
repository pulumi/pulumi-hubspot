// Contact Properties.
import * as pulumi from "@pulumi/pulumi";
import { ContactProperty } from "../provider/contact_properties";

const contactProperties = () => {
    const properties: any = {};

    properties["company_size"] = new ContactProperty("company_size", {
        name: "company_size",
        label: "Company size",
        description: "A contact's company size. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["date_of_birth"] = new ContactProperty("date_of_birth", {
        name: "date_of_birth",
        label: "Date of birth",
        description: "A contact's date of birth. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["days_to_close"] = new ContactProperty("days_to_close", {
        name: "days_to_close",
        label: "Days To Close",
        description: "The days that elapsed from when a contact was created until they closed as a customer. This is set automatically by HubSpot and can be used for segmentation and reporting.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["degree"] = new ContactProperty("degree", {
        name: "degree",
        label: "Degree",
        description: "A contact's degree. This property is required for the Facebook Ads Integration. This property will be automatically synced to via Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["field_of_study"] = new ContactProperty("field_of_study", {
        name: "field_of_study",
        label: "Field of study",
        description: "A contact's field of study. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["first_conversion_date"] = new ContactProperty("first_conversion_date", {
        name: "first_conversion_date",
        label: "First Conversion Date",
        description: "The date this contact first submitted a form",
        groupName: "conversioninformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["first_conversion_event_name"] = new ContactProperty("first_conversion_event_name", {
        name: "first_conversion_event_name",
        label: "First Conversion",
        description: "The first form this contact submitted",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["first_deal_created_date"] = new ContactProperty("first_deal_created_date", {
        name: "first_deal_created_date",
        label: "First Deal Created Date",
        description: "The date the first deal for a contact was created. This is automatically set by HubSpot and can be used for segmentation and reporting.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["gender"] = new ContactProperty("gender", {
        name: "gender",
        label: "Gender",
        description: "",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["graduation_date"] = new ContactProperty("graduation_date", {
        name: "graduation_date",
        label: "Graduation date",
        description: "A contact's graduation date. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["hs_additional_emails"] = new ContactProperty("hs_additional_emails", {
        name: "hs_additional_emails",
        label: "Additional email addresses",
        description: "A set of additional email addresses for a contact",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_all_contact_vids"] = new ContactProperty("hs_all_contact_vids", {
        name: "hs_all_contact_vids",
        label: "All vids for a contact",
        description: "A set of all vids, canonical or otherwise, for a contact",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_analytics_first_touch_converting_campaign"] = new ContactProperty("hs_analytics_first_touch_converting_campaign", {
        name: "hs_analytics_first_touch_converting_campaign",
        label: "First Touch Converting Campaign",
        description: "The campaign responsible for the first touch creation of this contact",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_analytics_last_touch_converting_campaign"] = new ContactProperty("hs_analytics_last_touch_converting_campaign", {
        name: "hs_analytics_last_touch_converting_campaign",
        label: "Last Touch Converting Campaign",
        description: "The campaign responsible for the last touch creation of this contact",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_avatar_filemanager_key"] = new ContactProperty("hs_avatar_filemanager_key", {
        name: "hs_avatar_filemanager_key",
        label: "Avatar FileManager key",
        description: "The path in the FileManager CDN for this contact's avatar override image. Automatically set by HubSpot.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_calculated_form_submissions"] = new ContactProperty("hs_calculated_form_submissions", {
        name: "hs_calculated_form_submissions",
        label: "All form submissions for a contact",
        description: "A set of all form submissions for a contact",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_calculated_merged_vids"] = new ContactProperty("hs_calculated_merged_vids", {
        name: "hs_calculated_merged_vids",
        label: "Merged vids with timestamps of a contact",
        description: "Merged vids with timestamps of a contact",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_calculated_mobile_number"] = new ContactProperty("hs_calculated_mobile_number", {
        name: "hs_calculated_mobile_number",
        label: "Calculated Mobile Number in International Format",
        description: "Mobile number in international format",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_calculated_phone_number"] = new ContactProperty("hs_calculated_phone_number", {
        name: "hs_calculated_phone_number",
        label: "Calculated Phone Number in International Format",
        description: "Phone number in international format",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_calculated_phone_number_area_code"] = new ContactProperty("hs_calculated_phone_number_area_code", {
        name: "hs_calculated_phone_number_area_code",
        label: "Calculated Phone Number Area Code",
        description: "Area Code of the calculated phone number",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_calculated_phone_number_country_code"] = new ContactProperty("hs_calculated_phone_number_country_code", {
        name: "hs_calculated_phone_number_country_code",
        label: "Calculated Phone Number Country Code",
        description: "Country code of the calculated phone number",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_calculated_phone_number_region_code"] = new ContactProperty("hs_calculated_phone_number_region_code", {
        name: "hs_calculated_phone_number_region_code",
        label: "Calculated Phone Number Region",
        description: "ISO2 Country code for the derived phone number",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_content_membership_email_confirmed"] = new ContactProperty("hs_content_membership_email_confirmed", {
        name: "hs_content_membership_email_confirmed",
        label: "Email Confirmed",
        description: "Email Confirmation status of user of Content Membership",
        groupName: "contactinformation",
        type: "bool",
        fieldType: "booleancheckbox",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"True","displayOrder":0,"value":"true"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"False","displayOrder":1,"value":"false"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_content_membership_notes"] = new ContactProperty("hs_content_membership_notes", {
        name: "hs_content_membership_notes",
        label: "Membership Notes",
        description: "The notes relating to the contact's content membership.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "textarea",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_content_membership_registered_at"] = new ContactProperty("hs_content_membership_registered_at", {
        name: "hs_content_membership_registered_at",
        label: "Registered At",
        description: "Datetime at which this user was set up for Content Membership",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_content_membership_registration_domain_sent_to"] = new ContactProperty("hs_content_membership_registration_domain_sent_to", {
        name: "hs_content_membership_registration_domain_sent_to",
        label: "Domain to which registration email was sent",
        description: "Domain to which the registration invitation email for Content Membership was sent to",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_content_membership_registration_email_sent_at"] = new ContactProperty("hs_content_membership_registration_email_sent_at", {
        name: "hs_content_membership_registration_email_sent_at",
        label: "Time registration email was sent",
        description: "Datetime at which this user was sent a registration invitation email for Content Membership",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_content_membership_status"] = new ContactProperty("hs_content_membership_status", {
        name: "hs_content_membership_status",
        label: "Status",
        description: "The status of the contact's content membership.",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Active","displayOrder":-1,"value":"active"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Inactive","displayOrder":-1,"value":"inactive"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_conversations_visitor_email"] = new ContactProperty("hs_conversations_visitor_email", {
        name: "hs_conversations_visitor_email",
        label: "Conversations visitor email",
        description: "A Conversations visitor's email address",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_created_by_conversations"] = new ContactProperty("hs_created_by_conversations", {
        name: "hs_created_by_conversations",
        label: "Created By Conversations",
        description: "Flag indicating this contact was created by the Conversations API",
        groupName: "contactinformation",
        type: "bool",
        fieldType: "booleancheckbox",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"True","displayOrder":0,"value":"true"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"False","displayOrder":1,"value":"false"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_created_by_user_id"] = new ContactProperty("hs_created_by_user_id", {
        name: "hs_created_by_user_id",
        label: "Created by user ID",
        description: "The user that created this object. This value is automatically set by HubSpot and may not be modified.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_createdate"] = new ContactProperty("hs_createdate", {
        name: "hs_createdate",
        label: "Object create date/time",
        description: "The date and time at which this object was created. This value is automatically set by HubSpot and may not be modified.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_document_last_revisited"] = new ContactProperty("hs_document_last_revisited", {
        name: "hs_document_last_revisited",
        label: "Recent Document Revisit Date",
        description: "The last time a shared document (presentation) was accessed by this contact",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_email_domain"] = new ContactProperty("hs_email_domain", {
        name: "hs_email_domain",
        label: "Email Domain",
        description: "A contact's email address domain",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_email_quarantined"] = new ContactProperty("hs_email_quarantined", {
        name: "hs_email_quarantined",
        label: "Email Address Quarantined",
        description: "Indicates that the current email address has been quarantined for anti-abuse reasons and any marketing email sends to it will be blocked. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "bool",
        fieldType: "booleancheckbox",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"True","displayOrder":0,"value":"true"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"False","displayOrder":1,"value":"false"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_email_quarantined_reason"] = new ContactProperty("hs_email_quarantined_reason", {
        name: "hs_email_quarantined_reason",
        label: "Email Address Quarantined Reason",
        description: "The reason why the email address has been quarantined. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "enumeration",
        fieldType: "checkbox",
        options: [{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Other","displayOrder":-1,"value":"OTHER"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Suspicious Form Activity","displayOrder":-1,"value":"FORM_ABUSE"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_email_sends_since_last_engagement"] = new ContactProperty("hs_email_sends_since_last_engagement", {
        name: "hs_email_sends_since_last_engagement",
        label: "Sends Since Last Engagement",
        description: "The number of marketing emails that have been sent to the current email address since the last engagement (open or link click). This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_emailconfirmationstatus"] = new ContactProperty("hs_emailconfirmationstatus", {
        name: "hs_emailconfirmationstatus",
        label: "Marketing email confirmation status",
        description: "The status of a contact's eligibility to receive marketing email. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "enumeration",
        fieldType: "select",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"","displayOrder":1,"value":""},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Confirmed","displayOrder":2,"value":"Confirmed"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Confirmation Pending","displayOrder":3,"value":"Confirmation Pending"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Confirmation Email Sent","displayOrder":4,"value":"Confirmation Email Sent"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"User clicked confirmation","displayOrder":6,"value":"User clicked confirmation"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"HubSpot Rep. marked confirmed","displayOrder":7,"value":"HubSpot Rep. marked confirmed"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Customer marked confirmed","displayOrder":8,"value":"Customer marked confirmed"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Confirmed from previous behavior","displayOrder":9,"value":"Confirmed from previous behavior"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Confirmed due to form","displayOrder":11,"value":"Confirmed due to form"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_facebook_ad_clicked"] = new ContactProperty("hs_facebook_ad_clicked", {
        name: "hs_facebook_ad_clicked",
        label: "Clicked Facebook ad",
        description: "Whether contact has clicked a Facebook ad",
        groupName: "conversioninformation",
        type: "bool",
        fieldType: "booleancheckbox",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"True","displayOrder":0,"value":"true"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"False","displayOrder":1,"value":"false"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_first_engagement_date"] = new ContactProperty("hs_first_engagement_date", {
        name: "hs_first_engagement_date",
        label: "The first time the contact was engaged.",
        description: "Hubspot sets this automatically based on the earliest engagement of the contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_google_click_id"] = new ContactProperty("hs_google_click_id", {
        name: "hs_google_click_id",
        label: "Google ad click id",
        description: "",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_ip_timezone"] = new ContactProperty("hs_ip_timezone", {
        name: "hs_ip_timezone",
        label: "IP Timezone",
        description: "The timezone reported by a contact's IP address. This is automatically set by HubSpot and can be used for segmentation and reporting.",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_is_contact"] = new ContactProperty("hs_is_contact", {
        name: "hs_is_contact",
        label: "Is a contact",
        description: "Is a contact, has not been deleted and is not a visitor",
        groupName: "contactinformation",
        type: "bool",
        fieldType: "calculation_read_time",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"True","displayOrder":0,"value":"true"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"False","displayOrder":1,"value":"false"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_is_unworked"] = new ContactProperty("hs_is_unworked", {
        name: "hs_is_unworked",
        label: "Contact unworked?",
        description: "Contact has not been assigned or has not been engaged after last owner assignment/re-assignment",
        groupName: "contactinformation",
        type: "bool",
        fieldType: "calculation_equation",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"True","displayOrder":0,"value":"true"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"False","displayOrder":1,"value":"false"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_last_sales_activity_date"] = new ContactProperty("hs_last_sales_activity_date", {
        name: "hs_last_sales_activity_date",
        label: "Last Sales Activity Date",
        description: "The date of the last sales activity with the contact. This property is set automatically by HubSpot. Note: This field is only updated for contacts with an owner.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_lastmodifieddate"] = new ContactProperty("hs_lastmodifieddate", {
        name: "hs_lastmodifieddate",
        label: "Object last modified date/time",
        description: "The date and time at which this object was last modified. This value is automatically set by HubSpot and may not be modified.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_lead_status"] = new ContactProperty("hs_lead_status", {
        name: "hs_lead_status",
        label: "Lead Status",
        description: "The contact's sales, prospecting or outreach status",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "radio",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"New","displayOrder":0,"value":"NEW"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Open","displayOrder":1,"value":"OPEN"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"In Progress","displayOrder":2,"value":"IN_PROGRESS"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Open Deal","displayOrder":2,"value":"OPEN_DEAL"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Unqualified","displayOrder":3,"value":"UNQUALIFIED"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Attempted to Contact","displayOrder":4,"value":"ATTEMPTED_TO_CONTACT"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Connected","displayOrder":5,"value":"CONNECTED"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Bad Timing","displayOrder":6,"value":"BAD_TIMING"}],
        formField: true,
        displayOrder: -1,
    });

    properties["hs_legal_basis"] = new ContactProperty("hs_legal_basis", {
        name: "hs_legal_basis",
        label: "Legal basis for processing contact's data",
        description: "Legal basis for processing contact's data; 'Not applicable' will exempt the contact from GDPR protections",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "checkbox",
        options: [{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Legitimate interest - prospect/lead","displayOrder":0,"value":"Legitimate interest – prospect/lead"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Legitimate interest - existing customer","displayOrder":1,"value":"Legitimate interest – existing customer"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Legitimate interest - other","displayOrder":2,"value":"Legitimate interest - other"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Performance of a contract","displayOrder":3,"value":"Performance of a contract"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Freely given consent from contact","displayOrder":4,"value":"Freely given consent from contact"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Not applicable","displayOrder":5,"value":"Not applicable"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_merged_object_ids"] = new ContactProperty("hs_merged_object_ids", {
        name: "hs_merged_object_ids",
        label: "Merged object IDs",
        description: "The list of object IDs that have been merged into this object. This value is automatically set by HubSpot and may not be modified.",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "checkbox",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_object_id"] = new ContactProperty("hs_object_id", {
        name: "hs_object_id",
        label: "Contact ID",
        description: "The unique ID for this contact. This unique ID is automatically populated by HubSpot and cannot be changed.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_sales_email_last_clicked"] = new ContactProperty("hs_sales_email_last_clicked", {
        name: "hs_sales_email_last_clicked",
        label: "Recent Sales Email Clicked Date",
        description: "The last time a tracked sales email was clicked by this user",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_sales_email_last_opened"] = new ContactProperty("hs_sales_email_last_opened", {
        name: "hs_sales_email_last_opened",
        label: "Recent Sales Email Opened Date",
        description: "The last time a tracked sales email was opened by this contact. This property does not update for emails that were sent to more than one contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_searchable_calculated_international_mobile_number"] = new ContactProperty("hs_searchable_calculated_international_mobile_number", {
        name: "hs_searchable_calculated_international_mobile_number",
        label: "Calculated Mobile Number with country code",
        description: "Mobile number with country code",
        groupName: "contactinformation",
        type: "phone_number",
        fieldType: "phonenumber",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_searchable_calculated_international_phone_number"] = new ContactProperty("hs_searchable_calculated_international_phone_number", {
        name: "hs_searchable_calculated_international_phone_number",
        label: "Calculated Phone Number with country code",
        description: "Phone number with country code",
        groupName: "contactinformation",
        type: "phone_number",
        fieldType: "phonenumber",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_searchable_calculated_mobile_number"] = new ContactProperty("hs_searchable_calculated_mobile_number", {
        name: "hs_searchable_calculated_mobile_number",
        label: "Calculated Mobile Number without country code",
        description: "Mobile number without country code",
        groupName: "contactinformation",
        type: "phone_number",
        fieldType: "phonenumber",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_searchable_calculated_phone_number"] = new ContactProperty("hs_searchable_calculated_phone_number", {
        name: "hs_searchable_calculated_phone_number",
        label: "Calculated Phone Number without country code",
        description: "Phone number without country code",
        groupName: "contactinformation",
        type: "phone_number",
        fieldType: "phonenumber",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_sequences_is_enrolled"] = new ContactProperty("hs_sequences_is_enrolled", {
        name: "hs_sequences_is_enrolled",
        label: "Currently in Sequence",
        description: "A yes/no field that indicates whether the contact is currently in a Sequence.",
        groupName: "contactinformation",
        type: "bool",
        fieldType: "booleancheckbox",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"True","displayOrder":0,"value":"true"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"False","displayOrder":1,"value":"false"}],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_time_to_first_engagement"] = new ContactProperty("hs_time_to_first_engagement", {
        name: "hs_time_to_first_engagement",
        label: "Time to engage contact.",
        description: "Time it took from current owner to first engagement activity (ms).",
        groupName: "contactinformation",
        type: "number",
        fieldType: "calculation_equation",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hs_updated_by_user_id"] = new ContactProperty("hs_updated_by_user_id", {
        name: "hs_updated_by_user_id",
        label: "Updated by user ID",
        description: "The user that last updated this object. This value is automatically set by HubSpot and may not be modified.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["hubspot_owner_assigneddate"] = new ContactProperty("hubspot_owner_assigneddate", {
        name: "hubspot_owner_assigneddate",
        label: "Owner Assigned Date",
        description: "The most recent date a HubSpot Owner was assigned to a contact. This is set automatically by HubSpot and can be used for segmentation and reporting.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["ip_city"] = new ContactProperty("ip_city", {
        name: "ip_city",
        label: "IP City",
        description: "The city reported by a contact's IP address. This is automatically set by HubSpot and can be used for segmentation and reporting.",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["ip_country"] = new ContactProperty("ip_country", {
        name: "ip_country",
        label: "IP Country",
        description: "The country reported by a contact's IP address. This is automatically set by HubSpot and can be used for segmentation and reporting.",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["ip_country_code"] = new ContactProperty("ip_country_code", {
        name: "ip_country_code",
        label: "IP Country Code",
        description: "The country code reported by a contact's IP address. This is automatically set by HubSpot and can be used for segmentation and reporting.",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["ip_latlon"] = new ContactProperty("ip_latlon", {
        name: "ip_latlon",
        label: "IP Latitude & Longitude",
        description: "",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["ip_state"] = new ContactProperty("ip_state", {
        name: "ip_state",
        label: "IP State/Region",
        description: "The state or region reported by a contact's IP address. This is automatically set by HubSpot and can be used for segmentation and reporting.",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["ip_state_code"] = new ContactProperty("ip_state_code", {
        name: "ip_state_code",
        label: "IP State Code/Region Code",
        description: "The state code or region code reported by a contact's IP address. This is automatically set by HubSpot and can be used for segmentation and reporting.",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["ip_zipcode"] = new ContactProperty("ip_zipcode", {
        name: "ip_zipcode",
        label: "IP Zipcode",
        description: "The zipcode reported by a contact's IP address. This is automatically set by HubSpot and can be used for segmentation and reporting.",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["job_function"] = new ContactProperty("job_function", {
        name: "job_function",
        label: "Job function",
        description: "A contact's job function. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["last_utm_campaign"] = new ContactProperty("last_utm_campaign", {
        name: "last_utm_campaign",
        label: "Last UTM Campaign",
        description: "Currently only tracked for app registrations.",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["last_utm_medium"] = new ContactProperty("last_utm_medium", {
        name: "last_utm_medium",
        label: "Last UTM Medium",
        description: "Currently only tracked for app registrations.",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["last_utm_source"] = new ContactProperty("last_utm_source", {
        name: "last_utm_source",
        label: "Last UTM Source",
        description: "Currently only tracked for app registrations.",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["lastmodifieddate"] = new ContactProperty("lastmodifieddate", {
        name: "lastmodifieddate",
        label: "Last Modified Date",
        description: "The date any property on this contact was modified",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["marital_status"] = new ContactProperty("marital_status", {
        name: "marital_status",
        label: "Marital Status",
        description: "A contact's marital status. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["military_status"] = new ContactProperty("military_status", {
        name: "military_status",
        label: "Military status",
        description: "A contact's military status. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["num_associated_deals"] = new ContactProperty("num_associated_deals", {
        name: "num_associated_deals",
        label: "Associated Deals",
        description: "The number of deals associated with this contact. This is set automatically by HubSpot.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["num_conversion_events"] = new ContactProperty("num_conversion_events", {
        name: "num_conversion_events",
        label: "Number of Form Submissions",
        description: "The number of forms this contact has submitted",
        groupName: "conversioninformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["num_unique_conversion_events"] = new ContactProperty("num_unique_conversion_events", {
        name: "num_unique_conversion_events",
        label: "Number of Unique Forms Submitted",
        description: "The number of different forms this contact has submitted",
        groupName: "conversioninformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["recent_conversion_date"] = new ContactProperty("recent_conversion_date", {
        name: "recent_conversion_date",
        label: "Recent Conversion Date",
        description: "The date this contact last submitted a form",
        groupName: "conversioninformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["recent_conversion_event_name"] = new ContactProperty("recent_conversion_event_name", {
        name: "recent_conversion_event_name",
        label: "Recent Conversion",
        description: "The last form this contact submitted",
        groupName: "conversioninformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["recent_deal_amount"] = new ContactProperty("recent_deal_amount", {
        name: "recent_deal_amount",
        label: "Recent Deal Amount",
        description: "The amount of the last closed won deal associated with a contact. This is set automatically by HubSpot based on information from the Deals object.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["recent_deal_close_date"] = new ContactProperty("recent_deal_close_date", {
        name: "recent_deal_close_date",
        label: "Recent Deal Close Date",
        description: "The date that the last deal associated with a contact was won. This is automatically set by HubSpot based on information from the Deals object.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["relationship_status"] = new ContactProperty("relationship_status", {
        name: "relationship_status",
        label: "Relationship Status",
        description: "A contact's relationship status. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["school"] = new ContactProperty("school", {
        name: "school",
        label: "School",
        description: "A contact's school. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["seniority"] = new ContactProperty("seniority", {
        name: "seniority",
        label: "Seniority",
        description: "A contact's seniority. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["start_date"] = new ContactProperty("start_date", {
        name: "start_date",
        label: "Start date",
        description: "A contact's start date. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["total_revenue"] = new ContactProperty("total_revenue", {
        name: "total_revenue",
        label: "Total Revenue",
        description: "The sum from all closed won deal revenue associated with a contact. This is automatically set by HubSpot and can be used for segmentation and reporting.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: -1,
    });

    properties["work_email"] = new ContactProperty("work_email", {
        name: "work_email",
        label: "Work email",
        description: "A contact's work email. This property is required for the Facebook Ads Integration. This property will be automatically synced via the Lead Ads tool",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: -1,
    });

    properties["firstname"] = new ContactProperty("firstname", {
        name: "firstname",
        label: "First Name",
        description: "A contact's first name",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 0,
    });

    properties["hs_analytics_first_url"] = new ContactProperty("hs_analytics_first_url", {
        name: "hs_analytics_first_url",
        label: "First Page Seen",
        description: "The first page a contact saw on your website. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 0,
    });

    properties["hs_email_delivered"] = new ContactProperty("hs_email_delivered", {
        name: "hs_email_delivered",
        label: "Marketing emails delivered",
        description: "The number of marketing emails delivered for the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 0,
    });

    properties["hs_email_optout_7610754"] = new ContactProperty("hs_email_optout_7610754", {
        name: "hs_email_optout_7610754",
        label: "Opted out of email: Marketing Information",
        description: "Indicates that the current email address has opted out of this email type.",
        groupName: "emailinformation",
        type: "enumeration",
        fieldType: "booleancheckbox",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"No","displayOrder":-1,"value":"false"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Yes","displayOrder":-1,"value":"true"}],
        formField: false,
        displayOrder: 0,
    });

    properties["twitterhandle"] = new ContactProperty("twitterhandle", {
        name: "twitterhandle",
        label: "Twitter Username",
        description: "The contact's Twitter handle. This is set by HubSpot using the contact's email address.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 0,
    });

    properties["hs_analytics_last_url"] = new ContactProperty("hs_analytics_last_url", {
        name: "hs_analytics_last_url",
        label: "Last Page Seen",
        description: "The last page a contact saw on your website. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 1,
    });

    properties["hs_email_open"] = new ContactProperty("hs_email_open", {
        name: "hs_email_open",
        label: "Marketing emails opened",
        description: "The number of marketing emails opened for the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 1,
    });

    properties["lastname"] = new ContactProperty("lastname", {
        name: "lastname",
        label: "Last Name",
        description: "A contact's last name",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 1,
    });

    properties["hs_analytics_num_page_views"] = new ContactProperty("hs_analytics_num_page_views", {
        name: "hs_analytics_num_page_views",
        label: "Number of Pageviews",
        description: "The sum of all pages a contact has seen on your website. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 2,
    });

    properties["hs_email_click"] = new ContactProperty("hs_email_click", {
        name: "hs_email_click",
        label: "Marketing emails clicked",
        description: "The number of marketing emails which have had link clicks for the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 2,
    });

    properties["salutation"] = new ContactProperty("salutation", {
        name: "salutation",
        label: "Salutation",
        description: "The title used to address a contact",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 2,
    });

    properties["email"] = new ContactProperty("email", {
        name: "email",
        label: "Email",
        description: "A contact's email address",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 3,
    });

    properties["hs_analytics_num_visits"] = new ContactProperty("hs_analytics_num_visits", {
        name: "hs_analytics_num_visits",
        label: "Number of Sessions",
        description: "The sum of all sessions a contact has made to your website. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 3,
    });

    properties["hs_email_bounce"] = new ContactProperty("hs_email_bounce", {
        name: "hs_email_bounce",
        label: "Marketing emails bounced",
        description: "The number of marketing emails that bounced for the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 3,
    });

    properties["hs_persona"] = new ContactProperty("hs_persona", {
        name: "hs_persona",
        label: "Persona",
        description: "A contact's persona",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: true,
        displayOrder: 3,
    });

    properties["hs_analytics_num_event_completions"] = new ContactProperty("hs_analytics_num_event_completions", {
        name: "hs_analytics_num_event_completions",
        label: "Number of event completions",
        description: "The sum of all events a contact has experienced. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 4,
    });

    properties["hs_email_optout"] = new ContactProperty("hs_email_optout", {
        name: "hs_email_optout",
        label: "Unsubscribed from all email",
        description: "Indicates that the current email address has opted out of all email.",
        groupName: "emailinformation",
        type: "bool",
        fieldType: "booleancheckbox",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"True","displayOrder":0,"value":"true"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"False","displayOrder":1,"value":"false"}],
        formField: false,
        displayOrder: 4,
    });

    properties["mobilephone"] = new ContactProperty("mobilephone", {
        name: "mobilephone",
        label: "Mobile Phone Number",
        description: "A contact's mobile phone number",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 4,
    });

    properties["phone"] = new ContactProperty("phone", {
        name: "phone",
        label: "Phone Number",
        description: "A contact's primary phone number",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 4,
    });

    properties["fax"] = new ContactProperty("fax", {
        name: "fax",
        label: "Fax Number",
        description: "A contact's primary fax number",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 5,
    });

    properties["hs_analytics_first_timestamp"] = new ContactProperty("hs_analytics_first_timestamp", {
        name: "hs_analytics_first_timestamp",
        label: "Time First Seen",
        description: "The first time a contact has been seen. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 5,
    });

    properties["hs_email_last_email_name"] = new ContactProperty("hs_email_last_email_name", {
        name: "hs_email_last_email_name",
        label: "Last marketing email name",
        description: "The name of the last marketing email sent to the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 5,
    });

    properties["hs_email_last_send_date"] = new ContactProperty("hs_email_last_send_date", {
        name: "hs_email_last_send_date",
        label: "Last marketing email send date",
        description: "The date of the most recent delivery for any marketing email to the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 5,
    });

    properties["address"] = new ContactProperty("address", {
        name: "address",
        label: "Street Address",
        description: "A contact's street address, including apartment or unit #",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 6,
    });

    properties["engagements_last_meeting_booked"] = new ContactProperty("engagements_last_meeting_booked", {
        name: "engagements_last_meeting_booked",
        label: "Date of last meeting booked in meetings tool",
        description: "The date of the most recent meeting a contact has booked through the meetings tool.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["engagements_last_meeting_booked_campaign"] = new ContactProperty("engagements_last_meeting_booked_campaign", {
        name: "engagements_last_meeting_booked_campaign",
        label: "Campaign of last booking in meetings tool",
        description: "This UTM parameter shows which marketing campaign (e.g. a specific email) referred the contact to the meetings tool for their most recent booking. This property is only populated when you add tracking parameters to your meeting link.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["engagements_last_meeting_booked_medium"] = new ContactProperty("engagements_last_meeting_booked_medium", {
        name: "engagements_last_meeting_booked_medium",
        label: "Medium of last booking in meetings tool",
        description: "This UTM parameter shows which channel (e.g. email) referred the contact to the meetings tool for their most recent booking. This property is only populated when you add tracking parameters to your meeting link.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["engagements_last_meeting_booked_source"] = new ContactProperty("engagements_last_meeting_booked_source", {
        name: "engagements_last_meeting_booked_source",
        label: "Source of last booking in meetings tool",
        description: "This UTM parameter shows which site (e.g. Twitter) referred the contact to the meetings tool for their most recent booking. This property is only populated when you add tracking parameters to your meeting link.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["hs_analytics_first_visit_timestamp"] = new ContactProperty("hs_analytics_first_visit_timestamp", {
        name: "hs_analytics_first_visit_timestamp",
        label: "Time of First Session",
        description: "The first time a contact visited your website. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["hs_email_last_open_date"] = new ContactProperty("hs_email_last_open_date", {
        name: "hs_email_last_open_date",
        label: "Last marketing email open date",
        description: "The date of the most recent open for any marketing email to the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["hs_latest_meeting_activity"] = new ContactProperty("hs_latest_meeting_activity", {
        name: "hs_latest_meeting_activity",
        label: "Latest meeting activity",
        description: "The date of the most recent meeting (past or upcoming) logged for, scheduled with, or booked by this contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["hs_sales_email_last_replied"] = new ContactProperty("hs_sales_email_last_replied", {
        name: "hs_sales_email_last_replied",
        label: "Recent Sales Email Replied Date",
        description: "The last time a tracked sales email was replied to by this user. This is set automatically by HubSpot based on user actions in the contact record.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["hubspot_owner_id"] = new ContactProperty("hubspot_owner_id", {
        name: "hubspot_owner_id",
        label: "Contact owner",
        description: "The owner of a contact. This can be any HubSpot user or Salesforce integration user, and can be set manually or via Workflows.",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["notes_last_contacted"] = new ContactProperty("notes_last_contacted", {
        name: "notes_last_contacted",
        label: "Last Contacted",
        description: "The last time a call, email, or meeting was logged for a contact. This is set automatically by HubSpot based on user actions in the contact record.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["notes_last_updated"] = new ContactProperty("notes_last_updated", {
        name: "notes_last_updated",
        label: "Last Activity Date",
        description: "The last time a note, call, email, meeting, or task was logged for a contact. This is set automatically by HubSpot based on user actions in the contact record.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["notes_next_activity_date"] = new ContactProperty("notes_next_activity_date", {
        name: "notes_next_activity_date",
        label: "Next Activity Date",
        description: "The date of the next upcoming activity for a contact. This is set automatically by HubSpot based on user actions in the contact record.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["num_contacted_notes"] = new ContactProperty("num_contacted_notes", {
        name: "num_contacted_notes",
        label: "Number of times contacted",
        description: "The number of times a call, email, or meeting was logged for a contact. This is set automatically by HubSpot based on user actions in the contact record.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["num_notes"] = new ContactProperty("num_notes", {
        name: "num_notes",
        label: "Number of Sales Activities",
        description: "The number of sales activities for a contact. This is set automatically by HubSpot based on user actions in the contact record.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["surveymonkeyeventlastupdated"] = new ContactProperty("surveymonkeyeventlastupdated", {
        name: "surveymonkeyeventlastupdated",
        label: "SurveyMonkey Event Last Updated",
        description: "This field is meaningless on its own, and is solely used for triggering dynamic list updates when SurveyMonkey information is updated",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["webinareventlastupdated"] = new ContactProperty("webinareventlastupdated", {
        name: "webinareventlastupdated",
        label: "Webinar Event Last Updated",
        description: "This field is meaningless on its own, and is solely used for triggering dynamic list updates when webinar information is updated",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 6,
    });

    properties["city"] = new ContactProperty("city", {
        name: "city",
        label: "City",
        description: "A contact's city of residence",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 7,
    });

    properties["hs_analytics_last_timestamp"] = new ContactProperty("hs_analytics_last_timestamp", {
        name: "hs_analytics_last_timestamp",
        label: "Time Last Seen",
        description: "The last time and date a contact has viewed a page on your website.",
        groupName: "analyticsinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 7,
    });

    properties["hs_email_last_click_date"] = new ContactProperty("hs_email_last_click_date", {
        name: "hs_email_last_click_date",
        label: "Last marketing email click date",
        description: "The date of the most recent link click for any marketing email to the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 7,
    });

    properties["hubspot_team_id"] = new ContactProperty("hubspot_team_id", {
        name: "hubspot_team_id",
        label: "HubSpot Team",
        description: "The team of the owner of a contact.",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: false,
        displayOrder: 7,
    });

    properties["hs_all_owner_ids"] = new ContactProperty("hs_all_owner_ids", {
        name: "hs_all_owner_ids",
        label: "All owner ids",
        description: "The value of all owner referencing properties for this object, both default and custom",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: false,
        displayOrder: 8,
    });

    properties["hs_analytics_last_visit_timestamp"] = new ContactProperty("hs_analytics_last_visit_timestamp", {
        name: "hs_analytics_last_visit_timestamp",
        label: "Time of Last Session",
        description: "The last time and date a contact visited your website.",
        groupName: "analyticsinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 8,
    });

    properties["hs_email_first_send_date"] = new ContactProperty("hs_email_first_send_date", {
        name: "hs_email_first_send_date",
        label: "First marketing email send date",
        description: "The date of the earliest delivery for any marketing email to the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 8,
    });

    properties["state"] = new ContactProperty("state", {
        name: "state",
        label: "State/Region",
        description: "The contact's state of residence. This might be set via import, form, or integration.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 8,
    });

    properties["hs_all_team_ids"] = new ContactProperty("hs_all_team_ids", {
        name: "hs_all_team_ids",
        label: "All team ids",
        description: "The team ids corresponding to all owner referencing properties for this object, both default and custom",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: false,
        displayOrder: 9,
    });

    properties["hs_analytics_source"] = new ContactProperty("hs_analytics_source", {
        name: "hs_analytics_source",
        label: "Original Source",
        description: "The first known source through which a contact found your website. Source is automatically set by HubSpot, but may be updated manually.",
        groupName: "analyticsinformation",
        type: "enumeration",
        fieldType: "select",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Organic Search","displayOrder":0,"value":"ORGANIC_SEARCH"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Paid Search","displayOrder":1,"value":"PAID_SEARCH"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Email Marketing","displayOrder":2,"value":"EMAIL_MARKETING"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Social Media","displayOrder":3,"value":"SOCIAL_MEDIA"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Referrals","displayOrder":4,"value":"REFERRALS"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Other Campaigns","displayOrder":5,"value":"OTHER_CAMPAIGNS"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Direct Traffic","displayOrder":6,"value":"DIRECT_TRAFFIC"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Offline Sources","displayOrder":7,"value":"OFFLINE"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Paid Social","displayOrder":8,"value":"PAID_SOCIAL"}],
        formField: false,
        displayOrder: 9,
    });

    properties["hs_email_first_open_date"] = new ContactProperty("hs_email_first_open_date", {
        name: "hs_email_first_open_date",
        label: "First marketing email open date",
        description: "The date of the earliest open for any marketing email to the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 9,
    });

    properties["zip"] = new ContactProperty("zip", {
        name: "zip",
        label: "Postal Code",
        description: "The contact's zip code. This might be set via import, form, or integration.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 9,
    });

    properties["country"] = new ContactProperty("country", {
        name: "country",
        label: "Country/Region",
        description: "The contact's country/region of residence. This might be set via import, form, or integration.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 10,
    });

    properties["hs_all_accessible_team_ids"] = new ContactProperty("hs_all_accessible_team_ids", {
        name: "hs_all_accessible_team_ids",
        label: "All accessible team ids",
        description: "The team ids, including up the team hierarchy, corresponding to all owner referencing properties for this object, both default and custom",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [],
        formField: false,
        displayOrder: 10,
    });

    properties["hs_analytics_source_data_1"] = new ContactProperty("hs_analytics_source_data_1", {
        name: "hs_analytics_source_data_1",
        label: "Original Source Drill-Down 1",
        description: "Additional information about the source through which a contact first found your website. This property is automatically set by HubSpot.",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 10,
    });

    properties["hs_email_first_click_date"] = new ContactProperty("hs_email_first_click_date", {
        name: "hs_email_first_click_date",
        label: "First marketing email click date",
        description: "The date of the earliest link click for any marketing email to the current email address. This is automatically set by HubSpot.",
        groupName: "emailinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 10,
    });

    properties["hs_analytics_source_data_2"] = new ContactProperty("hs_analytics_source_data_2", {
        name: "hs_analytics_source_data_2",
        label: "Original Source Drill-Down 2",
        description: "Additional information about the source through which a contact first found your website. This property is automatically set by HubSpot.",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 11,
    });

    properties["hs_email_is_ineligible"] = new ContactProperty("hs_email_is_ineligible", {
        name: "hs_email_is_ineligible",
        label: "Is globally ineligible",
        description: "Indicates the contact is globally ineligible for email.",
        groupName: "emailinformation",
        type: "bool",
        fieldType: "booleancheckbox",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"True","displayOrder":0,"value":"true"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"False","displayOrder":1,"value":"false"}],
        formField: false,
        displayOrder: 11,
    });

    properties["hs_language"] = new ContactProperty("hs_language", {
        name: "hs_language",
        label: "Preferred language",
        description: "Set your contact's preferred language for communications. This property can be changed from an import, form, or integration.",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Afrikaans","displayOrder":0,"value":"af"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Albanian","displayOrder":1,"value":"sq"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Albanian - Albania","displayOrder":2,"value":"sq-al"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic","displayOrder":3,"value":"ar"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Algeria","displayOrder":4,"value":"ar-dz"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Bahrain","displayOrder":5,"value":"ar-bh"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Egypt","displayOrder":6,"value":"ar-eg"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Iraq","displayOrder":7,"value":"ar-iq"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Jordan","displayOrder":8,"value":"ar-jo"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Kuwait","displayOrder":9,"value":"ar-kw"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Lebanon","displayOrder":10,"value":"ar-lb"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Libya","displayOrder":11,"value":"ar-ly"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Morocco","displayOrder":12,"value":"ar-ma"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Oman","displayOrder":13,"value":"ar-om"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Qatar","displayOrder":14,"value":"ar-qa"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Saudi Arabia","displayOrder":15,"value":"ar-sa"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Sudan","displayOrder":16,"value":"ar-sd"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Syria","displayOrder":17,"value":"ar-sy"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Tunisia","displayOrder":18,"value":"ar-tn"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - United Arab Emirates","displayOrder":19,"value":"ar-ae"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Arabic - Yemen","displayOrder":20,"value":"ar-ye"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Armenian","displayOrder":21,"value":"hy"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Basque","displayOrder":22,"value":"eu"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Belarusian","displayOrder":23,"value":"be"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Belarusian - Belarus","displayOrder":24,"value":"be-by"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Bulgarian","displayOrder":25,"value":"bg"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Bulgarian - Bulgaria","displayOrder":26,"value":"bg-bg"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Catalan","displayOrder":27,"value":"ca"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Catalan - Catalan","displayOrder":28,"value":"ca-es"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Chinese","displayOrder":29,"value":"zh"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Chinese - China","displayOrder":30,"value":"zh-cn"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Chinese - Hong Kong SAR","displayOrder":31,"value":"zh-hk"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Chinese - Macau SAR","displayOrder":32,"value":"zh-mo"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Chinese - Singapore","displayOrder":33,"value":"zh-sg"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Chinese - Taiwan","displayOrder":34,"value":"zh-tw"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Chinese (Simplified)","displayOrder":35,"value":"zh-chs"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Chinese (Traditional)","displayOrder":36,"value":"zh-cht"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Croatian","displayOrder":37,"value":"hr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Croatian - Croatia","displayOrder":38,"value":"hr-hr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Czech","displayOrder":39,"value":"cs"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Czech - Czech Republic","displayOrder":40,"value":"cs-cz"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Danish","displayOrder":41,"value":"da"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Danish - Denmark","displayOrder":42,"value":"da-dk"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Dutch","displayOrder":43,"value":"nl"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Dutch - Belgium","displayOrder":44,"value":"nl-be"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Dutch - The Netherlands","displayOrder":45,"value":"nl-nl"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English","displayOrder":46,"value":"en"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - Australia","displayOrder":47,"value":"en-au"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - Canada","displayOrder":48,"value":"en-ca"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - Hong Kong","displayOrder":49,"value":"en-hk"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - India","displayOrder":50,"value":"en-in"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - Ireland","displayOrder":51,"value":"en-ie"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - Malaysia","displayOrder":52,"value":"en-my"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - Malta","displayOrder":53,"value":"en-mt"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - New Zealand","displayOrder":54,"value":"en-nz"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - Philippines","displayOrder":55,"value":"en-ph"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - Singapore","displayOrder":56,"value":"en-sg"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - South Africa","displayOrder":57,"value":"en-za"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - United Kingdom","displayOrder":58,"value":"en-gb"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - United States","displayOrder":59,"value":"en-us"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"English - Zimbabwe","displayOrder":60,"value":"en-zw"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Estonian","displayOrder":61,"value":"et"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Estonian - Estonia","displayOrder":62,"value":"et-ee"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Faroese","displayOrder":63,"value":"fo"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Farsi","displayOrder":64,"value":"fa"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Finnish","displayOrder":65,"value":"fi"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Finnish - Finland","displayOrder":66,"value":"fi-fi"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"French","displayOrder":67,"value":"fr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"French - Belgium","displayOrder":68,"value":"fr-be"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"French - Canada","displayOrder":69,"value":"fr-ca"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"French - France","displayOrder":70,"value":"fr-fr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"French - Luxembourg","displayOrder":71,"value":"fr-lu"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"French - Monaco","displayOrder":72,"value":"fr-mc"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"French - Switzerland","displayOrder":73,"value":"fr-ch"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Galician","displayOrder":74,"value":"gl"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Georgian","displayOrder":75,"value":"ka"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"German","displayOrder":76,"value":"de"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"German - Austria","displayOrder":77,"value":"de-at"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"German - Germany","displayOrder":78,"value":"de-de"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"German - Greece","displayOrder":79,"value":"de-gr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"German - Liechtenstein","displayOrder":80,"value":"de-li"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"German - Luxembourg","displayOrder":81,"value":"de-lu"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"German - Switzerland","displayOrder":82,"value":"de-ch"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Greek","displayOrder":83,"value":"el"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Greek - Cyprus","displayOrder":84,"value":"el-cy"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Greek - Greece","displayOrder":85,"value":"el-gr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Gujarati","displayOrder":86,"value":"gu"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Hebrew","displayOrder":87,"value":"he"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Hebrew - Israel","displayOrder":88,"value":"iw-il"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Hindi","displayOrder":89,"value":"hi"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Hindi - India","displayOrder":90,"value":"hi-in"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Hungarian","displayOrder":91,"value":"hu"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Hungarian - Hungary","displayOrder":92,"value":"hu-hu"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Icelandic","displayOrder":93,"value":"is"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Icelandic - Iceland","displayOrder":94,"value":"is-is"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Indonesian","displayOrder":95,"value":"id"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Indonesian - Indonesia","displayOrder":96,"value":"in-id"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Irish","displayOrder":97,"value":"ga"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Irish - Ireland","displayOrder":98,"value":"ga-ie"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Italian","displayOrder":99,"value":"it"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Italian - Italy","displayOrder":100,"value":"it-it"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Italian - Switzerland","displayOrder":101,"value":"it-ch"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Japanese","displayOrder":102,"value":"ja"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Japanese - Japan","displayOrder":103,"value":"ja-jp"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Kannada","displayOrder":104,"value":"kn"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Kazakh kok Konkani","displayOrder":105,"value":"kk"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Konkani","displayOrder":106,"value":"kok"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Korean","displayOrder":107,"value":"ko"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Korean - South Korea","displayOrder":108,"value":"ko-kr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Kyrgyz","displayOrder":109,"value":"ky"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Latvian","displayOrder":110,"value":"lv"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Latvian - Latvia","displayOrder":111,"value":"lv-lv"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Lithuanian","displayOrder":112,"value":"lt"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Lithuanian - Lithuania","displayOrder":113,"value":"lt-lt"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Macedonian","displayOrder":114,"value":"mk"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Macedonian - Macedonia","displayOrder":115,"value":"mk-mk"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Malay","displayOrder":116,"value":"ms"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Malay - Brunei","displayOrder":117,"value":"ms-bn"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Malay - Malaysia","displayOrder":118,"value":"ms-my"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Maltese","displayOrder":119,"value":"mt"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Maltese - Malta","displayOrder":120,"value":"mt-mt"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Marathi","displayOrder":121,"value":"mr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Mongolian","displayOrder":122,"value":"mn"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Burmese","displayOrder":123,"value":"my"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Burmese - Myanmar (Burma)","displayOrder":124,"value":"my-mm"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Norwegian","displayOrder":125,"value":"no"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Norwegian Bokmal","displayOrder":126,"value":"nb"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Norwegian - Norway","displayOrder":127,"value":"no-no"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Polish","displayOrder":128,"value":"pl"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Polish - Poland","displayOrder":129,"value":"pl-pl"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Portuguese","displayOrder":130,"value":"pt"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Portuguese - Brazil","displayOrder":131,"value":"pt-br"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Portuguese - Portugal","displayOrder":132,"value":"pt-pt"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Punjabi","displayOrder":133,"value":"pa"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Romanian","displayOrder":134,"value":"ro"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Romanian - Romania","displayOrder":135,"value":"ro-ro"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Russian","displayOrder":136,"value":"ru"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Russian - Russia","displayOrder":137,"value":"ru-ru"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Sanskrit","displayOrder":138,"value":"sa"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Serbian","displayOrder":139,"value":"sr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Serbian - Bosnia and Herzegovina","displayOrder":140,"value":"sr-ba"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Serbian - Montenegro","displayOrder":141,"value":"sr-me"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Serbian - Serbia","displayOrder":142,"value":"sr-rs"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Serbian - Serbia and Montenegro (Former)","displayOrder":143,"value":"sr-cs"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Slovak","displayOrder":144,"value":"sk"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Slovak - Slovakia","displayOrder":145,"value":"sk-sk"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Slovenian","displayOrder":146,"value":"sl"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Slovenian - Slovenia","displayOrder":147,"value":"sl-si"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish","displayOrder":148,"value":"es"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Argentina","displayOrder":149,"value":"es-ar"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Bolivia","displayOrder":150,"value":"es-bo"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Chile","displayOrder":151,"value":"es-cl"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Colombia","displayOrder":152,"value":"es-co"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Costa Rica","displayOrder":153,"value":"es-cr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Cuba","displayOrder":154,"value":"es-cu"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Dominican Republic","displayOrder":155,"value":"es-do"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Ecuador","displayOrder":156,"value":"es-ec"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - El Salvador","displayOrder":157,"value":"es-sv"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Guatemala","displayOrder":158,"value":"es-gt"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Honduras","displayOrder":159,"value":"es-hn"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Mexico","displayOrder":160,"value":"es-mx"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Nicaragua","displayOrder":161,"value":"es-ni"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Panama","displayOrder":162,"value":"es-pa"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Paraguay","displayOrder":163,"value":"es-py"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Peru","displayOrder":164,"value":"es-pe"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Puerto Rico","displayOrder":165,"value":"es-pr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Spain","displayOrder":166,"value":"es-es"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - United States","displayOrder":167,"value":"es-us"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Uruguay","displayOrder":168,"value":"es-uy"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Spanish - Venezuela","displayOrder":169,"value":"es-ve"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Swahili","displayOrder":170,"value":"sw"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Swedish","displayOrder":171,"value":"sv"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Swedish - Finland","displayOrder":172,"value":"sv-fi"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Swedish - Sweden","displayOrder":173,"value":"sv-se"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Syriac","displayOrder":174,"value":"sy"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Tamil","displayOrder":175,"value":"ta"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Tatar","displayOrder":176,"value":"tt"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Telugu","displayOrder":177,"value":"te"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Thai","displayOrder":178,"value":"th"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Thai - Thailand","displayOrder":179,"value":"th-th"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Turkish","displayOrder":180,"value":"tr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Turkish - Turkey","displayOrder":181,"value":"tr-tr"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Ukrainian","displayOrder":182,"value":"uk"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Ukrainian - Ukraine","displayOrder":183,"value":"uk-ua"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Urdu","displayOrder":184,"value":"ur"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Vietnamese","displayOrder":185,"value":"vi"},{"readOnly":true,"doubleData":null,"description":null,"hidden":false,"label":"Vietnamese - Vietnam","displayOrder":186,"value":"vi-vn"}],
        formField: true,
        displayOrder: 11,
    });

    properties["hs_analytics_first_referrer"] = new ContactProperty("hs_analytics_first_referrer", {
        name: "hs_analytics_first_referrer",
        label: "First Referring Site",
        description: "The first website that referred a contact to your website. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 12,
    });

    properties["jobtitle"] = new ContactProperty("jobtitle", {
        name: "jobtitle",
        label: "Job Title",
        description: "A contact's job title",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 12,
    });

    properties["hs_analytics_last_referrer"] = new ContactProperty("hs_analytics_last_referrer", {
        name: "hs_analytics_last_referrer",
        label: "Last Referring Site",
        description: "The last website that referred a contact to your website. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: false,
        displayOrder: 13,
    });

    properties["message"] = new ContactProperty("message", {
        name: "message",
        label: "Message",
        description: "A default property to be used for any message or comments a contact may want to leave on a form.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "textarea",
        options: [],
        formField: true,
        displayOrder: 13,
    });

    properties["closedate"] = new ContactProperty("closedate", {
        name: "closedate",
        label: "Close Date",
        description: "The date that a contact became a customer. This property is set automatically by HubSpot when a deal or opportunity is marked as closed-won. It can also be set manually or programmatically.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 14,
    });

    properties["hs_analytics_average_page_views"] = new ContactProperty("hs_analytics_average_page_views", {
        name: "hs_analytics_average_page_views",
        label: "Average Pageviews",
        description: "The average number of pages a contact sees. This is automatically set by HubSpot for each contact.",
        groupName: "analyticsinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 14,
    });

    properties["hs_analytics_revenue"] = new ContactProperty("hs_analytics_revenue", {
        name: "hs_analytics_revenue",
        label: "Event Revenue",
        description: "Event revenue can be set on a contact though HubSpot's enterprise Events. http://help.hubspot.com/articles/KCS_Article/Reports/How-do-I-create-Events-in-HubSpot",
        groupName: "analyticsinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 15,
    });

    properties["hs_lifecyclestage_lead_date"] = new ContactProperty("hs_lifecyclestage_lead_date", {
        name: "hs_lifecyclestage_lead_date",
        label: "Became a Lead Date",
        description: "The date when a contact's lifecycle stage changed to Lead. This is automatically set by HubSpot for each contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 15,
    });

    properties["hs_lifecyclestage_marketingqualifiedlead_date"] = new ContactProperty("hs_lifecyclestage_marketingqualifiedlead_date", {
        name: "hs_lifecyclestage_marketingqualifiedlead_date",
        label: "Became a Marketing Qualified Lead Date",
        description: "The date when a contact's lifecycle stage changed to MQL. This is automatically set by HubSpot for each contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 15,
    });

    properties["hs_lifecyclestage_opportunity_date"] = new ContactProperty("hs_lifecyclestage_opportunity_date", {
        name: "hs_lifecyclestage_opportunity_date",
        label: "Became an Opportunity Date",
        description: "The date when a contact's lifecycle stage changed to Opportunity. This is automatically set by HubSpot for each contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 15,
    });

    properties["lifecyclestage"] = new ContactProperty("lifecyclestage", {
        name: "lifecyclestage",
        label: "Lifecycle Stage",
        description: "The qualification of contacts to sales readiness. It can be set through imports, forms, workflows, and manually on a per contact basis.",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "radio",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Subscriber","displayOrder":0,"value":"subscriber"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Lead","displayOrder":1,"value":"lead"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Marketing Qualified Lead","displayOrder":2,"value":"marketingqualifiedlead"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Sales Qualified Lead","displayOrder":3,"value":"salesqualifiedlead"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Opportunity","displayOrder":4,"value":"opportunity"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Customer","displayOrder":5,"value":"customer"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Evangelist","displayOrder":6,"value":"evangelist"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"Other","displayOrder":7,"value":"other"}],
        formField: true,
        displayOrder: 15,
    });

    properties["hs_lifecyclestage_salesqualifiedlead_date"] = new ContactProperty("hs_lifecyclestage_salesqualifiedlead_date", {
        name: "hs_lifecyclestage_salesqualifiedlead_date",
        label: "Became a Sales Qualified Lead Date",
        description: "The date when a contact's lifecycle stage changed to SQL. This is automatically set by HubSpot for each contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 16,
    });

    properties["createdate"] = new ContactProperty("createdate", {
        name: "createdate",
        label: "Create Date",
        description: "The date that a contact entered the system",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 17,
    });

    properties["hs_lifecyclestage_evangelist_date"] = new ContactProperty("hs_lifecyclestage_evangelist_date", {
        name: "hs_lifecyclestage_evangelist_date",
        label: "Became an Evangelist Date",
        description: "The date when a contact's lifecycle stage changed to Evangelist. This is automatically set by HubSpot for each contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 17,
    });

    properties["hs_lifecyclestage_customer_date"] = new ContactProperty("hs_lifecyclestage_customer_date", {
        name: "hs_lifecyclestage_customer_date",
        label: "Became a Customer Date",
        description: "The date when a contact's lifecycle stage changed to Customer. This is automatically set by HubSpot for each contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 18,
    });

    properties["hubspotscore"] = new ContactProperty("hubspotscore", {
        name: "hubspotscore",
        label: "HubSpot Score",
        description: "The number that shows qualification of contacts to sales readiness. It can be set in HubSpot's Lead Scoring app.",
        groupName: "contactinformation",
        type: "number",
        fieldType: "calculation_score",
        options: [],
        formField: false,
        displayOrder: 18,
    });

    properties["company"] = new ContactProperty("company", {
        name: "company",
        label: "Company Name",
        description: "The name of the contact's company. This is separate from the Name property of the contact's associated company and can be set independently.",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 19,
    });

    properties["hs_lifecyclestage_subscriber_date"] = new ContactProperty("hs_lifecyclestage_subscriber_date", {
        name: "hs_lifecyclestage_subscriber_date",
        label: "Became a Subscriber Date",
        description: "The date when a contact's lifecycle stage changed to Subscriber. This is automatically set by HubSpot for each contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 19,
    });

    properties["hs_lifecyclestage_other_date"] = new ContactProperty("hs_lifecyclestage_other_date", {
        name: "hs_lifecyclestage_other_date",
        label: "Became an Other Lifecycle Date",
        description: "The date when a contact's lifecycle stage changed to Other. This is automatically set by HubSpot for each contact.",
        groupName: "contactinformation",
        type: "datetime",
        fieldType: "date",
        options: [],
        formField: false,
        displayOrder: 20,
    });

    properties["website"] = new ContactProperty("website", {
        name: "website",
        label: "Website URL",
        description: "The contact's company website",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 20,
    });

    properties["numemployees"] = new ContactProperty("numemployees", {
        name: "numemployees",
        label: "Number of Employees",
        description: "The number of company employees",
        groupName: "contactinformation",
        type: "enumeration",
        fieldType: "select",
        options: [{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"1-5","displayOrder":0,"value":"1-5"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"5-25","displayOrder":1,"value":"5-25"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"25-50","displayOrder":2,"value":"25-50"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"50-100","displayOrder":3,"value":"50-100"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"100-500","displayOrder":4,"value":"100-500"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"500-1000","displayOrder":5,"value":"500-1000"},{"readOnly":null,"doubleData":null,"description":null,"hidden":false,"label":"1000+","displayOrder":6,"value":"1000+"}],
        formField: true,
        displayOrder: 21,
    });

    properties["annualrevenue"] = new ContactProperty("annualrevenue", {
        name: "annualrevenue",
        label: "Annual Revenue",
        description: "Annual company revenue",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 22,
    });

    properties["industry"] = new ContactProperty("industry", {
        name: "industry",
        label: "Industry",
        description: "The industry a contact is in",
        groupName: "contactinformation",
        type: "string",
        fieldType: "text",
        options: [],
        formField: true,
        displayOrder: 23,
    });

    properties["associatedcompanyid"] = new ContactProperty("associatedcompanyid", {
        name: "associatedcompanyid",
        label: "Associated Company ID",
        description: "The HubSpot defined ID of a contact's associated company in HubSpot",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 24,
    });

    properties["associatedcompanylastupdated"] = new ContactProperty("associatedcompanylastupdated", {
        name: "associatedcompanylastupdated",
        label: "Associated Company Last Updated",
        description: "This field is meaningless on its own, and is solely used for triggering dynamic list updates when a company is updated",
        groupName: "contactinformation",
        type: "number",
        fieldType: "number",
        options: [],
        formField: false,
        displayOrder: 25,
    });

    return properties;
};

export { contactProperties };
