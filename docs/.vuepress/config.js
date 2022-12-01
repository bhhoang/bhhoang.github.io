import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "https://thicc.mywaifulist.moe/waifus/35872/c230a04e1cf7d1e9633716a0561e04476c8f31feaa326afb376a0fa653669c7b_thumb.jpg",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "/katex/katex.min.css",
            },
        ],
        [
            "script",
            {
                defer: true,
                src: "/katex/katex.min.js",
            },
        ],
        [
            "script",
            {
                defer: true,
                src: "/katex/contrib/auto-render.min.js",
            },
        ],
    ],
    
    title: "Notes' Hideout",
    description: "This is where I keep my notes.",
    plugins: [
        docsearchPlugin({
            locales: {
                "/": {
                    placeholder: "Search",
                    translations: {
                        button: {
                            buttonText: "Search",
                        },
                    },
                },
            },
        }),
        mdEnhancePlugin({
            katex: {
                enable: true,
            },
            sub: {
                enable: true,
            },
            sup: {
                enable: true,
            },
        }),
        backToTopPlugin(),
    ],
    theme: defaultTheme({
        logo: "https://usth.edu.vn/wp-content/uploads/2021/11/logo.png",
        navbar: [
            { text: "Home", link: "/" },
            { text: "Lectures", link: "/Lectures/" },
            { text: "Documents", link: "/textbooks.md" },
            { text: "GitHub", link: "https://www.github.com/bhhoang" },
        ],
        sidebar: "auto",
    })
});
