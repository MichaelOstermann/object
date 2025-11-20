import { defineConfig } from "vitepress"
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons"

export default defineConfig({
    base: "/object/",
    description: "Functional utilities for objects.",
    title: "object",
    markdown: {
        theme: {
            dark: "catppuccin-macchiato",
            light: "github-light-default",
        },
        config(md) {
            md.use(groupIconMdPlugin)
        },
    },
    themeConfig: {
        aside: false,
        outline: "deep",
        docFooter: {
            next: false,
            prev: false,
        },
        search: {
            provider: "local",
        },
        sidebar: [
            {
                base: "/Object/",
                text: "Object",
                items: [
                    { link: "assign", text: "assign" },
                    { link: "clone", text: "clone" },
                    { link: "entries", text: "entries" },
                    { link: "evolve", text: "evolve" },
                    { link: "forEach", text: "forEach" },
                    { link: "fromEntries", text: "fromEntries" },
                    { link: "get", text: "get" },
                    { link: "getOr", text: "getOr" },
                    { link: "getOrElse", text: "getOrElse" },
                    { link: "getOrThrow", text: "getOrThrow" },
                    { link: "hasKey", text: "hasKey" },
                    { link: "hasProp", text: "hasProp" },
                    { link: "is", text: "is" },
                    { link: "isEmpty", text: "isEmpty" },
                    { link: "isShallowEqual", text: "isShallowEqual" },
                    { link: "keys", text: "keys" },
                    { link: "map", text: "map" },
                    { link: "mapAssign", text: "mapAssign" },
                    { link: "mapMerge", text: "mapMerge" },
                    { link: "matches", text: "matches" },
                    { link: "merge", text: "merge" },
                    { link: "omit", text: "omit" },
                    { link: "pick", text: "pick" },
                    { link: "propIs", text: "propIs" },
                    { link: "set", text: "set" },
                    { link: "test", text: "test" },
                    { link: "testAll", text: "testAll" },
                    { link: "values", text: "values" },
                ],
            },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/MichaelOstermann/object" },
        ],
    },
    vite: {
        plugins: [
            groupIconVitePlugin(),
        ],
    },
})
