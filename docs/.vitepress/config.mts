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
          },
          {
            text: '第8章 现金流量表',
            link: '/chapters/08-cash-flow-statement'
          },
          {
            text: '第9章 三张报表之间的联系',
            link: '/chapters/09-three-financial-statements'
          },
          {
            text: '第10章 公司盈利能力与经营效率',
            link: '/chapters/10-profitability-and-operating-efficiency'
          }
        ]
      },
      {
        text: '第三部分：估值与股价驱动',
        items: [
          {
            text: '第11章 估值的核心思想',
            link: '/chapters/11-core-ideas-of-valuation'
          },
          {
            text: '第12章 常用估值指标',
            link: '/chapters/12-common-valuation-metrics'
          },
          {
            text: '第13章 成长与预期',
            link: '/chapters/13-growth-and-expectations'
          },
          {
            text: '第14章 宏观环境如何影响A股',
            link: '/chapters/14-macro-environment-and-a-shares'
          }
        ]
      },
      {
        text: '第四部分：行业与市场风格',
        items: [
          {
            text: '第15章 行业分析框架',
            link: '/chapters/15-industry-analysis-framework'
          },
          {
            text: '第16章 A股主要行业的财务特征',
            link: '/chapters/16-financial-characteristics-of-major-a-share-industries'
          },
          {
            text: '第17章 市场风格与风格轮动',
            link: '/chapters/17-market-style-and-rotation'
          },
          {
            text: '第18章 指数、ETF与投资基准',
            link: '/chapters/18-index-etf-and-benchmark'
          }
        ]
      },
      {
        text: '第五部分：从投资逻辑进入因子体系',
        items: [
          {
            text: '第19章 什么是因子',
            link: '/chapters/19-what-is-a-factor'
          },
          {
            text: '第20章 规模因子',
            link: '/chapters/20-size-factor'
          },
          {
            text: '第21章 价值因子',
            link: '/chapters/21-value-factor'
          },
          {
            text: '第22章 质量因子',
            link: '/chapters/22-quality-factor'
          },
          {
            text: '第23章 成长因子',
            link: '/chapters/23-growth-factor'
          },
          {
            text: '第24章 动量与反转因子',
            link: '/chapters/24-momentum-and-reversal-factor'
          },
          {
            text: '第25章 波动率、流动性与交易行为因子',
            link: '/chapters/25-volatility-liquidity-and-trading-behavior-factor'
          },
          {
            text: '第26章 事件与另类因子',
            link: '/chapters/26-event-and-alternative-factors'
          }
        ]
      },
      {
        text: '第六部分：因子研究方法',
        items: [
          {
            text: '第27章 数据口径与信息时间',
            link: '/chapters/27-data-conventions-and-information-time'
          },
          {
            text: '第28章 因子预处理',
            link: '/chapters/28-factor-preprocessing'
          },
          {
            text: '第29章 单因子检验',
            link: '/chapters/29-single-factor-testing'
          },
          {
            text: '第30章 识别无效和伪因子',
            link: '/chapters/30-invalid-and-spurious-factors'
          }
        ]
      },
      {
        text: '第七部分：多因子选股模型',
        items: [
          {
            text: '第31章 因子组合',
            link: '/chapters/31-factor-combination'
          },
          {
            text: '第32章 股票池与可投资性过滤',
            link: '/chapters/32-stock-universe-and-investability-filter'
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
