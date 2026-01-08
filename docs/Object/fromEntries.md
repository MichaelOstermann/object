# fromEntries

```ts
function Object.fromEntries(): <
    const Entries extends IterableContainer<Entry>,
>(
    entries: Entries,
) => Simplify<FromEntries<Entries>>
```

Creates an object from an array of key-value pairs (entries). Each entry should be a tuple of [key, value].

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.fromEntries([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]); // { a: 1, b: 2, c: 3 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    [
        ["a", 1],
        ["b", 2],
        ["c", 3],
    ],
    Object.fromEntries(),
); // { a: 1, b: 2, c: 3 }
```

:::
