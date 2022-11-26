import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "https://thicc.mywaifulist.moe/waifus/35872/c230a04e1cf7d1e9633716a0561e04476c8f31feaa326afb376a0fa653669c7b_thumb.jpg",
            },
        ],
    ],
    title: " Notes' Hideout",
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
    ],
    theme: defaultTheme({
        logo: "https://usth.edu.vn/wp-content/uploads/2021/11/logo.png",
        navbar: [
            { text: "Home", link: "/" },
            { text: "Lectures", link: "/Lectures/" },
            { text: "GitHub", link: "https://www.github.com/bhhoang" },
        ],
        sidebar: "auto",
    }),
});
