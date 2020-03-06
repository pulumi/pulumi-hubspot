export type RestClientError = null | GenericObject;
export type RestClientResult = null | GenericObject;
export type RestClientResponse = [ RestClientError, RestClientResult];

export interface GenericObject {
    [key: string]: any;
}
export interface RestClientFactoryOptions extends GenericObject {
    baseURL?: string;
    headers?: { [key: string]: string };
}

export interface RestClientParentFunction {
    ($options: RestClientFactoryOptions): RestClientChildFunction;
}

export interface RestClientChildFunction {
    (opts: RestClientFactoryOptions): RestClientObject;
}

export interface RestClientObject {
    get(path: string, qs: GenericObject): Promise<any>;
    post(path:string, data: GenericObject): Promise<any>;
    put(path: string, data: GenericObject): Promise<any>;
    delete(path: string, data: GenericObject): Promise<any>;
}
