import type { AllUnionFields } from "type-fest"
import { dfdlT } from "@monstermann/dfdl"

/**
 * # getOrElse
 *
 * ```ts
 * function Object.getOrElse<
 *     T extends object,
 *     U extends keyof AllUnionFields<T>,
 *     V,
 * >(
 *     target: T,
 *     key: U,
 *     orElse: (target: NoInfer<T>) => V,
 * ): Exclude<AllUnionFields<T>[U] | V, null | undefined>
 * ```
 *
 * Returns the value of `key` property from `target` object, or the result of calling `orElse` function with `target` if not found or nullish.
 *
 * ## Example
 *
 * ```ts [data-first]
 * import { Object } from "@monstermann/object";
 *
 * Object.getOrElse({ a: 1, b: 2 }, "a", () => 0); // 1
 * Object.getOrElse({ a: 1, b: 2 }, "c", (obj) => Object.keys(obj).length); // 2
 * ```
 *
 * ```ts [data-last]
 * import { Object } from "@monstermann/object";
 *
 * pipe(
 *     { a: 1, b: 2 },
 *     Object.getOrElse("a", () => 0),
 * ); // 1
 *
 * pipe(
 *     { a: 1, b: 2 },
 *     Object.getOrElse("c", (obj) => Object.keys(obj).length),
 * ); // 2
 * ```
 *
 */
export const getOrElse: {
    <T extends object, U extends keyof AllUnionFields<T>, V>(key: U, orElse: (target: NoInfer<T>) => V): (target: T) => Exclude<AllUnionFields<T>[U] | V, null | undefined>
    <T extends object, U extends keyof AllUnionFields<T>, V>(target: T, key: U, orElse: (target: NoInfer<T>) => V): Exclude<AllUnionFields<T>[U] | V, null | undefined>
} = dfdlT((target: any, key: any, orElse: any): any => {
    return target[key] ?? orElse(target)
}, 3)
