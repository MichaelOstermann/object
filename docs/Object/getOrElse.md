# getOrElse

`Object.getOrElse(target, key, orElse)`

Returns the value of `key` property from `target` object, or the result of calling `orElse` function with `target` if not found or falsy.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.getOrElse({ a: 1, b: 2 }, "a", () => 0); // 1
Object.getOrElse({ a: 1, b: 2 }, "c", (obj) => Object.keys(obj).length); // 2
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2 },
    Object.getOrElse("a", () => 0),
); // 1

pipe(
    { a: 1, b: 2 },
    Object.getOrElse("c", (obj) => Object.keys(obj).length),
); // 2
```

:::
