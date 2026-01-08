import type { AllUnionFields } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # getOrThrow
 *
 * ```ts
 * function Object.getOrThrow<
 *     T extends object,
 *     U extends keyof AllUnionFields<T>,
 * >(
 *     target: T,
 *     key: U,
 * ): Exclude<AllUnionFields<T>[U], null | undefined>
 * ```
 *
 * Returns the value of `key` property from `target` object, or throws an error if not found or null/undefined.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.getOrThrow({ a: 1, b: 2 }, "a"); // 1
 * Object.getOrThrow({ a: 1, b: 2 }, "c"); // throws FnError
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2 }, Object.getOrThrow("a")); // 1
 * pipe({ a: 1, b: 2 }, Object.getOrThrow("c")); // throws FnError
 * ```
 *
 */
export const getOrThrow: {
    <T extends object, U extends keyof AllUnionFields<T>>(key: U): (target: T) => Exclude<AllUnionFields<T>[U], null | undefined>
    <T extends object, U extends keyof AllUnionFields<T>>(target: T, key: U): Exclude<AllUnionFields<T>[U], null | undefined>
} = dfdlT((target: any, key: any): any => {
    const value = target[key]
    if (value != null) return value
    throw new Error("Object.getOrThrow: Value not found.")
}, 2)
