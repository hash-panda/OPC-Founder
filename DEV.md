# 技术文档

OPC Founder 网站的技术实现文档。

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Astro](https://astro.build) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **3D Graphics** | [Three.js](https://threejs.org) |
| **Language** | TypeScript |
| **Deployment** | [Vercel](https://vercel.com) |

## Features

- **3D 交互视觉** - 基于 Three.js 的沉浸式首屏动画，支持鼠标交互
- **打字机效果** - 动态展示多重身份角色
- **暗色主题** - 以 Teal 为主色调的现代暗色设计
- **响应式布局** - 完美适配桌面端与移动端
- **流畅动画** - 基于 CSS 的滚动动画与过渡效果
- **博客系统** - Astro Content Collections 驱动的内容管理

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hash-panda/OPC-Founder.git

# Navigate to project directory
cd OPC-Founder

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## Project Structure

```
OPC-Founder/
├── public/              # Static assets
│   └── favicon.svg      # Site favicon
├── src/
│   ├── components/      # Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Timeline.astro
│   │   └── Footer.astro
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts (Markdown)
│   ├── layouts/
│   │   └── Layout.astro # Base layout
│   └── pages/           # Routes
│       ├── index.astro  # Homepage
│       └── blog/
│           └── index.astro
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json
```

## Color Theme

| Name | Value | Usage |
|------|-------|-------|
| Primary Background | `#0a0a0a` | Page background |
| Secondary Background | `#111111` | Section background |
| Card Background | `#1a1a1a` | Card components |
| Border | `#2a2a2a` | Borders and dividers |
| Primary Accent | `#14b8a6` (Teal 500) | Main accent color |
| Light Accent | `#2dd4bf` (Teal 400) | Hover states, highlights |
| Dark Accent | `#0d9488` (Teal 600) | Pressed states |

## Roadmap

- [ ] 添加博客文章详情页
- [ ] 集成评论系统
- [ ] 添加 RSS 订阅
- [ ] 多语言支持 (i18n)
- [ ] 更多 3D 交互效果
- [ ] 性能优化与 SEO 增强

## License

MIT License - see [LICENSE](./LICENSE) for details.
