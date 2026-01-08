import type { AllUnionFields, Simplify } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

type PropIs<T extends object, U, V> = T extends unknown
    ? U extends keyof T
        ? V extends T[U]
            ? Simplify<T & Record<U, V>>
            : never
        : never
    : never

/**
 * # propIs
 *
 * ```ts
 * function Object.propIs<
 *     T extends object,
 *     U extends keyof AllUnionFields<T>,
 *     const V extends AllUnionFields<T>[U],
 * >(target: T, key: U, value: V): target is PropIs<T, U, V>
 * ```
 *
 * Checks if the `key` property of `target` object is equal to the specified `value` using strict equality.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.propIs({ a: 1, b: 2 }, "a", 1); // true
 * Object.propIs({ a: 1, b: 2 }, "a", 2); // false
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2 }, Object.propIs("a", 1)); // true
 * pipe({ a: 1, b: 2 }, Object.propIs("a", 2)); // false
 * ```
 *
 */
export const propIs: {
    <T extends object, U extends keyof AllUnionFields<T>, const V extends AllUnionFields<T>[U]>(key: U, value: V): (target: T) => target is PropIs<T, U, V>
    <T extends object, U extends keyof AllUnionFields<T>, const V extends AllUnionFields<T>[U]>(target: T, key: U, value: V): target is PropIs<T, U, V>
} = dfdlT((target: any, key: any, value: any): target is any => {
    return target[key] === value
}, 3)
