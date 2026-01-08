<div align="center">

<h1>object</h1>

![Minified](https://img.shields.io/badge/Minified-3.05_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff) ![Minzipped](https://img.shields.io/badge/Minzipped-1.09_KB-blue?style=flat-square&labelColor=%2315161D&color=%2369a1ff)

**Functional utilities for objects.**

[Documentation](https://MichaelOstermann.github.io/object)

</div>

## Features

- Opt-in mutability with [`remmi`](https://michaelostermann.github.io/remmi/)
- Reference preservation (`merge(obj, { foo: true }) === obj`)
- Pipe-friendly (`pipe(merge({ foo: true })(obj)`)
- Graceful failure handling (`get()`, `getOr()`, `getOrElse()`, `getOrThrow()`)

## Installation

```sh [npm]
npm install @monstermann/object
```

```sh [pnpm]
pnpm add @monstermann/object
```

```sh [yarn]
yarn add @monstermann/object
```

```sh [bun]
bun add @monstermann/object
```

## Tree-shaking

### Installation

```sh [npm]
npm install -D @monstermann/unplugin-object
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-object
```

```sh [yarn]
yarn -D add @monstermann/unplugin-object
```

```sh [bun]
bun -D add @monstermann/unplugin-object
```

### Usage

```ts [Vite]
// vite.config.ts
import object from "@monstermann/unplugin-object/vite";

export default defineConfig({
    plugins: [object()],
});
```

```ts [Rollup]
// rollup.config.js
import object from "@monstermann/unplugin-object/rollup";

export default {
    plugins: [object()],
};
```

```ts [Rolldown]
// rolldown.config.js
import object from "@monstermann/unplugin-object/rolldown";

export default {
    plugins: [object()],
};
```

```ts [Webpack]
// webpack.config.js
const object = require("@monstermann/unplugin-object/webpack");

module.exports = {
    plugins: [object()],
};
```

```ts [Rspack]
// rspack.config.js
const object = require("@monstermann/unplugin-object/rspack");

module.exports = {
    plugins: [object()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import object from "@monstermann/unplugin-object/esbuild";

build({
    plugins: [object()],
});
```

## Object

### assign

```ts
function Object.assign<T extends object, U extends object>(
    target: T,
    source: U,
): T extends unknown ? Merge<T, U> : never
```

Merges properties from `source` object into `target` object, creating a new object.

Looser version of `merge` - `assign` allows you to redefine keys and add new properties.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.assign({ a: 1, b: 2 }, { b: 3, c: 4 }); // { a: 1, b: 3, c: 4 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.assign({ b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }
```

### clone

```ts
function Object.clone<T extends object>(target: T): T
```

Creates a shallow copy of an object, unless marked as mutable with `markAsMutable` inside a mutation context (see [@monstermann/remmi](https://michaelostermann.github.io/remmi/#clonearray-array)).

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

const original = { a: 1, b: 2 };
const copy = Object.clone(original); // { a: 1, b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

const original = { a: 1, b: 2 };
const copy = pipe(original, Object.clone()); // { a: 1, b: 2 }
```

### entries

```ts
function Object.entries<T extends object>(target: T): Entries<T>
```

Returns an array of key-value pairs from `target` object.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.entries({ a: 1, b: 2, c: 3 }); // [["a", 1], ["b", 2], ["c", 3]]
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.entries()); // [["a", 1], ["b", 2], ["c", 3]]
```

### evolve

```ts
function Object.evolve<T extends object, U extends Evolver<T>>(
    target: T,
    evolver: U,
): T
```

Creates a new object with multiple properties transformed by their corresponding functions in the `evolver` object.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.evolve(
    { a: 1, b: 2, c: 3 },
    {
        a: (x) => x * 2,
        c: (x) => x + 1,
    },
); // { a: 2, b: 2, c: 4 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2, c: 3 },
    Object.evolve({
        a: (x) => x * 2,
        c: (x) => x + 1,
    }),
); // { a: 2, b: 2, c: 4 }
```

### forEach

```ts
function Object.forEach<T extends object>(
    target: T,
    fn: ForEachCallback<T>,
): T
```

Executes `fn` function for each key-value pair in `target` object and returns the original object.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.forEach({ a: 1, b: 2 }, ([key, value]) => console.log(key, value)); // { a: 1, b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2 },
    Object.forEach(([key, value]) => console.log(key, value)),
); // { a: 1, b: 2 }
```

### fromEntries

```ts
function Object.fromEntries(): <
    const Entries extends IterableContainer<Entry>,
>(
    entries: Entries,
) => Simplify<FromEntries<Entries>>
```

Creates an object from an array of key-value pairs (entries). Each entry should be a tuple of [key, value].

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.fromEntries([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]); // { a: 1, b: 2, c: 3 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    [
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ],
    Object.fromEntries(),
); // { a: 1, b: 2, c: 3 }
```

### get

```ts
function Object.get<
    T extends object,
    U extends keyof AllUnionFields<T>,
>(target: T, key: U): AllUnionFields<T>[U]
```

Returns the value of `key` property from `target` object, or undefined if not found.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.get({ a: 1, b: 2 }, "a"); // 1
Object.get({ a: 1, b: 2 }, "c"); // undefined
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.get("a")); // 1
pipe({ a: 1, b: 2 }, Object.get("c")); // undefined
```

### getOr

```ts
function Object.getOr<
    T extends object,
    U extends keyof AllUnionFields<T>,
    V,
