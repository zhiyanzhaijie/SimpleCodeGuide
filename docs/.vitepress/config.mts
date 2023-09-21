import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "极简编程入门",
  description: "编程入门教程文档",
  base: "/SimpleCodeGuide/",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // ['meta', { name: 'theme-color', content: '#5f67ee' }],
    // ['meta', { name: 'og:type', content: 'website' }],
    // ['meta', { name: 'og:locale', content: 'en' }],
    // ['meta', { name: 'og:site_name', content: 'VitePress' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'AZBRSFGG',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Powered by VitePress'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '基础',
        items: [
          { text: 'MarkDown', link: '/basic/markdown' }
        ]
      },
      { text: '示例', link: '/default/markdown-examples' }
    ],
    sidebar: {
      "/default/": [
        {
          text: '示例',
          items: [
            { text: 'Markdown Examples', link: '/default/markdown-examples' },
            { text: 'Runtime API Examples', link: '/default/api-examples' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhiyanzhaijie/SimpleCodeGuide' }
    ],
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    }
  },
  // locales: {
  //   "/": {
  //     lang: "zh-CN",
  //     title: "中文啦",
  //     description: "asdfasdfsadf"
  //   }
  // }
})
