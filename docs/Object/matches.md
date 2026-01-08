# matches

```ts
function Object.matches<T extends object, U extends T>(
    target: T,
    props: Partial<U>,
): target is Matches<T, U>
```

Checks if all properties in `props` object have equal values in `target` object.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }); // true
Object.matches({ a: 1, b: 2, c: 3 }, { a: 1, b: 3 }); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 1, b: 2, c: 3 }, Object.matches({ a: 1, b: 2 })); // true
pipe({ a: 1, b: 2, c: 3 }, Object.matches({ a: 1, b: 3 })); // false
```

:::
