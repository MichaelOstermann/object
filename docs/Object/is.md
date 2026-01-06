# is

```ts
function Object.is(target: unknown): boolean
```

Checks if `target` is a plain object.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.is({ a: 1 }); // true
Object.is([]); // false
Object.is(null); // false
Object.is("hello"); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1 }, Object.is()); // true
pipe([], Object.is()); // false
pipe(null, Object.is()); // false
pipe("hello", Object.is()); // false
```

:::
