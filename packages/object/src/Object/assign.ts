import type { Merge } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"
import { merge } from "./merge"

/**
 * # assign
 *
 * ```ts
 * function Object.assign<T extends object, U extends object>(
 *     target: T,
 *     source: U,
 * ): T extends unknown ? Merge<T, U> : never
 * ```
 *
 * Merges properties from `source` object into `target` object, creating a new object.
 *
 * Looser version of `merge` - `assign` allows you to redefine keys and add new properties.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.assign({ a: 1, b: 2 }, { b: 3, c: 4 }); // { a: 1, b: 3, c: 4 }
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2 }, Object.assign({ b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }
 * ```
 *
 */
export const assign: {
    <T extends object, U extends object>(source: U): (target: T) => T extends unknown ? Merge<T, U> : never
    <T extends object, U extends object>(target: T, source: U): T extends unknown ? Merge<T, U> : never
} = dfdlT((target: any, source: any): any => {
    return merge(target, source)
}, 2)
