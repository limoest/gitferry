<p align="center">
  <img src="./icon.svg" width="84" height="84" alt="GitHub Mirror Helper Icon" />
</p>

# 🚀 GitHub 国内镜像跳转与加速助手

一款轻量、干净、通用的浏览器油猴脚本，帮助国内网络环境更顺畅地访问 GitHub、加速下载 Release / Raw / 源码压缩包，并一键生成加速 `git clone` 命令。

全面兼容 **Tampermonkey（篡改猴）**、**Violentmonkey（暴力猴）**、**ScriptCat**、**Stay** 等主流用户脚本管理器。

## ✨ 核心功能

- **🔗 全站链接智能跳转**：在百度、必应、知乎、掘金、CSDN、博客等任意网站点击 GitHub 链接自动跳转镜像（自动解包知乎 / 掘金 / CSDN 等外链中转页）；按住 **`Alt / Option`** 点击可临时直连原站。
- **🚀 访问原站自动跳转（含安全保护）**：打开 `github.com` 时在 `document-start` 自动跳转镜像；`/login`、`/signup`、`/settings`、`/oauth` 等账号认证路由**永不跳转**，点击「回原站」后当前标签页记住直连状态不死循环。
- **⬇️ Release / Raw / Archive / Clone 加速**：
  - 内置 **25 个文件/Clone 加速节点** 与 **6 个原生界面网页镜像站**，支持在面板内随时添加或删除自定义节点。
  - 在 GitHub 与镜像站的 Release 附件、Archive ZIP、Raw 链接旁自动注入 `⚡ 加速下载` 按钮。
  - 仓库页一键复制加速版 `git clone` / `git clone --depth=1` 浅克隆命令与源码 ZIP 下载。
- **⚡ 一键实时测速 & 自定义镜像**：
  - 悬浮控制面板支持直接从你本地真实网络并发测速，自动识别维护页、403、异常跳转和超时节点，一键切换最快线路。
  - 支持行内一键添加/删除自定义网页镜像（如自建 Cloudflare Worker 反代）与自定义加速节点。
- **🎨 极简深浅色界面**：自适应系统深浅色，分段标签 + 滑动开关，默认折叠不遮挡页面。

## 📦 安装方法

1. 在浏览器安装任意一款用户脚本管理器：
   - [Tampermonkey](https://www.tampermonkey.net/)
   - [Violentmonkey](https://violentmonkey.github.io/)
   - 其他兼容标准 `GM_*` API 的用户脚本扩展
2. 点击以下任意链接一键安装脚本：
   - **GitHub 直连安装**：[github-mirror-helper.user.js](https://raw.githubusercontent.com/limoest/github-mirror-helper/main/github-mirror-helper.user.js)
   - **国内加速安装**：[github-mirror-helper.user.js（镜像通道）](https://gh-proxy.org/https://raw.githubusercontent.com/limoest/github-mirror-helper/main/github-mirror-helper.user.js)
3. 刷新任意普通网页，点击扩展图标 → **「🚀 打开镜像控制面板 / 测速」**，先跑一次 **「⚡ 一键测速」** 并点击 **「🎯 选最快」** 即可。

## 🔒 安全提示

- 第三方公益镜像站与加速代理**仅适用于公开仓库的只读浏览、代码克隆与文件下载**。
- **切勿**在任何第三方镜像网站上登录你的 GitHub 账号、授权 OAuth 或输入 Personal Access Token。
- 需要登录或访问私有仓库时，请点击面板中的 **「🏠 回原站」** 或按住 `Alt / Option` 键点击链接直连官方站点。

## 🧪 本地测试

```bash
node --check github-mirror-helper.user.js
node test.mjs
```

## 📄 License

[MIT](./LICENSE)