>(
    target: T,
    key: U,
    or: V,
): Exclude<AllUnionFields<T>[U] | V, null | undefined>
```

Returns the value of `key` property from `target` object, or the `or` value if not found or nullish.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.getOr({ a: 1, b: 2 }, "a", 0); // 1
Object.getOr({ a: 1, b: 2 }, "c", 0); // 0
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.getOr("a", 0)); // 1
pipe({ a: 1, b: 2 }, Object.getOr("c", 0)); // 0
```

### getOrElse

```ts
function Object.getOrElse<
    T extends object,
    U extends keyof AllUnionFields<T>,
    V,
>(
    target: T,
    key: U,
    orElse: (target: NoInfer<T>) => V,
): Exclude<AllUnionFields<T>[U] | V, null | undefined>
```

Returns the value of `key` property from `target` object, or the result of calling `orElse` function with `target` if not found or nullish.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.getOrElse({ a: 1, b: 2 }, "a", () => 0); // 1
Object.getOrElse({ a: 1, b: 2 }, "c", (obj) => Object.keys(obj).length); // 2
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2 },
    Object.getOrElse("a", () => 0),
); // 1

pipe(
    { a: 1, b: 2 },
    Object.getOrElse("c", (obj) => Object.keys(obj).length),
); // 2
```

### getOrThrow

```ts
function Object.getOrThrow<
    T extends object,
    U extends keyof AllUnionFields<T>,
>(
    target: T,
    key: U,
): Exclude<AllUnionFields<T>[U], null | undefined>
```

Returns the value of `key` property from `target` object, or throws an error if not found or null/undefined.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.getOrThrow({ a: 1, b: 2 }, "a"); // 1
Object.getOrThrow({ a: 1, b: 2 }, "c"); // throws FnError
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.getOrThrow("a")); // 1
pipe({ a: 1, b: 2 }, Object.getOrThrow("c")); // throws FnError
```

### hasKey

```ts
function Object.hasKey<T extends object, U extends KeysOfUnion<T>>(
    target: T,
    key: U,
): target is HasKey<T, U>
```

Checks if `target` object has the specified `key` property.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.hasKey({ a: 1, b: 2 }, "a"); // true
Object.hasKey({ a: 1, b: 2 }, "c"); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.hasKey("a")); // true
pipe({ a: 1, b: 2 }, Object.hasKey("c")); // false
```

### hasProp

```ts
function Object.hasProp<
    T extends object,
    U extends KeysOfUnion<T>,
