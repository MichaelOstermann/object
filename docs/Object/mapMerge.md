# mapMerge

```ts
function Object.mapMerge<T extends object>(
    target: T,
    map: (target: NoInfer<T>) => Partial<NoInfer<T>>,
): T
```

Merges `target` object with the result of calling `map` function on `target`, creating a new object with existing keys updated.

## Example

::: code-group

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

:::
