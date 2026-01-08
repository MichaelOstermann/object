# propIs

```ts
function Object.propIs<
    T extends object,
    U extends keyof AllUnionFields<T>,
    const V extends AllUnionFields<T>[U],
>(target: T, key: U, value: V): target is PropIs<T, U, V>
```

Checks if the `key` property of `target` object is equal to the specified `value` using strict equality.

## Example

::: code-group

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

:::
