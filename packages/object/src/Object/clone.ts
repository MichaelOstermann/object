import { dfdlT } from "@monstermann/dfdl"
import { cloneObject } from "@monstermann/remmi"

/**
 * # clone
 *
 * ```ts
 * function Object.clone(target: object): object
 * ```
 *
 * Creates a shallow copy of an object, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * const original = { a: 1, b: 2 };
 * const copy = Object.clone(original); // { a: 1, b: 2 }
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * const original = { a: 1, b: 2 };
 * const copy = pipe(original, Object.clone()); // { a: 1, b: 2 }
 * ```
 *
 */
export const clone: {
    (): <T extends object>(target: T) => T
    <T extends object>(target: T): T
} = dfdlT(cloneObject, 1)
