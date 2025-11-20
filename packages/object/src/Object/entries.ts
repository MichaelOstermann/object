import type { Entries } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Object.entries(target)`
 *
 * Returns an array of key-value pairs from `target` object.
 *
 * ## Example
 *
 * ```ts
 * import { Object } from "@monstermann/object";
 *
 * Object.entries({ a: 1, b: 2, c: 3 }); // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 *
 * ```ts
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Object.entries()); // [["a", 1], ["b", 2], ["c", 3]]
 * ```
 */
export const entries: {
    (): <T extends object>(target: T) => Entries<T>
    <T extends object>(target: T): Entries<T>
} = dfdlT(<T extends object>(target: T): any => {
    return Object.entries(target)
}, 1)
