# entries

`Object.entries(target)`

Returns an array of key-value pairs from `target` object.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.entries({ a: 1, b: 2, c: 3 }); // [["a", 1], ["b", 2], ["c", 3]]
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.entries()); // [["a", 1], ["b", 2], ["c", 3]]
```

:::
