# omit

```ts
function Object.omit(target: Record<K, V>, keys: K[]): Record<K, V>
```

Creates a new object excluding the properties specified in the `keys` iterable.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.omit({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.omit(["a", "c"])); // { b: 2 }
```

:::
