import { defineConfig } from 'vitepress'

export default defineConfig({
  // 关键！仓库名 blog，base = /blog/
  base: '/blog/',
  title: "我的博客",
  description: "VitePress 博客",
  appearance: true, // true=跟随系统、可切换；'dark' 默认暗黑；false 关闭暗黑切换
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/hello' },
      { text: '关于博客', link: '/posts/aboutblog' }
    ],
    sidebar: [
      {
        text: '文章列表',
        collapsed: true, // 是否可折叠
        items: [
          { text: '第一篇文章', link: '/posts/hello' },
          { text: '第二篇文章', link: '/posts/firstpost' }
        ]
      },
      {
        text: '文章清单',
        collapsed: true, // 是否可折叠
        items: [
          { text: '第三篇文章', link: '/posts/ubuntu' }
        ]
      }
    ],
    // 右侧文章大纲（目录）
    outline: {
      level: [2, 4], // 显示 h2~h4
      label: '本文目录'
    },
    // 本地搜索（内置，不用额外付费）
    search: {
      provider: 'local'
    },
    // 文章底部：上次更新时间
    lastUpdated: {
      text: '最后更新：',
      formatOptions: { dateStyle: 'short' }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MelonPeasant/blog' }
    ]
  }
})
