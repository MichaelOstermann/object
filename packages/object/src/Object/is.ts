import { dfdlT } from "@monstermann/dfdl"

/**
 * `Object.is(target)`
 *
 * Checks if `target` is a plain object.
 *
 * ## Example
 *
 * ```ts
 * import { Object } from "@monstermann/object";
 *
 * Object.is({ a: 1 }); // true
 * Object.is([]); // false
 * Object.is(null); // false
 * Object.is("hello"); // false
 * ```
 *
 * ```ts
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1 }, Object.is()); // true
 * pipe([], Object.is()); // false
 * pipe(null, Object.is()); // false
 * pipe("hello", Object.is()); // false
 * ```
 */
export const is: {
    (): (target: unknown) => target is Record<PropertyKey, unknown>
    (target: unknown): target is Record<PropertyKey, unknown>
} = dfdlT((target: unknown): target is Record<PropertyKey, unknown> => {
    if (typeof target !== "object" || target === null) return false
    const proto = Object.getPrototypeOf(target)
    return proto === null || proto === Object.prototype
}, 1)
