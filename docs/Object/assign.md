# assign

`Object.assign(target, source)`

Merges properties from `source` object into `target` object, creating a new object.

Looser version of `merge` - `assign` allows you to redefine keys and add new properties.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.assign({ a: 1, b: 2 }, { b: 3, c: 4 }); // { a: 1, b: 3, c: 4 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.assign({ b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }
```

:::
