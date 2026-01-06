import type { AllUnionFields } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # get
 *
 * ```ts
 * function Object.get(target: Record<K, V>, key: K): V | undefined
 * ```
 *
 * Returns the value of `key` property from `target` object, or undefined if not found.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.get({ a: 1, b: 2 }, "a"); // 1
 * Object.get({ a: 1, b: 2 }, "c"); // undefined
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2 }, Object.get("a")); // 1
 * pipe({ a: 1, b: 2 }, Object.get("c")); // undefined
 * ```
 *
 */
export const get: {
    <T extends object, U extends keyof AllUnionFields<T>>(key: U): (target: T) => AllUnionFields<T>[U]
    <T extends object, U extends keyof AllUnionFields<T>>(target: T, key: U): AllUnionFields<T>[U]
} = dfdlT((target: any, key: any): any => {
    return target[key]
}, 2)
