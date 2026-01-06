import type { Simplify } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

type Matches<T extends object, U extends T> = T extends unknown
    ? U extends T
        ? Simplify<T & U>
        : never
    : never

/**
 * # matches
 *
 * ```ts
 * function Object.matches(target: object, props: object): boolean
 * ```
 *
 * Checks if all properties in `props` object have equal values in `target` object.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }); // true
 * Object.matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 3 }); // false
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Object.matches({ a: 1, b: 2 })); // true
 * pipe({ a: 1, b: 2, c: 3 }, Object.matches({ a: 1, b: 3 })); // false
 * ```
 *
 */
export const matches: {
    <T extends object, U extends T>(props: Partial<U>): (target: T) => target is Matches<T, U>
    <T extends object, U extends T>(target: T, props: Partial<U>): target is Matches<T, U>
} = dfdlT((target: any, props: any): target is any => {
    for (const key in props) {
        if (target[key] !== props[key]) return false
    }
    return true
}, 2)
