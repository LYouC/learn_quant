# A股量化选股课程

这是一套面向程序员的 A 股金融、因子、量化与投资策略课程，使用 VitePress 构建并通过浏览器阅读。课程重点是投资与研究逻辑，而不是编程教学。

在线阅读：[A股量化选股课程](https://lyouc.github.io/learn_quant/)

## 本地启动

需要先安装 [Node.js](https://nodejs.org/) 18 或更高版本。进入项目目录后运行：

```bash
npm install
npm run docs:dev
```

终端会显示本地访问地址，默认通常为 <http://localhost:5173>。按 `Ctrl+C` 可停止开发服务器。

## 构建与预览

生成生产版本：

```bash
npm run docs:build
```

构建产物位于 `docs/.vitepress/dist`。要在本地预览构建结果，运行：

```bash
npm run docs:preview
```

## 项目结构

```text
.
├─ docs/
│  ├─ .vitepress/config.mts  # 站点与导航配置
│  ├─ chapters/              # 课程章节
│  └─ index.md               # 课程首页
├─ plan.md                   # 完整课程计划与章节顺序
├─ progress.md               # 课程进度的唯一记录
├─ AGENTS.md                 # 写作与协作规范
└─ package.json              # 启动、构建脚本与依赖
```

课程按 `plan.md` 的顺序逐章推进，当前完成情况以 `progress.md` 为准。
