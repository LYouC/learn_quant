import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.DOCS_BASE || '/',
  lang: 'zh-CN',
  title: 'A股量化选股课程',
  description: '面向程序员的 A 股金融、因子、量化与投资策略课程',
  cleanUrls: true,
  markdown: {
    math: true
  },
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
          },
          {
            text: '第2章 A股市场的基本结构',
            link: '/chapters/02-a-share-market-structure'
          },
          {
            text: '第3章 A股交易制度与真实约束',
            link: '/chapters/03-trading-rules-and-constraints'
          },
          {
            text: '第4章 收益与风险的基本计算',
            link: '/chapters/04-return-and-risk'
          }
        ]
      },
      {
        text: '第二部分：公司与财务',
        items: [
          {
            text: '第5章 商业模式与公司竞争力',
            link: '/chapters/05-business-model-and-competitive-advantage'
          },
          {
            text: '第6章 利润表',
            link: '/chapters/06-income-statement'
          },
          {
            text: '第7章 资产负债表',
            link: '/chapters/07-balance-sheet'
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
