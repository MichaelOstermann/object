# values

`Object.values(target)`

Returns an array of `target` object's enumerable property values.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.values({ a: 1, b: 2, c: 3 }); // [1, 2, 3]
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.values()); // [1, 2, 3]
```

:::
