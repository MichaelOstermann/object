# isShallowEqual

```ts
function Object.isShallowEqual(target: object, source: object): boolean
```

Performs a shallow equality comparison between `target` and `source` objects.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
Object.isShallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.isShallowEqual({ a: 1, b: 2 })); // true
pipe({ a: 1, b: 2 }, Object.isShallowEqual({ a: 1, b: 3 })); // false
```

:::
