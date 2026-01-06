import type { Entries } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # entries
 *
 * ```ts
 * function Object.entries(target: Record<K, V>): [K, V][]
 * ```
 *
 * Returns an array of key-value pairs from `target` object.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.entries({ a: 1, b: 2, c: 3 }); // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Object.entries()); // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 *
 */
export const entries: {
    (): <T extends object>(target: T) => Entries<T>
    <T extends object>(target: T): Entries<T>
} = dfdlT(<T extends object>(target: T): any => {
    return Object.entries(target)
}, 1)
