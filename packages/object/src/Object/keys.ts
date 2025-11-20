import type { KeysOfUnion } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

/**
 * `Object.keys(target)`
 *
 * Returns an array of `target` object's enumerable property names.
 *
 * ## Example
 *
 * ```ts
 * import { Object } from "@monstermann/object";
 *
 * Object.keys({ a: 1, b: 2, c: 3 }); // ["a", "b", "c"]
 * ```
 *
 * ```ts
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Object.keys()); // ["a", "b", "c"]
 * ```
 */
export const keys: {
    (): <T extends object>(target: T) => KeysOfUnion<T>[]
    <T extends object>(target: T): KeysOfUnion<T>[]
} = dfdlT(<T extends object>(target: T): any => {
    return Object.keys(target)
}, 1)
