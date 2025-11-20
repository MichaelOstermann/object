# hasProp

`Object.hasProp(target, key)`

Checks if `target` object has the specified `key` property with a non-null and non-undefined value.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.hasProp({ a: 1, b: null }, "a"); // true
Object.hasProp({ a: 1, b: null }, "b"); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: null }, Object.hasProp("a")); // true
pipe({ a: 1, b: null }, Object.hasProp("b")); // false
```

:::
