import type { KeysOfUnion, Simplify } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

type HasKey<T extends object, U extends KeysOfUnion<T>> = T extends unknown
    ? U extends keyof T
        ? Simplify<T & Record<U, Required<T>[U]>>
        : never
    : never

/**
 * # hasKey
 *
 * ```ts
 * function Object.hasKey(target: Record<K, V>, key: K): boolean
 * ```
 *
 * Checks if `target` object has the specified `key` property.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.hasKey({ a: 1, b: 2 }, "a"); // true
 * Object.hasKey({ a: 1, b: 2 }, "c"); // false
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2 }, Object.hasKey("a")); // true
 * pipe({ a: 1, b: 2 }, Object.hasKey("c")); // false
 * ```
 *
 */
export const hasKey: {
    <T extends object, U extends KeysOfUnion<T>>(key: U): (target: T) => target is HasKey<T, U>
    <T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasKey<T, U>
} = dfdlT(<T extends object, U extends KeysOfUnion<T>>(target: T, key: U): target is HasKey<T, U> => {
    return key in target
}, 2)
