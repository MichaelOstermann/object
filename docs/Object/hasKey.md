# hasKey

```ts
function Object.hasKey<T extends object, U extends KeysOfUnion<T>>(
    target: T,
    key: U,
): target is HasKey<T, U>
```

Checks if `target` object has the specified `key` property.

## Example

::: code-group

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

:::