>(target: T, key: U): target is HasProp<T, U>
```

Checks if `target` object has the specified `key` property with a non-null and non-undefined value.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.hasProp({ a: 1, b: null }, "a"); // true
Object.hasProp({ a: 1, b: null }, "b"); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: null }, Object.hasProp("a")); // true
pipe({ a: 1, b: null }, Object.hasProp("b")); // false
```

### is

```ts
function Object.is(
    target: unknown,
): target is Record<PropertyKey, unknown>
```

Checks if `target` is a plain object.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.is({ a: 1 }); // true
Object.is([]); // false
Object.is(null); // false
Object.is("hello"); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1 }, Object.is()); // true
pipe([], Object.is()); // false
pipe(null, Object.is()); // false
pipe("hello", Object.is()); // false
```

### isEmpty

```ts
function Object.isEmpty<T extends object>(target: T): boolean
```

Checks if `target` object has no enumerable properties.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.isEmpty({}); // true
Object.isEmpty({ a: 1 }); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({}, Object.isEmpty()); // true
pipe({ a: 1 }, Object.isEmpty()); // false
```

### isShallowEqual

```ts
function Object.isShallowEqual<T extends object, U extends T>(
    target: T,
    source: U,
): target is U
```

Performs a shallow equality comparison between `target` and `source` objects.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
Object.isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.isShallowEqual({ a: 1, b: 2 })); // true
pipe({ a: 1, b: 2 }, Object.isShallowEqual({ a: 1, b: 3 })); // false
```

### keys

```ts
function Object.keys<T extends object>(target: T): KeysOfUnion<T>[]
```

Returns an array of `target` object's enumerable property names.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.keys({ a: 1, b: 2, c: 3 }); // ["a", "b", "c"]
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.keys()); // ["a", "b", "c"]
```

### map

```ts
function Object.map<T extends object, U extends keyof T>(
    target: T,
    key: U,
    transform: (value: NoInfer<T>[U]) => T[U],
): T
```

```ts [Full]
function Object.map<T extends object, U extends keyof T>(
    target: T,
    key: U,
    transform: (value: NoInfer<T>[U]) => T[U],
): T
```

Creates a new object with the `key` property transformed by the `transform` function.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.map({ a: 1, b: 2 }, "a", (x) => x * 2); // { a: 2, b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2 },
    Object.map("a", (x) => x * 2),
); // { a: 2, b: 2 }
```

### mapAssign

```ts
function Object.mapAssign<T extends object, U extends object>(
    target: T,
    map: (target: NoInfer<T>) => U,
): T extends unknown ? Merge<T, U> : never
```

Merges `target` object with the result of calling `map` function on `target`, creating a new object.

Looser version of `mapMerge` - `mapAssign` allows you to redefine keys and add new properties.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.mapAssign({ a: 1, b: 2 }, (obj) => ({ c: obj.a + obj.b })); // { a: 1, b: 2, c: 3 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2 },
    Object.mapAssign((obj) => ({ c: obj.a + obj.b })),
); // { a: 1, b: 2, c: 3 }
```

### mapMerge

```ts
function Object.mapMerge<T extends object>(
    target: T,
    map: (target: NoInfer<T>) => Partial<NoInfer<T>>,
): T
```

Merges `target` object with the result of calling `map` function on `target`, creating a new object with existing keys updated.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.mapMerge({ a: 1, b: 2 }, (obj) => ({ a: obj.a * 2 })); // { a: 2, b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2 },
    Object.mapMerge((obj) => ({ a: obj.a * 2 })),
); // { a: 2, b: 2 }
```

### matches

```ts
function Object.matches<T extends object, U extends T>(
    target: T,
    props: Partial<U>,
): target is Matches<T, U>
```

Checks if all properties in `props` object have equal values in `target` object.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }); // true
Object.matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 3 }); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.matches({ a: 1, b: 2 })); // true
pipe({ a: 1, b: 2, c: 3 }, Object.matches({ a: 1, b: 3 })); // false
```

