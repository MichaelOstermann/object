import type { AllUnionFields } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # values
 *
 * ```ts
 * function Object.values<T extends object>(
 *     target: T,
 * ): AllUnionFields<T> extends infer U ? U[keyof U][] : never
 * ```
 *
 * Returns an array of `target` object's enumerable property values.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.values({ a: 1, b: 2, c: 3 }); // [1, 2, 3]
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe({ a: 1, b: 2, c: 3 }, Object.values()); // [1, 2, 3]
 * ```
 *
 */
export const values: {
    (): <T extends object>(target: T) => AllUnionFields<T> extends infer U ? U[keyof U][] : never
    <T extends object>(target: T): AllUnionFields<T> extends infer U ? U[keyof U][] : never
} = dfdlT(<T extends object>(target: T): any => {
    return Object.values(target)
}, 1)
