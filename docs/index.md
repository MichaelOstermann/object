---
aside: true
---

# object

<Badge type="info" class="size">
    <span>Minified</span>
    <span>3.05 KB</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>1.09 KB</span>
</Badge>

**Functional utilities for objects.**

## Features

- Opt-in mutability with [`remmi`](https://michaelostermann.github.io/remmi/)
- Reference preservation (`merge(obj, { foo: true }) === obj`)
- Pipe-friendly (`pipe(merge({ foo: true })(obj)`)
- Graceful failure handling (`get()`, `getOr()`, `getOrElse()`, `getOrThrow()`)

## Installation

::: code-group

```sh [npm]
npm install @monstermann/object
```

```sh [pnpm]
pnpm add @monstermann/object
```

```sh [yarn]
yarn add @monstermann/object
```

```sh [bun]
bun add @monstermann/object
```

:::

## Tree-shaking

### Installation

::: code-group

```sh [npm]
npm install -D @monstermann/unplugin-object
```

```sh [pnpm]
pnpm -D add @monstermann/unplugin-object
```

```sh [yarn]
yarn -D add @monstermann/unplugin-object
```

```sh [bun]
bun -D add @monstermann/unplugin-object
```

:::

### Usage

::: code-group

```ts [Vite]
// vite.config.ts
import object from "@monstermann/unplugin-object/vite";

export default defineConfig({
    plugins: [object()],
});
```

```ts [Rollup]
// rollup.config.js
import object from "@monstermann/unplugin-object/rollup";

export default {
    plugins: [object()],
};
```

```ts [Rolldown]
// rolldown.config.js
import object from "@monstermann/unplugin-object/rolldown";

export default {
    plugins: [object()],
};
```

```ts [Webpack]
// webpack.config.js
const object = require("@monstermann/unplugin-object/webpack");

module.exports = {
    plugins: [object()],
};
```

```ts [Rspack]
// rspack.config.js
const object = require("@monstermann/unplugin-object/rspack");

module.exports = {
    plugins: [object()],
};
```

```ts [ESBuild]
// esbuild.config.js
import { build } from "esbuild";
import object from "@monstermann/unplugin-object/esbuild";

build({
    plugins: [object()],
});
```

:::
