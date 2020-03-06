import axios from "axios";
import {
    RestClientFactoryOptions, GenericObject, RestClientResponse
} from '../../types/Request';

export class RestClient {
    private readonly opts: RestClientFactoryOptions;

    constructor(opts: RestClientFactoryOptions) {
        this.opts = opts;
    }

    private async send(method: string, path: string, data: GenericObject = {}): Promise<RestClientResponse> {
        try {
            // Create the reqData object. https://github.com/axios/axios#axios-api
            const reqData = Object.assign({}, this.opts, {
                method,
                data,
                url: path,
            });

            // Remove the data object if it is a "GET" request.
            if (method === 'GET') {
                delete reqData.data;
            }

            // Make the request
            const result = await axios(reqData);

            return [ null, result.data ];
        } catch(e) {
            return [ e, null ];
        }
    }

    async get(path: string, qs: GenericObject): Promise<RestClientResponse> {
        const queryKey = path.split("?")[1] === undefined ? "?" : "&";
        const queryKeys = Object.keys(qs);
        const query = queryKeys.map((key: string) => {
            return `${key}=${encodeURIComponent(qs[key])}`;
        }).join("&");
        const fullPath = path + queryKey + query;
        return await this.send("GET", fullPath);
    }

    async post(path: string, data: GenericObject): Promise<RestClientResponse> {
        return await this.send("POST", path, data);
    }

    async put(path: string, data: GenericObject): Promise<RestClientResponse> {
        return await this.send("PUT", path, data);
    }

    async delete(path: string, data: GenericObject): Promise<RestClientResponse> {
        return await this.send("DELETE", path, data);
    }
}
