import { defineConfig } from 'vitepress'

export default defineConfig({
  // 关键！仓库名 blog，base = /blog/
  base: '/blog/',
  title: "我的博客",
  description: "VitePress 博客",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/hello' }
    ],
    sidebar: [
      {
        text: '文章列表',
        items: [
          { text: '第一篇文章', link: '/posts/hello' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MelonPeasant/blog' }
    ]
  }
})
