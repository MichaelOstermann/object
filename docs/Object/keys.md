# keys

`Object.keys(target)`

Returns an array of `target` object's enumerable property names.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.keys({ a: 1, b: 2, c: 3 }); // ["a", "b", "c"]
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.keys()); // ["a", "b", "c"]
```

:::
