# testAll

```ts
function Object.testAll<
    T extends object,
    U extends TestAllPredicates<T>,
>(target: T, props: U): target is TestAllResult<T, U>
```

Checks if all properties in `target` object pass their corresponding predicate functions in `props` object.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.testAll({ a: 5, b: 2 }, { a: (x) => x > 3, b: (x) => x > 0 }); // true
Object.testAll({ a: 1, b: 2 }, { a: (x) => x > 3, b: (x) => x > 0 }); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({ a: 5, b: 2 }, Object.testAll({ a: (x) => x > 3, b: (x) => x > 0 })); // true
pipe({ a: 1, b: 2 }, Object.testAll({ a: (x) => x > 3, b: (x) => x > 0 })); // false
```

:::
