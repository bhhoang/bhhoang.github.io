export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Notes' Hideout\",\"description\":\"This is where I keep my notes.\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://thicc.mywaifulist.moe/waifus/35872/c230a04e1cf7d1e9633716a0561e04476c8f31feaa326afb376a0fa653669c7b_thumb.jpg\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"/katex/katex.min.css\"}],[\"script\",{\"defer\":true,\"src\":\"/katex/katex.min.js\"}],[\"script\",{\"defer\":true,\"src\":\"/katex/contrib/auto-render.min.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
