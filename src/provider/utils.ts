import * as pulumi from "@pulumi/pulumi";
import { GenericObject } from "../../types/Request";

export class ObjectCheckFailureValidator {
    public object: GenericObject;
    public failures: pulumi.dynamic.CheckFailure[];

    constructor(obj: GenericObject) {
        this.object = obj;
        this.failures = [];
    }

    public key(key: string) {
        return this.generateHandlers(key);
    }

    private generateHandlers(key: string) {
        const value = this.object[key];

        return {
            isPresent: () => {
                const keyExists = this.object.hasOwnProperty(key);
                if (!keyExists) {
                    this.failures.push({
                        property: key,
                        reason: `Missing parameter ${key}`,
                    });
                }

                return this.generateHandlers(key);
            },

            isString: () => {
                const isString = typeof value === "string";
                if (!isString) {
                    this.failures.push({
                        property: key,
                        reason: `Expected ${key} to be a string but got ${typeof value}.`,
                    });
                } else if (value.trim().length !== value.length) {
                    this.failures.push({
                        property: key,
                        reason: `Extra whitespace detected for ${key}.`,
                    });
                } else if (value.trim().length === 0) {
                    this.failures.push({
                        property: key,
                        reason: `Empty string detected for ${key}.`,
                    });
                }

                return this.generateHandlers(key)
            },

            isNumber: () => {
                const isNumber = typeof value === "number";
                if (!isNumber) {
                    this.failures.push({
                        property: key,
                        reason: `Expected ${key} to be a number but got ${typeof value}.`,
                    });
                }

                return this.generateHandlers(key);
            },

            isBoolean: () => {
                const isBoolean = typeof value === "boolean";
                if (!isBoolean) {
                    this.failures.push({
                        property: key,
                        reason: `Expected ${key} to be a boolean but got a ${typeof value}.`,
                    });
                }

                return this.generateHandlers(key);
            },

            isArray: () => {
                const isArray = Array.isArray(value);
                if (!isArray) {
                    this.failures.push({
                        property: key,
                        reason: `Expected ${key} to be an arry but got ${typeof value}.`,
                    });
                }

                return this.generateHandlers(key);
            },
        }
    }

    public getFailures() {
        return this.failures;
    }
}

export function getResourceDiffKeys(a: GenericObject, b: GenericObject): string[] {
    const diffKeys: string[] = [];
    const bKeys = Object.keys(b);
    const remainingKeys = Object.assign({}, a)

    for (let i = 0; i < bKeys.length; i++) {
        const key = bKeys[i]
        const aVal = a[key];
        const bVal = b[key];

        if (aVal !== bVal) {
            diffKeys.push(key);
        }

        delete remainingKeys[key];
    }

    const deletedKeys = Object.keys(remainingKeys);

    return diffKeys.concat(deletedKeys);
}
