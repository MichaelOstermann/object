# getOrThrow

```ts
function Object.getOrThrow(target: Record<K, V>, key: K): V
```

Returns the value of `key` property from `target` object, or throws an error if not found or null/undefined.

## Example

::: code-group

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

:::