### merge

```ts
function Object.merge<T extends object>(
    target: T,
    source: Partial<NoInfer<T>>,
): T
```

Merges properties from `source` object into `target` object.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.merge({ a: 1, b: 2 }, { a: 3, c: 4 }); // { a: 3, b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.merge({ a: 3, c: 4 })); // { a: 3, b: 2 }
```

### omit

```ts
function Object.omit<T extends object, K extends KeysOfUnion<T>>(
    target: T,
    keys: Iterable<K>,
): DistributedOmit<T, K>
```

Creates a new object excluding the properties specified in the `keys` iterable.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.omit({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.omit(["a", "c"])); // { b: 2 }
```

### pick

```ts
function Object.pick<T extends object, K extends KeysOfUnion<T>>(
    target: T,
    keys: Iterable<K>,
): DistributedPick<T, K>
```

Creates a new object containing only the properties specified in the `keys` iterable.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.pick({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { a: 1, c: 3 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.pick(["a", "c"])); // { a: 1, c: 3 }
```

### propIs

```ts
function Object.propIs<
    T extends object,
    U extends keyof AllUnionFields<T>,
    const V extends AllUnionFields<T>[U],
>(target: T, key: U, value: V): target is PropIs<T, U, V>
```

Checks if the `key` property of `target` object is equal to the specified `value` using strict equality.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.propIs({ a: 1, b: 2 }, "a", 1); // true
Object.propIs({ a: 1, b: 2 }, "a", 2); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.propIs("a", 1)); // true
pipe({ a: 1, b: 2 }, Object.propIs("a", 2)); // false
```

### set

```ts
function Object.set<T extends object, K extends keyof T>(
    target: T,
    key: K,
    value: T[K],
): T
```

Creates a new object with the `key` property set to `value`.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.set({ a: 1, b: 2 }, "a", 3); // { a: 3, b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.set("a", 3)); // { a: 3, b: 2 }
```

### test

```ts
function Object.test<
    T extends object,
    U extends keyof AllUnionFields<T>,
>(
    target: T,
    key: U,
    predicate: (value: AllUnionFields<T>[U]) => boolean,
): target is Test<T, U, AllUnionFields<T>[U]>
```

Checks if the `key` property of `target` object passes the `predicate` function test.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.test({ a: 5, b: 2 }, "a", (x) => x > 3); // true
Object.test({ a: 1, b: 2 }, "a", (x) => x > 3); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 5, b: 2 },
    Object.test("a", (x) => x > 3),
); // true

pipe(
    { a: 1, b: 2 },
    Object.test("a", (x) => x > 3),
); // false
```

### testAll

```ts
function Object.testAll<
    T extends object,
    U extends TestAllPredicates<T>,
>(target: T, props: U): target is TestAllResult<T, U>
```

Checks if all properties in `target` object pass their corresponding predicate functions in `props` object.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.testAll({ a: 5, b: 2 }, { a: (x) => x > 3, b: (x) => x > 0 }); // true
Object.testAll({ a: 1, b: 2 }, { a: (x) => x > 3, b: (x) => x > 0 }); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 5, b: 2 }, Object.testAll({ a: (x) => x > 3, b: (x) => x > 0 })); // true
pipe({ a: 1, b: 2 }, Object.testAll({ a: (x) => x > 3, b: (x) => x > 0 })); // false
```

### values

```ts
function Object.values<T extends object>(
    target: T,
): AllUnionFields<T> extends infer U ? U[keyof U][] : never
```

Returns an array of `target` object's enumerable property values.

#### Example

```ts [data-first]
import { Object } from "@monstermann/object";

Object.values({ a: 1, b: 2, c: 3 }); // [1, 2, 3]
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.values()); // [1, 2, 3]
```
