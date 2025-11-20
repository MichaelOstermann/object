import { defineConfig } from "@monstermann/barrels"
import { flat } from "@monstermann/barrels-flat"
import { namespace } from "@monstermann/barrels-namespace"

export default defineConfig([
    namespace({
        entries: "./packages/object/src/Object",
    }),
    flat({
        entries: "./packages/object/src",
        include: ["*", "Object/index.js"],
    }),
])
