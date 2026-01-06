# test

```ts
function Object.test(
    target: Record<K, V>,
    key: K,
    predicate: (value: V) => boolean
): boolean
```

Checks if the `key` property of `target` object passes the `predicate` function test.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.test({ a: 5, b: 2 }, "a", (x) => x > 3); // true
Object.test({ a: 1, b: 2 }, "a", (x) => x > 3); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe(
    { a: 5, b: 2 },
    Object.test("a", (x) => x > 3),
); // true

pipe(
    { a: 1, b: 2 },
    Object.test("a", (x) => x > 3),
); // false
```

:::
