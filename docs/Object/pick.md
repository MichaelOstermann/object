# pick

```ts
function Object.pick<T extends object, K extends KeysOfUnion<T>>(
    target: T,
    keys: Iterable<K>,
): DistributedPick<T, K>
```

Creates a new object containing only the properties specified in the `keys` iterable.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.pick({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { a: 1, c: 3 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.pick(["a", "c"])); // { a: 1, c: 3 }
```

:::
