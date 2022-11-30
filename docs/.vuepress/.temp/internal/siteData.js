export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\" Notes' Hideout\",\"description\":\"This is where I keep my notes.\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://thicc.mywaifulist.moe/waifus/35872/c230a04e1cf7d1e9633716a0561e04476c8f31feaa326afb376a0fa653669c7b_thumb.jpg\"}],[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.css\",\"integrity\":\"sha384-Juol1FqnotbkyZUT5Z7gUPjQ9gzlwCENvUZTpQBAPxtusdwFLRy382PSDx5UUJ4/\",\"crossorigin\":\"anonymous\"}],[\"script\",{\"defer\":true,\"src\":\"https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/katex.min.js\",\"integrity\":\"sha384-97gW6UIJxnlKemYavrqDHSX3SiygeOwIZhwyOKRfSaf0JWKRVj9hLASHgFTzT+0O\",\"crossorigin\":\"anonymous\"}],[\"script\",{\"defer\":true,\"src\":\"https://cdn.jsdelivr.net/npm/katex@0.16.3/dist/contrib/auto-render.min.js\",\"integrity\":\"sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05\",\"crossorigin\":\"anonymous\",\"onload\":\"renderMathInElement(document.body);\"}]],\"locales\":{}}")

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
