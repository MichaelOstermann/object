# mapAssign

```ts
function Object.mapAssign<T extends object, U extends object>(
    target: T,
    map: (target: NoInfer<T>) => U,
): T extends unknown ? Merge<T, U> : never
```

Merges `target` object with the result of calling `map` function on `target`, creating a new object.

Looser version of `mapMerge` - `mapAssign` allows you to redefine keys and add new properties.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.mapAssign({ a: 1, b: 2 }, (obj) => ({ c: obj.a + obj.b })); // { a: 1, b: 2, c: 3 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2 },
    Object.mapAssign((obj) => ({ c: obj.a + obj.b })),
); // { a: 1, b: 2, c: 3 }
```

:::
