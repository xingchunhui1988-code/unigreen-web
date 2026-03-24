# UniGreen Website - Deployment Guide

## 项目概述
UniGreen 海洋水培官网 - 面向海外客户的响应式网站

## 技术栈
- **Framework**: Next.js 16 (App Router)
- **React**: 19
- **TypeScript**: 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui

---

## 部署到 Vercel（推荐）

### 方法一：通过 GitHub 自动部署

1. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: UniGreen website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/unigreen-website.git
   git push -u origin main
   ```

2. **连接 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 登录
   - 点击 "New Project"
   - 选择 `unigreen-website` 仓库
   - 点击 "Deploy"

3. **绑定自定义域名**
   - 进入项目 Settings > Domains
   - 添加 `unigreen.sg` 或您的域名
   - 按提示配置 DNS 解析

### 方法二：通过 Vercel CLI 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

---

## DNS 配置示例

### 如果域名在 Cloudflare：
| 类型 | 名称 | 内容 |
|------|------|------|
| CNAME | @ | cname.vercel-dns.com |
| CNAME | www | cname.vercel-dns.com |

### 如果域名在 GoDaddy/Namecheap：
| 类型 | 名称 | 值 |
|------|------|------|
| CNAME | @ | cname.vercel-dns.com |
| CNAME | www | cname.vercel-dns.com |

---

## 环境变量配置

在 Vercel 项目设置中添加：

```
# 无需额外环境变量，项目已配置完成
```

---

## SEO 优化清单

✅ 已完成的优化：
- [x] Meta tags (title, description, keywords)
- [x] Open Graph tags (Facebook/LinkedIn 分享)
- [x] Twitter Card tags
- [x] robots.txt
- [x] sitemap.xml
- [x] hreflang 多语言标签
- [x] manifest.json (PWA 支持)
- [x] 语义化 HTML 结构

---

## 部署后检查清单

1. **功能测试**
   - [ ] 中英文切换正常
   - [ ] 所有锚点链接正常跳转
   - [ ] 图片加载正常
   - [ ] 响应式布局（手机/平板/电脑）

2. **SEO 检查**
   - [ ] Google Search Console 提交网站
   - [ ] 提交 sitemap: `https://unigreen.sg/sitemap.xml`
   - [ ] 检查 robots.txt: `https://unigreen.sg/robots.txt`

3. **性能检查**
   - [ ] Google PageSpeed Insights 测试
   - [ ] GTmetrix 性能测试

4. **分享预览**
   - [ ] Facebook 分享调试器测试
   - [ ] Twitter Card 验证器测试
   - [ ] LinkedIn Post Inspector 测试

---

## 常用命令

```bash
# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 类型检查
npx tsc --noEmit
```

---

## 联系方式

- **Email**: info@unigreen.sg
- **Website**: https://unigreen.sg

---

## 更新日志

### 2024-03-22
- 完成网站主体开发
- 添加 SEO 优化
- 添加多语言支持
- 准备生产部署
