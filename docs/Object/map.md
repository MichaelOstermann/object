# map

`Object.map(target, key, transform)`

Creates a new object with the `key` property transformed by the `transform` function.

## Example

::: code-group

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

:::
