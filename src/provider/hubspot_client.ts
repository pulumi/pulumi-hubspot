import * as pulumi from "@pulumi/pulumi";
import { RestClient } from "./rest_client";
import { GenericObject, RestClientResponse } from "../../types/Request";

// Create the Pulumi config object.
const config = new pulumi.Config();
const hsApiKey = config.require("hubSpotApiKey");

export class HubSpotClient {
    private restClient: RestClient;
    private baseUrl = "https://api.hubapi.com";

    constructor() {
        this.restClient = new RestClient({});
    }

    async get(path: string, qs: GenericObject = {}): Promise<RestClientResponse> {
        const fullUrl = this.baseUrl + path + "?hapikey=" + hsApiKey;
        return await this.restClient.get(fullUrl, qs);
    }

    async post(path: string, data: GenericObject): Promise<RestClientResponse> {
        const fullUrl = this.baseUrl + path + "?hapikey=" + hsApiKey;
        return await this.restClient.post(fullUrl, data);
    }

    async put(path: string, data: GenericObject): Promise<RestClientResponse> {
        const fullUrl = this.baseUrl + path + "?hapikey=" + hsApiKey;
        return await this.restClient.put(fullUrl, data);
    }

    async delete(path: string, data: GenericObject): Promise<RestClientResponse> {
        const fullUrl = this.baseUrl + path + "?hapikey=" + hsApiKey;
        return await this.restClient.delete(fullUrl, data);
    }
}
