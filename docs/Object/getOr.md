# getOr

```ts
function Object.getOr(target: Record<K, V>, key: K, or: U): V | U
```

Returns the value of `key` property from `target` object, or the `or` value if not found or falsy.

## Example

::: code-group

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

:::
