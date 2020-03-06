import * as pulumi from "@pulumi/pulumi";
import { GenericObject } from "../../types/Request";

export function checkRequiredKeysExist(obj: GenericObject, requiredKeys: string[]): pulumi.dynamic.CheckFailure[] {
    const failures: pulumi.dynamic.CheckFailure[] = [];

    for (let i = 0; i < requiredKeys.length; i++) {
        const key = requiredKeys[i];
        if (!obj[key]) {
            failures.push({
                property: key,
                reason: `Required key [${key}] is missing.`,
            });
        }
    }

    return failures;
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
