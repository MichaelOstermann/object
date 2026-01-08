import type { AllUnionFields } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # getOr
 *
 * ```ts
 * function Object.getOr<
 *     T extends object,
 *     U extends keyof AllUnionFields<T>,
 *     V,
 * >(
 *     target: T,
 *     key: U,
 *     or: V,
 * ): Exclude<AllUnionFields<T>[U] | V, null | undefined>
 * ```
 *
 * Returns the value of `key` property from `target` object, or the `or` value if not found or falsy.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.getOr({ a: 1, b: 2 }, "a", 0); // 1
 * Object.getOr({ a: 1, b: 2 }, "c", 0); // 0
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2 }, Object.getOr("a", 0)); // 1
 * pipe({ a: 1, b: 2 }, Object.getOr("c", 0)); // 0
 * ```
 *
 */
export const getOr: {
    <T extends object, U extends keyof AllUnionFields<T>, V>(key: U, or: V): (target: T) => Exclude<AllUnionFields<T>[U] | V, null | undefined>
    <T extends object, U extends keyof AllUnionFields<T>, V>(target: T, key: U, or: V): Exclude<AllUnionFields<T>[U] | V, null | undefined>
} = dfdlT((target: any, key: any, or: any): any => {
    return target[key] || or
}, 3)
