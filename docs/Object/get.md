# get

`Object.get(target, key)`

Returns the value of `key` property from `target` object, or undefined if not found.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.get({ a: 1, b: 2 }, "a"); // 1
Object.get({ a: 1, b: 2 }, "c"); // undefined
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2 }, Object.get("a")); // 1
pipe({ a: 1, b: 2 }, Object.get("c")); // undefined
```

:::
