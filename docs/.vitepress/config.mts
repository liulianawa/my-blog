import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-blog/',
  lang: 'zh-CN',
  title: "liulian的博客",
  description: "liulian的个人博客",
  head: [
  ['link', { rel: 'icon', href: '/favicon.ico' }]  // 需将 favicon.ico 放在 docs/public 下
  ],
  lastUpdated: true,
  cleanUrls: true,

  markdown: {
  lineNumbers: true,          // 代码块显示行号
  image: { lazyLoading: true } // 图片懒加载
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端基础', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: '测试文本',
        collapsed: true,    // 默认折叠
        items: [
          { text: '测试1', link: '/ex1'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/liulianawa' }
    ],

    //页面底部页脚配置
    footer: {
      // 页脚左侧信息
      message: '基于 VitePress 强力驱动',
      // 页脚右侧版权声明
      copyright: '版权所有 © 2026-至今'
    },

    //页面底部“上一页/下一页”按钮的文字
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    //底部“上次更新时间”的文案
    lastUpdated: {
      text: '最后更新于'
    },

    //搜索框
    search: {
    provider: 'local'
    }
  }
})
