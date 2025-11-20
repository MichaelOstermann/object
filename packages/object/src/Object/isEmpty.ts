import { dfdlT } from "@monstermann/dfdl"

/**
 * `Object.isEmpty(target)`
 *
 * Checks if `target` object has no enumerable properties.
 *
 * ## Example
 *
 * ```ts
 * import { Object } from "@monstermann/object";
 *
 * Object.isEmpty({}); // true
 * Object.isEmpty({ a: 1 }); // false
 * ```
 *
 * ```ts
 * import { Object } from "@monstermann/object";
 *
 * pipe({}, Object.isEmpty()); // true
 * pipe({ a: 1 }, Object.isEmpty()); // false
 * ```
 */
export const isEmpty: {
    (): <T extends object>(target: T) => boolean
    <T extends object>(target: T): boolean
} = dfdlT(<T extends object>(target: T): boolean => {
    // eslint-disable-next-line no-unreachable-loop
    for (const _ in target) return false
    return true
}, 1)
