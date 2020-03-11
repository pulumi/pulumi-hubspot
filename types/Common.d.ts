export interface GenericObject {
    [key: string]: any;
}

export interface GenericFunction {
    // @ts-ignore
    (...args?: any[]): any;
  }
