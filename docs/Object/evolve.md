# evolve

```ts
function Object.evolve(
    target: Record<K, V>,
    evolver: {
        [K]: (value: V) => V
    }
): Record<K, V>
```

Creates a new object with multiple properties transformed by their corresponding functions in the `evolver` object.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.evolve(
    { a: 1, b: 2, c: 3 },
    {
        a: (x) => x * 2,
        c: (x) => x + 1,
    },
); // { a: 2, b: 2, c: 4 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2, c: 3 },
    Object.evolve({
        a: (x) => x * 2,
        c: (x) => x + 1,
    }),
); // { a: 2, b: 2, c: 4 }
```

:::
