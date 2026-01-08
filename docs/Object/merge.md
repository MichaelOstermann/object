# merge

```ts
function Object.merge<T extends object>(
    target: T,
    source: Partial<NoInfer<T>>,
): T
```

Merges properties from `source` object into `target` object.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.merge({ a: 1, b: 2 }, { a: 3, c: 4 }); // { a: 3, b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.merge({ a: 3, c: 4 })); // { a: 3, b: 2 }
```

:::
