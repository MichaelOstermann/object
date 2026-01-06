# isEmpty

```ts
function Object.isEmpty(target: object): boolean
```

Checks if `target` object has no enumerable properties.

## Example

::: code-group

```ts [data-first]
import { Object } from "@monstermann/object";

Object.isEmpty({}); // true
Object.isEmpty({ a: 1 }); // false
```

```ts [data-last]
import { Object } from "@monstermann/object";

pipe({}, Object.isEmpty()); // true
pipe({ a: 1 }, Object.isEmpty()); // false
```

:::
