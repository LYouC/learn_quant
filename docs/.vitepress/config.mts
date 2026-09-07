import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'A股量化选股课程',
  description: '面向程序员的 A 股金融、因子、量化与投资策略课程',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'A股量化选股课程',
    nav: [
      { text: '课程首页', link: '/' },
      { text: '开始学习', link: '/chapters/01-what-investors-earn' }
    ],
    sidebar: [
      {
        text: '第一部分：投资与市场',
        items: [
          {
            text: '第1章 股票投资到底在赚什么钱',
            link: '/chapters/01-what-investors-earn'
          }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一章',
      next: '下一章'
    },
    lastUpdated: {
      text: '最后更新'
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
