# set

```ts
function Object.set(target: Record<K, V>, key: K, value: V): Record<K, V>
```

Creates a new object with the `key` property set to `value`.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.set({ a: 1, b: 2 }, "a", 3); // { a: 3, b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.set("a", 3)); // { a: 3, b: 2 }
```

:::
