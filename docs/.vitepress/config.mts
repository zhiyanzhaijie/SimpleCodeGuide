import { defineConfig } from 'vitepress'
import basicNav from './nav/basic'
import projectNav from './nav/project'
import rootNav from './nav/root'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "极简编程入门",
  description: "编程入门教程文档",
  base: "/SimpleCodeGuide/",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/SimpleCodeGuide/logo.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhiyanzhaijie/SimpleCodeGuide' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Powered by VitePress'
    },
    docFooter: {
      prev: "上一节",
      next: "下一节"
    },
    nav: [
      basicNav,
      projectNav,
      rootNav
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
    // vite: {
    //   resolve: {
    //     alias: {
    //       "~/": "/docs/"
    //     }
    //   }
    // },
    // locales: {
    //   "/": {
    //     lang: "zh-CN",
    //     title: "中文啦",
    //     description: "asdfasdfsadf"
    //   }
    // }

  },

})
