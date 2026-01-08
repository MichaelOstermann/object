# forEach

```ts
function Object.forEach<T extends object>(
    target: T,
    fn: ForEachCallback<T>,
): T
```

Executes `fn` function for each key-value pair in `target` object and returns the original object.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.forEach({ a: 1, b: 2 }, ([key, value]) => console.log(key, value)); // { a: 1, b: 2 }
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 1, b: 2 },
    Object.forEach(([key, value]) => console.log(key, value)),
); // { a: 1, b: 2 }
```

:::
