// ==UserScript==
// @name         GitHub 渡口 (GitFerry)
// @namespace    https://github.com/limoest/gitferry
// @version      1.4.0
// @description  国内网络顺畅摆渡直达 GitHub：任意网页点击 GitHub 链接自动跳转镜像、原站直连自动跳转、Release/Raw/Archive/Git Clone 加速、一键节点测速与自定义镜像管理
// @author       limoest
// @homepageURL  https://github.com/limoest/gitferry
// @supportURL   https://github.com/limoest/gitferry/issues
// @updateURL    https://raw.githubusercontent.com/limoest/gitferry/main/gitferry.user.js
// @downloadURL  https://raw.githubusercontent.com/limoest/gitferry/main/gitferry.user.js
// @license      MIT
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYmciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzBmMTcyYSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxZTI5M2IiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImJvbHQiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzM0ZDM5OSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMGI5ODEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcng9IjE2IiBmaWxsPSJ1cmwoI2JnKSIvPgogIDwhLS0gQ3V0ZSBtaW5pbWFsaXN0IGNhdCBoZWFkIC0tPgogIDxwYXRoIGQ9Ik0xNiAyNiBMMTggMTMgQzE4LjMgMTEuMiAyMC41IDEwLjYgMjEuOCAxMS45IEwyNy41IDE3LjYgQzI5IDE3LjIgMzAuNSAxNyAzMiAxNyBDMzMuNSAxNyAzNSAxNy4yIDM2LjUgMTcuNiBMNDIuMiAxMS45IEM0My41IDEwLjYgNDUuNyAxMS4yIDQ2IDEzIEw0OCAyNiBDNTAuNSAyOS41IDUxLjUgMzQgNTAuNSAzOSBDNDkgNDYuNSA0MS41IDUxIDMyIDUxIEMyMi41IDUxIDE1IDQ2LjUgMTMuNSAzOSBDMTIuNSAzNCAxMy41IDI5LjUgMTYgMjYgWiIgZmlsbD0iI2Y4ZmFmYyIvPgogIDwhLS0gSW5uZXIgZWFycyAtLT4KICA8cGF0aCBkPSJNMjAuMiAxNi4yIEwxOS4yIDIzLjIgTDI0LjYgMjAuMiBaIiBmaWxsPSIjZmRhNGFmIiBvcGFjaXR5PSIwLjg1Ii8+CiAgPHBhdGggZD0iTTQzLjggMTYuMiBMNDQuOCAyMy4yIEwzOS40IDIwLjIgWiIgZmlsbD0iI2ZkYTRhZiIgb3BhY2l0eT0iMC44NSIvPgogIDwhLS0gRXllcyAtLT4KICA8Y2lyY2xlIGN4PSIyNC41IiBjeT0iMzMuNSIgcj0iMyIgZmlsbD0iIzBmMTcyYSIvPgogIDxjaXJjbGUgY3g9IjM5LjUiIGN5PSIzMy41IiByPSIzIiBmaWxsPSIjMGYxNzJhIi8+CiAgPGNpcmNsZSBjeD0iMjUuNSIgY3k9IjMyLjQiIHI9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICA8Y2lyY2xlIGN4PSI0MC41IiBjeT0iMzIuNCIgcj0iMSIgZmlsbD0iI2ZmZmZmZiIvPgogIDwhLS0gQ3V0ZSBub3NlICYgc21pbGUgLS0+CiAgPHBvbHlnb24gcG9pbnRzPSIzMiwzOC44IDMwLDM2LjYgMzQsMzYuNiIgZmlsbD0iI2ZiNzE4NSIvPgogIDxwYXRoIGQ9Ik0yOC41IDQwLjUgUTMwLjIgNDIuMyAzMiA0MC41IFEzMy44IDQyLjMgMzUuNSA0MC41IiBmaWxsPSJub25lIiBzdHJva2U9IiMwZjE3MmEiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8IS0tIFdoaXNrZXJzIC0tPgogIDxwYXRoIGQ9Ik0xMCAzNC41IEwxNiAzNS41IE0xMC41IDM5LjUgTDE2IDM4LjggTTU0IDM0LjUgTDQ4IDM1LjUgTTUzLjUgMzkuNSBMNDggMzguOCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPCEtLSBFbWVyYWxkIHNwZWVkIGJhZGdlIC0tPgogIDxjaXJjbGUgY3g9IjUxIiBjeT0iNTEiIHI9IjEwIiBmaWxsPSJ1cmwoI2JvbHQpIiBzdHJva2U9IiMwZjE3MmEiIHN0cm9rZS13aWR0aD0iMi41Ii8+CiAgPHBhdGggZD0iTTUyLjQgNDQuNSBMNDcuMiA1MS42IEw1MC44IDUxLjYgTDQ5LjYgNTcuNSBMNTQuOCA1MC40IEw1MS4yIDUwLjQgWiIgZmlsbD0iI2ZmZmZmZiIvPgo8L3N2Zz4K
// @match        *://*/*
// @run-at       document-start
// @noframes
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        GM_openInTab
// @connect      bgithub.xyz
// @connect      kkgithub.com
// @connect      githubfast.com
// @connect      git.bdnb.cn
// @connect      gitclone.com
// @connect      hub.gitmirror.com
// @connect      gh-proxy.org
// @connect      v6.gh-proxy.org
// @connect      cdn.gh-proxy.org
// @connect      edgeone.gh-proxy.org
// @connect      gh-proxy.com
// @connect      ghfast.top
// @connect      g.blfrp.cn
// @connect      wget.la
// @connect      ghproxy.it
// @connect      gh.idayer.com
// @connect      gh.qninq.cn
// @connect      gh.dpik.top
// @connect      ghproxy.vip
// @connect      hub.glowp.xyz
// @connect      ghproxy.net
// @connect      fastgit.cc
// @connect      gh.ddlc.top
// @connect      gh.acmsz.top
// @connect      ghproxy.imciel.com
// @connect      cdn.gh-proxy.com
// @connect      gh.monlor.com
// @connect      gh.noki.icu
// @connect      gh.sixyin.com
// @connect      git.yylx.win
// @connect      tvv.tw
// @connect      fastly.jsdelivr.net
// @connect      github.com
// @connect      *
// ==/UserScript==

/* ==UserConfig==
镜像与加速:
  webMirror:
    title: 🌐 网页浏览镜像站
    description: 点击 GitHub 链接或访问原站时跳转的原生界面镜像站（公益站可能波动，建议在面板测速或填写下方自定义镜像）
    type: select
    default: https://bgithub.xyz
    values:
      - https://bgithub.xyz
      - https://kkgithub.com
      - https://githubfast.com
      - https://git.bdnb.cn
      - https://gitclone.com
      - https://hub.gitmirror.com
  customWebMirrorOverride:
    title: ✨ 自定义优先网页镜像（可选）
    description: 填写后优先使用该地址（如自建反代 https://gh.example.com），留空则使用上方下拉选择
    type: text
    default: ""
  fileProxy:
    title: ⬇️ 文件 / Raw / Clone 加速节点
    description: 用于 Release 安装包、源码 ZIP、Raw 文件下载与 git clone 加速
    type: select
    default: https://gh-proxy.org
    values:
      - https://gh-proxy.org
      - https://v6.gh-proxy.org
      - https://cdn.gh-proxy.org
      - https://edgeone.gh-proxy.org
      - https://gh-proxy.com
      - https://cdn.gh-proxy.com
      - https://fastgit.cc
      - https://gh.ddlc.top
      - https://gh.idayer.com
      - https://gh.acmsz.top
      - https://ghproxy.imciel.com
      - https://gh.monlor.com
      - https://gh.noki.icu
      - https://ghfast.top
      - https://g.blfrp.cn
      - https://wget.la
      - https://ghproxy.it
      - https://gh.qninq.cn
      - https://gh.dpik.top
      - https://ghproxy.vip
      - https://gh.sixyin.com
      - https://git.yylx.win
      - https://tvv.tw
      - https://hub.glowp.xyz
      - https://ghproxy.net
  customFileProxyOverride:
    title: ⚡ 自定义优先文件加速前缀（可选）
    description: 填写后优先使用该前缀（如 https://your-proxy.example.com），留空则使用上方下拉选择
    type: text
    default: ""
---
跳转行为:
  autoInterceptLinks:
    title: 🔗 任意网页点击 GitHub 链接自动跳镜像
    description: 在百度、必应、知乎、掘金、CSDN、博客等站点点击 GitHub 链接时直接跳转镜像（按住 Alt/Option 点击可临时直连原站）
    type: checkbox
    default: true
  autoRedirectGitHub:
    title: 🚀 访问 GitHub 原站自动跳镜像
    description: 打开 github.com 时自动跳转镜像（登录、设置、OAuth 等敏感页面永不跳转；带 #no_mirror 可临时直连）
    type: checkbox
    default: true
  autoAccelerateRaw:
    title: ⬇️ Raw / Release / Archive 链接自动加速
    description: 点击或打开 raw.githubusercontent.com、Release 下载、源码归档链接时自动使用文件加速节点
    type: checkbox
    default: true
  injectDownloadButtons:
    title: ⚡ 页面内注入「加速下载」按钮
    description: 在 GitHub 与镜像站的 Release 附件、源码 ZIP 和 Raw 链接旁添加一键加速下载按钮
    type: checkbox
    default: true
  showFloatingDock:
    title: 💬 在 GitHub 与镜像站显示右下角悬浮按钮
    description: 提供一键切镜像、实时测速、加速 git clone 复制和快捷设置
    type: checkbox
    default: true
---
高级设置:
  extraWebMirrors:
    title: 🌐 额外自定义网页镜像列表
    description: 每行一个镜像地址（例如 https://gh.example.com），将出现在控制面板和测速列表中
    type: textarea
    default: ""
  extraFileProxies:
    title: ⬇️ 额外自定义文件加速节点列表
    description: 每行一个加速前缀（例如 https://proxy.example.com），将出现在控制面板和测速列表中
    type: textarea
    default: ""
  excludedHosts:
    title: 🚫 不拦截链接的网站域名
    description: 每行一个域名（例如 intranet.company.com），在这些站点上不自动拦截 GitHub 链接
    type: textarea
    default: ""
==/UserConfig== */

(function () {
  "use strict";

  // =========================================================================
  // 1. Constants & Built-in Mirror Pools
  // =========================================================================

  const BUILTIN_WEB_MIRRORS = [
    { url: "https://bgithub.xyz", name: "BGitHub", mode: "replace" },
    { url: "https://kkgithub.com", name: "KKGitHub", mode: "replace" },
    { url: "https://githubfast.com", name: "GitHubFast", mode: "replace" },
    { url: "https://git.bdnb.cn", name: "BDNB 镜像", mode: "replace" },
    { url: "https://gitclone.com", name: "GitClone", mode: "gitclone" },
    { url: "https://hub.gitmirror.com", name: "GitMirror", mode: "prefix" },
  ];

  const BUILTIN_FILE_PROXIES = [
    { url: "https://gh-proxy.org", name: "GH-Proxy 主节点" },
    { url: "https://v6.gh-proxy.org", name: "GH-Proxy v6" },
    { url: "https://cdn.gh-proxy.org", name: "GH-Proxy CDN" },
    { url: "https://edgeone.gh-proxy.org", name: "GH-Proxy EdgeOne" },
    { url: "https://gh-proxy.com", name: "GH-Proxy.com" },
    { url: "https://cdn.gh-proxy.com", name: "GH-Proxy.com CDN" },
    { url: "https://fastgit.cc", name: "FastGit.cc" },
    { url: "https://gh.ddlc.top", name: "DDLC 加速" },
    { url: "https://gh.idayer.com", name: "IDayer 加速" },
    { url: "https://gh.acmsz.top", name: "ACMSZ 加速" },
    { url: "https://ghproxy.imciel.com", name: "Imciel 加速" },
    { url: "https://gh.monlor.com", name: "Monlor 加速" },
    { url: "https://gh.noki.icu", name: "Noki 加速" },
    { url: "https://ghfast.top", name: "GHFast 加速" },
    { url: "https://g.blfrp.cn", name: "BLFRP 加速" },
    { url: "https://wget.la", name: "Wget.la 加速" },
    { url: "https://ghproxy.it", name: "GHProxy.it" },
    { url: "https://gh.qninq.cn", name: "Qninq 加速" },
    { url: "https://gh.dpik.top", name: "DPik 加速" },
    { url: "https://ghproxy.vip", name: "GHProxy VIP" },
    { url: "https://gh.sixyin.com", name: "Sixyin 加速" },
    { url: "https://git.yylx.win", name: "YYLX 加速" },
    { url: "https://tvv.tw", name: "TVV 加速", stripScheme: true },
    { url: "https://hub.glowp.xyz", name: "Glowp 加速" },
    { url: "https://ghproxy.net", name: "GHProxy.net" },
  ];

  const GITHUB_HOSTS = new Set(["github.com", "www.github.com"]);
  const RAW_FILE_HOSTS = new Set([
    "raw.githubusercontent.com",
    "raw.github.com",
    "gist.githubusercontent.com",
    "codeload.github.com",
    "objects.githubusercontent.com",
    "release-assets.githubusercontent.com",
  ]);

  const SENSITIVE_PATH_PREFIXES = [
    "/login",
    "/signup",
    "/join",
    "/session",
    "/sessions",
    "/logout",
    "/password_reset",
    "/settings",
    "/account",
    "/notifications",
    "/auth",
    "/oauth",
    "/two-factor",
    "/verified-device",
    "/device",
    "/dashboard",
    "/new",
    "/import",
    "/codespaces",
    "/copilot",
    "/sponsors",
    "/billing",
  ];

  const NON_REPO_TOP_SEGMENTS = new Set([
    "",
    "about",
    "account",
    "advisories",
    "apps",
    "auth",
    "billing",
    "codespaces",
    "collections",
    "contact",
    "copilot",
    "customer-stories",
    "dashboard",
    "device",
    "enterprise",
    "enterprises",
    "events",
    "explore",
    "features",
    "gist",
    "images",
    "import",
    "issues",
    "join",
    "login",
    "logout",
    "marketplace",
    "new",
    "notifications",
    "oauth",
    "orgs",
    "organizations",
    "password_reset",
    "pricing",
    "pulls",
    "readme",
    "search",
    "security",
    "session",
    "sessions",
    "settings",
    "signup",
    "site",
    "solutions",
    "sponsors",
    "stars",
    "team",
    "topics",
    "trending",
    "two-factor",
    "users",
    "verified-device",
    "watching",
  ]);

  const REDIRECT_WRAPPER_HOSTS = new Map([
    ["link.zhihu.com", ["target"]],
    ["link.juejin.cn", ["target"]],
    ["link.csdn.net", ["target"]],
    ["link.jianshu.com", ["t"]],
    ["gitee.com", ["target"]],
    ["cloud.tencent.com", ["target"]],
    ["weixin110.qq.com", ["url"]],
    ["c.pc.qq.com", ["pfurl", "url"]],
  ]);

  const CFG_KEYS = {
    webMirror: "镜像与加速.webMirror",
    customWebMirrorOverride: "镜像与加速.customWebMirrorOverride",
    fileProxy: "镜像与加速.fileProxy",
    customFileProxyOverride: "镜像与加速.customFileProxyOverride",
    autoInterceptLinks: "跳转行为.autoInterceptLinks",
    autoRedirectGitHub: "跳转行为.autoRedirectGitHub",
    autoAccelerateRaw: "跳转行为.autoAccelerateRaw",
    injectDownloadButtons: "跳转行为.injectDownloadButtons",
    showFloatingDock: "跳转行为.showFloatingDock",
    extraWebMirrors: "高级设置.extraWebMirrors",
    extraFileProxies: "高级设置.extraFileProxies",
    excludedHosts: "高级设置.excludedHosts",
  };

  const BYPASS_SESSION_KEY = "ghmh_bypass_github_origin";
  const DOCK_OPEN_KEY = "ui.dockExpanded";
  const PROBE_REPO_PATH = "/torvalds/linux";
  const PROBE_RAW_URL = "https://raw.githubusercontent.com/torvalds/linux/master/README";

  // =========================================================================
  // 2. Pure Core URL & Config Helpers (Testable)
  // =========================================================================

  function normalizeBaseUrl(raw) {
    if (!raw || typeof raw !== "string") return "";
    let s = raw.trim();
    if (!s) return "";
    if (!/^https?:\/\//i.test(s)) {
      s = "https://" + s;
    }
    try {
      const u = new URL(s);
      const pathname = u.pathname.replace(/\/+$/, "");
      return `${u.origin}${pathname}`;
    } catch {
      return "";
    }
  }

  function parseLineList(text) {
    if (!text || typeof text !== "string") return [];
    return text
      .split(/[\r\n,;]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function getHostOf(urlStr) {
    try {
      return new URL(urlStr).hostname.toLowerCase();
    } catch {
      return "";
    }
  }

  function isSensitivePath(pathname) {
    const p = (pathname || "/").toLowerCase();
    return SENSITIVE_PATH_PREFIXES.some((prefix) => p === prefix || p.startsWith(prefix + "/"));
  }

  function isFileDownloadPath(pathname, search) {
    const p = pathname || "";
    if (/^\/[^/]+\/[^/]+\/releases\/download\//i.test(p)) return true;
    if (/^\/[^/]+\/[^/]+\/archive\//i.test(p)) return true;
    if (/^\/[^/]+\/[^/]+\/raw\//i.test(p)) return true;
    if (/^\/[^/]+\/[^/]+\/tarball\//i.test(p)) return true;
    if (/^\/[^/]+\/[^/]+\/zipball\//i.test(p)) return true;
    if (/^\/[^/]+\/[^/]+\/blob\//i.test(p) && /[?&]raw=(true|1)\b/i.test(search || "")) return true;
    return false;
  }

  function extractRepoInfo(pathname) {
    let clean = (pathname || "/").replace(/^\/+|\/+$/g, "");
    // Support gitclone.com/github.com/owner/repo
    clean = clean.replace(/^github\.com\//i, "");
    if (!clean) return null;
    const parts = clean.split("/");
    if (parts.length < 2) return null;
    const owner = parts[0];
    const repo = parts[1].replace(/\.git$/i, "");
    if (!owner || !repo) return null;
    if (NON_REPO_TOP_SEGMENTS.has(owner.toLowerCase())) return null;
    let branch = "";
    if ((parts[2] === "tree" || parts[2] === "blob") && parts[3]) {
      branch = parts[3];
    }
    return { owner, repo, branch };
  }

  function unwrapPortalUrl(urlStr) {
    try {
      const u = new URL(urlStr);
      const host = u.hostname.toLowerCase();
      if (!REDIRECT_WRAPPER_HOSTS.has(host)) return urlStr;
      if (host === "gitee.com" && u.pathname !== "/link") return urlStr;
      const paramNames = REDIRECT_WRAPPER_HOSTS.get(host);
      for (const key of paramNames) {
        const inner = u.searchParams.get(key);
        if (inner && /^https?:\/\//i.test(inner)) {
          return inner;
        }
      }
      return urlStr;
    } catch {
      return urlStr;
    }
  }

  function classifyUrl(rawUrlStr, mirrorHostSet) {
    const unwrapped = unwrapPortalUrl(rawUrlStr);
    let u;
    try {
      u = new URL(unwrapped);
    } catch {
      return { kind: "none" };
    }
    if (u.protocol !== "http:" && u.protocol !== "https:") {
      return { kind: "none" };
    }

    const host = u.hostname.toLowerCase();

    if (RAW_FILE_HOSTS.has(host)) {
      return { kind: "file", canonicalUrl: u.href, url: u };
    }

    if (GITHUB_HOSTS.has(host)) {
      if (isSensitivePath(u.pathname)) {
        return { kind: "auth", canonicalUrl: u.href, url: u };
      }
      if (isFileDownloadPath(u.pathname, u.search)) {
        return { kind: "file", canonicalUrl: u.href, url: u };
      }
      return {
        kind: "web",
        canonicalUrl: `https://github.com${u.pathname}${u.search}${u.hash}`,
        url: u,
        repo: extractRepoInfo(u.pathname),
      };
    }

    if (mirrorHostSet && mirrorHostSet.has(host)) {
      const normalizedPath = u.pathname.replace(/^\/github\.com(?=\/)/i, "");
      if (isFileDownloadPath(normalizedPath, u.search)) {
        const canonical = `https://github.com${normalizedPath}${u.search}${u.hash}`;
        return { kind: "file", canonicalUrl: canonical, url: u, fromMirror: true };
      }
    }

    return { kind: "none" };
  }

  function buildWebMirrorUrl(canonicalUrl, mirrorBaseUrl, mirrorMeta) {
    const base = normalizeBaseUrl(mirrorBaseUrl);
    if (!base) return null;
    let u;
    try {
      u = new URL(canonicalUrl);
    } catch {
      return null;
    }

    u.searchParams.delete("no_mirror");
    let hash = u.hash || "";
    if (hash === "#no_mirror") hash = "";

    const pathPart = `${u.pathname}${u.search}${hash}`;
    const mode = mirrorMeta?.mode || "replace";

    if (base.includes("{url}")) {
      return base.replace("{url}", encodeURIComponent(u.href));
    }
    if (mode === "prefix") {
      return `${base}/https://github.com${pathPart}`;
    }
    if (mode === "gitclone" || getHostOf(base) === "gitclone.com") {
      return `${base}/github.com${pathPart}`;
    }
    if (/\/https?:\/\/github\.com$/i.test(base)) {
      return `${base}${pathPart}`;
    }

    return `${base}${pathPart}`;
  }

  function buildFileProxyUrl(canonicalUrl, proxyBaseUrl) {
    const base = normalizeBaseUrl(proxyBaseUrl);
    if (!base) return canonicalUrl;

    const host = getHostOf(base);
    if (host.includes("jsdelivr.net")) {
      const m = canonicalUrl.match(
        /^https?:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/i
      );
      if (m) {
        return `${base}/gh/${m[1]}/${m[2]}@${m[3]}/${m[4]}`;
      }
      return canonicalUrl;
    }

    if (canonicalUrl.startsWith(base + "/")) {
      return canonicalUrl;
    }
    // Some proxies (e.g. tvv.tw) expect /github.com/... without https://
    if (host === "tvv.tw") {
      return `${base}/${canonicalUrl.replace(/^https?:\/\//i, "")}`;
    }
    return `${base}/${canonicalUrl}`;
  }

  function hasBypassFlag(loc) {
    try {
      const u = new URL(loc.href);
      if (u.searchParams.get("no_mirror") === "1") return true;
      if (u.hash && u.hash.toLowerCase().includes("no_mirror")) return true;
    } catch {
      // ignore
    }
    try {
      if (window.sessionStorage && window.sessionStorage.getItem(BYPASS_SESSION_KEY) === "1") {
        return true;
      }
    } catch {
      // ignore
    }
    return false;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      normalizeBaseUrl,
      parseLineList,
      isSensitivePath,
      isFileDownloadPath,
      extractRepoInfo,
      unwrapPortalUrl,
      classifyUrl,
      buildWebMirrorUrl,
      buildFileProxyUrl,
      BUILTIN_WEB_MIRRORS,
      BUILTIN_FILE_PROXIES,
    };
    return;
  }

  // =========================================================================
  // 3. Config Accessors (Universal GM_getValue / GM_setValue)
  // =========================================================================

  function getConfig() {
    const presetWeb = normalizeBaseUrl(GM_getValue(CFG_KEYS.webMirror, BUILTIN_WEB_MIRRORS[0].url));
    const customWeb = normalizeBaseUrl(GM_getValue(CFG_KEYS.customWebMirrorOverride, ""));
    const presetFile = normalizeBaseUrl(GM_getValue(CFG_KEYS.fileProxy, BUILTIN_FILE_PROXIES[0].url));
    const customFile = normalizeBaseUrl(GM_getValue(CFG_KEYS.customFileProxyOverride, ""));

    const extraWebRaw = parseLineList(GM_getValue(CFG_KEYS.extraWebMirrors, ""));
    const extraFileRaw = parseLineList(GM_getValue(CFG_KEYS.extraFileProxies, ""));
    const excludedHosts = parseLineList(GM_getValue(CFG_KEYS.excludedHosts, "")).map((h) =>
      h.replace(/^https?:\/\//i, "").replace(/\/.*$/, "").toLowerCase()
    );

    const webMirrors = [...BUILTIN_WEB_MIRRORS];
    const seenWeb = new Set(webMirrors.map((m) => normalizeBaseUrl(m.url)));
    for (const item of extraWebRaw) {
      const u = normalizeBaseUrl(item);
      if (u && !seenWeb.has(u)) {
        seenWeb.add(u);
        webMirrors.push({ url: u, name: getHostOf(u) || u, mode: "replace", custom: true });
      }
    }
    if (customWeb && !seenWeb.has(customWeb)) {
      seenWeb.add(customWeb);
      webMirrors.unshift({ url: customWeb, name: getHostOf(customWeb) || customWeb, mode: "replace", custom: true });
    }

    const fileProxies = [...BUILTIN_FILE_PROXIES];
    const seenFile = new Set(fileProxies.map((p) => normalizeBaseUrl(p.url)));
    for (const item of extraFileRaw) {
      const u = normalizeBaseUrl(item);
      if (u && !seenFile.has(u)) {
        seenFile.add(u);
        fileProxies.push({ url: u, name: getHostOf(u) || u, custom: true });
      }
    }
    if (customFile && !seenFile.has(customFile)) {
      seenFile.add(customFile);
      fileProxies.unshift({ url: customFile, name: getHostOf(customFile) || customFile, custom: true });
    }

    const activeWebMirror = customWeb || presetWeb || BUILTIN_WEB_MIRRORS[0].url;
    const activeWebMirrorMeta = webMirrors.find((m) => normalizeBaseUrl(m.url) === activeWebMirror) || null;
    const activeFileProxy = customFile || presetFile || BUILTIN_FILE_PROXIES[0].url;

    const webMirrorHosts = new Set(webMirrors.map((m) => getHostOf(m.url)).filter(Boolean));
    const fileProxyHosts = new Set(fileProxies.map((p) => getHostOf(p.url)).filter(Boolean));

    return {
      activeWebMirror,
      activeWebMirrorMeta,
      activeFileProxy,
      webMirrors,
      fileProxies,
      webMirrorHosts,
      fileProxyHosts,
      autoInterceptLinks: Boolean(GM_getValue(CFG_KEYS.autoInterceptLinks, true)),
      autoRedirectGitHub: Boolean(GM_getValue(CFG_KEYS.autoRedirectGitHub, true)),
      autoAccelerateRaw: Boolean(GM_getValue(CFG_KEYS.autoAccelerateRaw, true)),
      injectDownloadButtons: Boolean(GM_getValue(CFG_KEYS.injectDownloadButtons, true)),
      showFloatingDock: Boolean(GM_getValue(CFG_KEYS.showFloatingDock, true)),
      excludedHosts,
    };
  }

  function setActiveWebMirror(url) {
    const clean = normalizeBaseUrl(url);
    if (!clean) return;
    const isBuiltin = BUILTIN_WEB_MIRRORS.some((m) => normalizeBaseUrl(m.url) === clean);
    if (isBuiltin) {
      GM_setValue(CFG_KEYS.webMirror, clean);
      GM_setValue(CFG_KEYS.customWebMirrorOverride, "");
    } else {
      GM_setValue(CFG_KEYS.customWebMirrorOverride, clean);
    }
  }

  function setActiveFileProxy(url) {
    const clean = normalizeBaseUrl(url);
    if (!clean) return;
    const isBuiltin = BUILTIN_FILE_PROXIES.some((p) => normalizeBaseUrl(p.url) === clean);
    if (isBuiltin) {
      GM_setValue(CFG_KEYS.fileProxy, clean);
      GM_setValue(CFG_KEYS.customFileProxyOverride, "");
    } else {
      GM_setValue(CFG_KEYS.customFileProxyOverride, clean);
    }
  }

  function addExtraMirror(type, url) {
    const clean = normalizeBaseUrl(url);
    if (!clean) return false;
    const key = type === "web" ? CFG_KEYS.extraWebMirrors : CFG_KEYS.extraFileProxies;
    const list = parseLineList(GM_getValue(key, ""));
    if (!list.some((item) => normalizeBaseUrl(item) === clean)) {
      list.push(clean);
      GM_setValue(key, list.join("\n"));
    }
    return true;
  }

  function removeExtraMirror(type, url) {
    const clean = normalizeBaseUrl(url);
    const key = type === "web" ? CFG_KEYS.extraWebMirrors : CFG_KEYS.extraFileProxies;
    const overrideKey = type === "web" ? CFG_KEYS.customWebMirrorOverride : CFG_KEYS.customFileProxyOverride;
    const list = parseLineList(GM_getValue(key, "")).filter((item) => normalizeBaseUrl(item) !== clean);
    GM_setValue(key, list.join("\n"));
    if (normalizeBaseUrl(GM_getValue(overrideKey, "")) === clean) {
      GM_setValue(overrideKey, "");
    }
  }

  // =========================================================================
  // 4. Immediate Redirect Check at document-start
  // =========================================================================

  const initialConfig = getConfig();
  const currentHost = location.hostname.toLowerCase();
  const isOnGitHub = GITHUB_HOSTS.has(currentHost);
  const isOnRawHost = RAW_FILE_HOSTS.has(currentHost);
  const isOnMirror = initialConfig.webMirrorHosts.has(currentHost);
  const isOnFileProxy = initialConfig.fileProxyHosts.has(currentHost);

  function maybeRedirectImmediately() {
    if (isOnMirror || isOnFileProxy) return false;

    if (hasBypassFlag(location)) {
      try {
        window.sessionStorage?.setItem(BYPASS_SESSION_KEY, "1");
      } catch {
        // ignore
      }
      return false;
    }

    if (isOnRawHost && initialConfig.autoAccelerateRaw) {
      const target = buildFileProxyUrl(location.href, initialConfig.activeFileProxy);
      if (target && target !== location.href) {
        location.replace(target);
        return true;
      }
      return false;
    }

    if (isOnGitHub) {
      if (isSensitivePath(location.pathname)) return false;

      if (isFileDownloadPath(location.pathname, location.search) && initialConfig.autoAccelerateRaw) {
        const target = buildFileProxyUrl(location.href, initialConfig.activeFileProxy);
        if (target && target !== location.href) {
          location.replace(target);
          return true;
        }
        return false;
      }

      if (initialConfig.autoRedirectGitHub) {
        const target = buildWebMirrorUrl(
          location.href,
          initialConfig.activeWebMirror,
          initialConfig.activeWebMirrorMeta
        );
        if (target && target !== location.href) {
          location.replace(target);
          return true;
        }
      }
    }

    return false;
  }

  if (maybeRedirectImmediately()) {
    return;
  }

  // =========================================================================
  // 5. Lightweight Global Click Interception
  // =========================================================================

  function isCurrentHostExcluded(cfg) {
    return cfg.excludedHosts.some((d) => currentHost === d || currentHost.endsWith("." + d));
  }

  function handleLinkClick(event) {
    if (event.type === "click" && event.button !== 0) return;
    if (event.type === "auxclick" && event.button !== 1) return;
    if (event.altKey) return;
    if (event.defaultPrevented) return;

    const anchor = event.target?.closest?.("a[href]");
    if (!anchor) return;
    if (anchor.dataset.ghmhOriginal === "1" || anchor.dataset.ghmhBtn === "1") return;

    const cfg = getConfig();
    if (isCurrentHostExcluded(cfg)) return;

    const href = anchor.href;
    if (!href) return;

    const info = classifyUrl(href, cfg.webMirrorHosts);
    if (info.kind === "none" || info.kind === "auth") return;

    let targetUrl = null;
    let toastLabel = "";

    if (info.kind === "file") {
      if (!cfg.autoAccelerateRaw) return;
      targetUrl = buildFileProxyUrl(info.canonicalUrl, cfg.activeFileProxy);
      toastLabel = `⚡ 已走加速节点：${getHostOf(cfg.activeFileProxy)}`;
    } else if (info.kind === "web") {
      if (isOnGitHub && hasBypassFlag(location)) return;
      if (!cfg.autoInterceptLinks) return;
      targetUrl = buildWebMirrorUrl(info.canonicalUrl, cfg.activeWebMirror, cfg.activeWebMirrorMeta);
      toastLabel = `🚀 已通过镜像打开：${getHostOf(cfg.activeWebMirror)}`;
    }

    if (!targetUrl || targetUrl === href) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    const openInNewTab =
      event.type === "auxclick" ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      (anchor.target && anchor.target.toLowerCase() === "_blank");

    showToast(toastLabel);

    if (openInNewTab) {
      GM_openInTab(targetUrl, {
        active: !event.ctrlKey && !event.metaKey && event.type !== "auxclick",
        insert: true,
      });
    } else {
      window.location.assign(targetUrl);
    }
  }

  document.addEventListener("click", handleLinkClick, true);
  document.addEventListener("auxclick", handleLinkClick, true);

  // =========================================================================
  // 6. Latency Speed Test Engine
  // =========================================================================

  const speedCache = new Map();

  function probeSingleNode(type, node) {
    const base = normalizeBaseUrl(node.url);
    const start = Date.now();
    const probeUrl =
      type === "web"
        ? buildWebMirrorUrl(`https://github.com${PROBE_REPO_PATH}`, base, node) || base
        : buildFileProxyUrl(PROBE_RAW_URL, base);

    return new Promise((resolve) => {
      let settled = false;
      const done = (result) => {
        if (settled) return;
        settled = true;
        speedCache.set(base, result);
        resolve(result);
      };

      try {
        GM_xmlhttpRequest({
          method: "GET",
          url: probeUrl,
          timeout: 5500,
          anonymous: true,
          onload: (res) => {
            const ms = Date.now() - start;
            const body = (res.responseText || "").slice(0, 4096);
            const finalHost = getHostOf(res.finalUrl || probeUrl);
            const expectedHost = getHostOf(base);

            if (res.status < 200 || res.status >= 400) {
              done({ ok: false, ms, status: res.status, note: `HTTP ${res.status}` });
              return;
            }
            if (type === "web") {
              if (/网站维护|维护中|temporarily unavailable/i.test(body)) {
                done({ ok: false, ms, status: res.status, note: "维护中" });
                return;
              }
              if (finalHost && expectedHost && !finalHost.endsWith(expectedHost) && !expectedHost.endsWith(finalHost)) {
                done({ ok: false, ms, status: res.status, note: "异常跳转" });
                return;
              }
              done({ ok: true, ms, status: res.status, note: "可用" });
            } else {
              if (!/linux kernel/i.test(body)) {
                done({ ok: false, ms, status: res.status, note: "异常" });
                return;
              }
              done({ ok: true, ms, status: res.status, note: "可用" });
            }
          },
          onerror: () => done({ ok: false, ms: Date.now() - start, status: 0, note: "不可达" }),
          ontimeout: () => done({ ok: false, ms: 5500, status: 0, note: "超时" }),
        });
      } catch {
        done({ ok: false, ms: 0, status: 0, note: "失败" });
      }
    });
  }

  // =========================================================================
  // 7. Minimalist UI Styles, Toast & Inline Download Buttons
  // =========================================================================

  let stylesInjected = false;

  function ensureStyles() {
    if (stylesInjected) return;
    stylesInjected = true;
    GM_addStyle(`
      #ghmh-root {
        --g-bg: rgba(255, 255, 255, 0.96);
        --g-surface: #f4f5f7;
        --g-surface-hover: #ebedf0;
        --g-active-bg: #eefbf3;
        --g-border: rgba(15, 23, 42, 0.09);
        --g-border-strong: rgba(15, 23, 42, 0.16);
        --g-text: #111827;
        --g-muted: #6b7280;
        --g-accent: #10b981;
        --g-accent-strong: #059669;
        --g-accent-text: #047857;
        --g-danger-bg: #fef2f2;
        --g-danger-text: #dc2626;
        --g-warn-bg: #fffbeb;
        --g-warn-text: #b45309;
        --g-shadow: 0 16px 40px rgba(15, 23, 42, 0.14), 0 2px 6px rgba(15, 23, 42, 0.06);
        position: fixed;
        right: 20px;
        bottom: 20px;
        z-index: 2147483646;
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 13px;
        line-height: 1.45;
        color: var(--g-text);
        -webkit-font-smoothing: antialiased;
      }
      @media (prefers-color-scheme: dark) {
        #ghmh-root {
          --g-bg: rgba(22, 24, 29, 0.95);
          --g-surface: rgba(255, 255, 255, 0.055);
          --g-surface-hover: rgba(255, 255, 255, 0.09);
          --g-active-bg: rgba(16, 185, 129, 0.13);
          --g-border: rgba(255, 255, 255, 0.09);
          --g-border-strong: rgba(255, 255, 255, 0.18);
          --g-text: #f3f4f6;
          --g-muted: #9ca3af;
          --g-accent: #34d399;
          --g-accent-strong: #10b981;
          --g-accent-text: #34d399;
          --g-danger-bg: rgba(239, 68, 68, 0.14);
          --g-danger-text: #f87171;
          --g-warn-bg: rgba(245, 158, 11, 0.14);
          --g-warn-text: #fbbf24;
          --g-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.28);
        }
      }
      #ghmh-root * { box-sizing: border-box; }

      .ghmh-toast {
        position: fixed;
        top: 18px;
        right: 20px;
        z-index: 2147483647;
        background: rgba(17, 24, 39, 0.92);
        color: #f9fafb;
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", sans-serif;
        font-size: 12.5px;
        font-weight: 500;
        padding: 8px 14px;
        border-radius: 10px;
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.24);
        backdrop-filter: blur(10px);
        pointer-events: none;
        opacity: 0;
        transform: translateY(-6px);
        transition: opacity 0.18s ease, transform 0.18s ease;
      }
      .ghmh-toast.ghmh-show {
        opacity: 1;
        transform: translateY(0);
      }

      .ghmh-dl-btn {
        display: inline-flex !important;
        align-items: center;
        gap: 3px;
        margin-left: 8px;
        padding: 1px 8px;
        border-radius: 999px;
        background: #059669;
        color: #ffffff !important;
        font-size: 11px !important;
        font-weight: 500 !important;
        line-height: 18px !important;
        text-decoration: none !important;
        vertical-align: middle;
        transition: opacity 0.14s ease, transform 0.14s ease;
      }
      .ghmh-dl-btn:hover {
        opacity: 0.9;
        transform: translateY(-0.5px);
      }

      .ghmh-fab {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        height: 36px;
        padding: 0 14px;
        border-radius: 999px;
        border: 1px solid var(--g-border-strong);
        background: var(--g-bg);
        color: var(--g-text);
        font-size: 12.5px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: var(--g-shadow);
        backdrop-filter: blur(16px);
        transition: transform 0.16s ease, border-color 0.16s ease;
      }
      .ghmh-fab:hover {
        transform: translateY(-1px);
        border-color: var(--g-accent);
      }
      .ghmh-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--g-accent);
      }
      .ghmh-dot.origin { background: #3b82f6; }

      .ghmh-panel {
        width: 356px;
        max-width: calc(100vw - 24px);
        max-height: calc(100vh - 48px);
        display: flex;
        flex-direction: column;
        border-radius: 16px;
        border: 1px solid var(--g-border);
        background: var(--g-bg);
        color: var(--g-text);
        box-shadow: var(--g-shadow);
        backdrop-filter: blur(20px);
        overflow: hidden;
      }

      .ghmh-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 13px 16px 10px;
      }
      .ghmh-title {
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 14px;
        font-weight: 650;
        letter-spacing: -0.01em;
      }
      .ghmh-pill {
        font-size: 11px;
        font-weight: 500;
        padding: 2px 7px;
        border-radius: 999px;
        background: var(--g-surface);
        color: var(--g-muted);
      }
      .ghmh-icon-btn {
        width: 26px;
        height: 26px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--g-muted);
        font-size: 16px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.12s ease, color 0.12s ease;
      }
      .ghmh-icon-btn:hover {
        background: var(--g-surface);
        color: var(--g-text);
      }

      .ghmh-seg-wrap {
        padding: 0 16px 12px;
      }
      .ghmh-seg {
        display: flex;
        padding: 3px;
        border-radius: 10px;
        background: var(--g-surface);
        gap: 2px;
      }
      .ghmh-seg-btn {
        flex: 1;
        border: none;
        background: transparent;
        color: var(--g-muted);
        font-size: 12.5px;
        font-weight: 600;
        padding: 6px 8px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .ghmh-seg-btn.active {
        background: var(--g-bg);
        color: var(--g-text);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      }

      .ghmh-body {
        padding: 0 16px 16px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 11px;
      }

      .ghmh-toolbar {
        display: flex;
        gap: 8px;
      }
      .ghmh-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        height: 32px;
        padding: 0 12px;
        border-radius: 9px;
        border: 1px solid var(--g-border-strong);
        background: transparent;
        color: var(--g-text);
        font-size: 12.5px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: background 0.12s ease, border-color 0.12s ease, opacity 0.12s ease;
      }
      .ghmh-btn:hover { background: var(--g-surface); }
      .ghmh-btn.primary {
        background: var(--g-accent-strong);
        border-color: transparent;
        color: #ffffff;
      }
      .ghmh-btn.primary:hover { opacity: 0.92; background: var(--g-accent-strong); }
      .ghmh-btn.subtle {
        height: 26px;
        padding: 0 9px;
        font-size: 11.5px;
        border-color: transparent;
        background: var(--g-surface);
        color: var(--g-muted);
      }
      .ghmh-btn.subtle:hover { background: var(--g-surface-hover); color: var(--g-text); }
      .ghmh-btn:disabled { opacity: 0.55; cursor: not-allowed; }

      .ghmh-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2px;
      }
      .ghmh-sec-title {
        font-size: 11.5px;
        font-weight: 600;
        color: var(--g-muted);
      }
      .ghmh-link-btn {
        border: none;
        background: transparent;
        color: var(--g-accent-text);
        font-size: 11.5px;
        font-weight: 600;
        cursor: pointer;
        padding: 2px 6px;
        border-radius: 6px;
      }
      .ghmh-link-btn:hover { background: var(--g-surface); }

      .ghmh-list {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      .ghmh-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 10px;
        border-radius: 10px;
        border: 1px solid transparent;
        background: var(--g-surface);
        cursor: pointer;
        transition: background 0.12s ease, border-color 0.12s ease;
      }
      .ghmh-item:hover { background: var(--g-surface-hover); }
      .ghmh-item.active {
        background: var(--g-active-bg);
        border-color: var(--g-accent);
      }
      .ghmh-radio {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1.5px solid var(--g-border-strong);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ghmh-item.active .ghmh-radio {
        border-color: var(--g-accent-strong);
      }
      .ghmh-item.active .ghmh-radio::after {
        content: "";
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--g-accent-strong);
      }
      .ghmh-item-info {
        min-width: 0;
        flex: 1;
      }
      .ghmh-item-name {
        font-size: 12.5px;
        font-weight: 600;
        color: var(--g-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .ghmh-item-host {
        font-size: 11px;
        color: var(--g-muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .ghmh-ping {
        font-size: 11px;
        font-weight: 600;
        padding: 2px 7px;
        border-radius: 999px;
        white-space: nowrap;
        flex-shrink: 0;
      }
      .ghmh-ping.fast { background: var(--g-active-bg); color: var(--g-accent-text); }
      .ghmh-ping.mid  { background: var(--g-warn-bg); color: var(--g-warn-text); }
      .ghmh-ping.fail { background: var(--g-danger-bg); color: var(--g-danger-text); }
      .ghmh-ping.idle { color: var(--g-muted); font-weight: 500; }

      .ghmh-del {
        border: none;
        background: transparent;
        color: var(--g-muted);
        font-size: 13px;
        padding: 2px 5px;
        border-radius: 6px;
        cursor: pointer;
        opacity: 0.65;
      }
      .ghmh-del:hover { opacity: 1; color: var(--g-danger-text); background: var(--g-danger-bg); }

      .ghmh-add-row {
        display: flex;
        gap: 6px;
        margin-top: 2px;
      }
      .ghmh-input {
        flex: 1;
        height: 32px;
        padding: 0 10px;
        border-radius: 9px;
        border: 1px solid var(--g-border-strong);
        background: transparent;
        color: var(--g-text);
        font-size: 12px;
        outline: none;
      }
      .ghmh-input:focus { border-color: var(--g-accent-strong); }

      .ghmh-hint {
        font-size: 11.5px;
        line-height: 1.5;
        padding: 9px 11px;
        border-radius: 10px;
        background: var(--g-warn-bg);
        color: var(--g-warn-text);
      }

      .ghmh-code {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        background: var(--g-surface);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 11.5px;
      }
      .ghmh-code code {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--g-text);
        background: transparent;
      }

      .ghmh-toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 9px 11px;
        border-radius: 10px;
        background: var(--g-surface);
        cursor: pointer;
      }
      .ghmh-toggle-label {
        font-size: 12.5px;
        font-weight: 500;
        color: var(--g-text);
      }
      .ghmh-switch {
        position: relative;
        width: 34px;
        height: 20px;
        flex-shrink: 0;
      }
      .ghmh-switch input {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
      }
      .ghmh-slider {
        position: absolute;
        inset: 0;
        border-radius: 999px;
        background: var(--g-border-strong);
        transition: background 0.16s ease;
      }
      .ghmh-slider::before {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        left: 2px;
        top: 2px;
        border-radius: 50%;
        background: #ffffff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        transition: transform 0.16s ease;
      }
      .ghmh-switch input:checked + .ghmh-slider {
        background: var(--g-accent-strong);
      }
      .ghmh-switch input:checked + .ghmh-slider::before {
        transform: translateX(14px);
      }

      .ghmh-foot {
        font-size: 11px;
        color: var(--g-muted);
        text-align: center;
        padding-top: 2px;
      }
    `);
  }

  let toastTimer = null;
  function showToast(msg) {
    ensureStyles();
    if (!document.body) return;
    let el = document.querySelector(".ghmh-toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "ghmh-toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("ghmh-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("ghmh-show"), 2000);
  }

  function getCurrentCanonicalUrl() {
    if (isOnGitHub || isOnMirror) {
      const normalizedPath = location.pathname.replace(/^\/github\.com(?=\/)/i, "");
      return `https://github.com${normalizedPath}${location.search}${location.hash}`;
    }
    return "";
  }

  function injectDownloadButtons() {
    const cfg = getConfig();
    if (!cfg.injectDownloadButtons) return;
    if (!isOnGitHub && !isOnMirror) return;

    ensureStyles();
    const anchors = document.querySelectorAll("a[href]:not([data-ghmh-checked])");
    for (const a of anchors) {
      a.dataset.ghmhChecked = "1";
      if (a.dataset.ghmhBtn === "1") continue;
      if (a.closest("#ghmh-root")) continue;

      const info = classifyUrl(a.href, cfg.webMirrorHosts);
      if (info.kind !== "file") continue;
      if (!a.textContent || !a.textContent.trim()) continue;

      const btn = document.createElement("a");
      btn.className = "ghmh-dl-btn";
      btn.dataset.ghmhBtn = "1";
      btn.dataset.canonical = info.canonicalUrl;
      btn.href = buildFileProxyUrl(info.canonicalUrl, cfg.activeFileProxy);
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      btn.textContent = "⚡ 加速下载";
      btn.title = `通过 ${getHostOf(cfg.activeFileProxy)} 加速下载`;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const latestCfg = getConfig();
        btn.href = buildFileProxyUrl(btn.dataset.canonical, latestCfg.activeFileProxy);
        showToast(`⚡ 加速下载：${getHostOf(latestCfg.activeFileProxy)}`);
      });

      a.insertAdjacentElement("afterend", btn);
    }
  }

  // =========================================================================
  // 8. Clean Floating Control Dock
  // =========================================================================

  let dockExpanded = false;
  let activeTab = "nodes"; // "nodes" | "tools" | "settings"
  let isTestingSpeed = false;
  let addingType = null; // null | "web" | "file"

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderPingBadge(url) {
    const res = speedCache.get(normalizeBaseUrl(url));
    if (!res) return `<span class="ghmh-ping idle">—</span>`;
    if (!res.ok) return `<span class="ghmh-ping fail">${escapeHtml(res.note)}</span>`;
    const cls = res.ms < 1200 ? "fast" : "mid";
    return `<span class="ghmh-ping ${cls}">${res.ms}ms</span>`;
  }

  function navigateToMirror(mirror) {
    const canonical = getCurrentCanonicalUrl();
    setActiveWebMirror(mirror.url);
    if (!canonical) {
      showToast(`🌐 默认网页镜像已设为：${mirror.name}`);
      renderDock(true);
      return;
    }
    const target = buildWebMirrorUrl(canonical, mirror.url, mirror);
    if (target) {
      location.assign(target);
    }
  }

  function goToOriginGitHub() {
    const canonical = getCurrentCanonicalUrl() || "https://github.com/";
    try {
      const u = new URL(canonical);
      u.hash = "no_mirror";
      location.assign(u.href);
    } catch {
      location.assign("https://github.com/#no_mirror");
    }
  }

  async function runSpeedTest() {
    if (isTestingSpeed) return;
    isTestingSpeed = true;
    renderDock(true);

    const cfg = getConfig();
    await Promise.all([
      ...cfg.webMirrors.map((m) => probeSingleNode("web", m)),
      ...cfg.fileProxies.map((p) => probeSingleNode("file", p)),
    ]);

    isTestingSpeed = false;
    renderDock(true);
    showToast("✅ 全部节点测速完成");
  }

  function applyFastestNodes() {
    const cfg = getConfig();
    const okWeb = cfg.webMirrors
      .map((m) => ({ node: m, res: speedCache.get(normalizeBaseUrl(m.url)) }))
      .filter((x) => x.res?.ok)
      .sort((a, b) => a.res.ms - b.res.ms);

    const okFile = cfg.fileProxies
      .map((p) => ({ node: p, res: speedCache.get(normalizeBaseUrl(p.url)) }))
      .filter((x) => x.res?.ok)
      .sort((a, b) => a.res.ms - b.res.ms);

    const picked = [];
    if (okWeb.length) {
      setActiveWebMirror(okWeb[0].node.url);
      picked.push(`🌐 ${okWeb[0].node.name}`);
    }
    if (okFile.length) {
      setActiveFileProxy(okFile[0].node.url);
      picked.push(`⬇️ ${okFile[0].node.name}`);
    }

    if (picked.length) {
      showToast(`🎯 已选最快：${picked.join(" · ")}`);
      renderDock(true);
    } else {
      showToast("⚠️ 暂无可用节点，请添加自定义镜像");
    }
  }

  function renderDock(forceMount = false) {
    const cfg = getConfig();
    if (!forceMount && !dockExpanded && (!cfg.showFloatingDock || (!isOnGitHub && !isOnMirror))) {
      const existing = document.getElementById("ghmh-root");
      if (existing) existing.remove();
      return;
    }
    if (!document.body) return;
    ensureStyles();

    let root = document.getElementById("ghmh-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "ghmh-root";
      document.body.appendChild(root);
    }

    if (!dockExpanded) {
      const dotCls = isOnGitHub ? "ghmh-dot origin" : "ghmh-dot";
      const label = isOnMirror ? currentHost : "GitFerry";
      root.innerHTML = `
        <button class="ghmh-fab" id="ghmh-open-btn" type="button" title="打开 GitHub 渡口 (GitFerry)">
          <span class="${dotCls}"></span>
          <span>🚀 ${escapeHtml(label)}</span>
        </button>
      `;
      root.querySelector("#ghmh-open-btn").addEventListener("click", () => {
        dockExpanded = true;
        GM_setValue(DOCK_OPEN_KEY, true);
        renderDock(true);
      });
      return;
    }

    const repo = isOnGitHub || isOnMirror ? extractRepoInfo(location.pathname) : null;
    const statusText = isOnMirror ? "镜像中" : isOnGitHub ? "原站" : "全局";
    let bodyHtml = "";

    if (activeTab === "nodes") {
      const hasAnySpeed = speedCache.size > 0;
      const allWebFailed =
        hasAnySpeed &&
        cfg.webMirrors.every((m) => {
          const r = speedCache.get(normalizeBaseUrl(m.url));
          return r && !r.ok;
        });

      const webItems = cfg.webMirrors
        .map((m) => {
          const norm = normalizeBaseUrl(m.url);
          const isActive = norm === cfg.activeWebMirror || getHostOf(m.url) === currentHost;
          return `
            <div class="ghmh-item ${isActive ? "active" : ""}" data-web-mirror="${escapeHtml(m.url)}">
              <span class="ghmh-radio"></span>
              <div class="ghmh-item-info">
                <div class="ghmh-item-name">${escapeHtml(m.name)}</div>
                <div class="ghmh-item-host">${escapeHtml(getHostOf(m.url))}</div>
              </div>
              ${renderPingBadge(m.url)}
              ${m.custom ? `<button class="ghmh-del" data-del-web="${escapeHtml(m.url)}" title="删除">×</button>` : ""}
            </div>
          `;
        })
        .join("");

      const fileItems = cfg.fileProxies
        .map((p) => {
          const isActive = normalizeBaseUrl(p.url) === cfg.activeFileProxy;
          return `
            <div class="ghmh-item ${isActive ? "active" : ""}" data-file-proxy="${escapeHtml(p.url)}">
              <span class="ghmh-radio"></span>
              <div class="ghmh-item-info">
                <div class="ghmh-item-name">${escapeHtml(p.name)}</div>
                <div class="ghmh-item-host">${escapeHtml(getHostOf(p.url))}</div>
              </div>
              ${renderPingBadge(p.url)}
              ${p.custom ? `<button class="ghmh-del" data-del-file="${escapeHtml(p.url)}" title="删除">×</button>` : ""}
            </div>
          `;
        })
        .join("");

      const addInputHtml =
        addingType === "web" || addingType === "file"
          ? `<div class="ghmh-add-row">
               <input class="ghmh-input" id="ghmh-add-input" placeholder="${
                 addingType === "web" ? "输入网页镜像，如 https://gh.example.com" : "输入加速前缀，如 https://proxy.example.com"
               }" />
               <button class="ghmh-btn primary" id="ghmh-add-confirm">添加</button>
             </div>`
          : "";

      bodyHtml = `
        <div class="ghmh-toolbar">
          <button class="ghmh-btn primary" style="flex:1" id="ghmh-speed-btn" ${isTestingSpeed ? "disabled" : ""}>
            ${isTestingSpeed ? "⏳ 测速中..." : "⚡ 一键测速"}
          </button>
          ${hasAnySpeed ? '<button class="ghmh-btn" id="ghmh-pick-fastest">🎯 选最快</button>' : ""}
          ${isOnMirror ? '<button class="ghmh-btn" id="ghmh-go-origin">🏠 回原站</button>' : ""}
        </div>

        <div class="ghmh-sec-head">
          <span class="ghmh-sec-title">🌐 网页镜像（原生界面 · ${cfg.webMirrors.length}）</span>
          <button class="ghmh-link-btn" id="ghmh-toggle-add-web">${addingType === "web" ? "取消" : "+ 添加"}</button>
        </div>
        ${addingType === "web" ? addInputHtml : ""}
        <div class="ghmh-list">${webItems}</div>
        ${
          allWebFailed
            ? `<div class="ghmh-hint">💡 当前内置公益网页镜像均不可达，可点上方「+ 添加」填入自建或最新镜像；下方下载 / Clone 节点可继续加速。</div>`
            : ""
        }

        <div class="ghmh-sec-head">
          <span class="ghmh-sec-title">⬇️ 下载 / Raw / Clone 加速（${cfg.fileProxies.length}）</span>
          <button class="ghmh-link-btn" id="ghmh-toggle-add-file">${addingType === "file" ? "取消" : "+ 添加"}</button>
        </div>
        ${addingType === "file" ? addInputHtml : ""}
        <div class="ghmh-list">${fileItems}</div>
      `;
    } else if (activeTab === "tools") {
      const repoBlock = repo
        ? (() => {
            const cloneUrl = buildFileProxyUrl(
              `https://github.com/${repo.owner}/${repo.repo}.git`,
              cfg.activeFileProxy
            );
            const fullCmd = `git clone ${cloneUrl}`;
            const shallowCmd = `git clone --depth=1 ${cloneUrl}`;
            const zipBranch = repo.branch || "HEAD";
            const zipUrl = buildFileProxyUrl(
              `https://github.com/${repo.owner}/${repo.repo}/archive/${zipBranch}.zip`,
              cfg.activeFileProxy
            );
            return `
              <div class="ghmh-sec-head">
                <span class="ghmh-sec-title">📦 当前仓库 · ${escapeHtml(repo.owner)}/${escapeHtml(repo.repo)}</span>
              </div>
              <div class="ghmh-code">
                <code title="${escapeHtml(fullCmd)}">${escapeHtml(fullCmd)}</code>
                <button class="ghmh-btn subtle" data-copy="${escapeHtml(fullCmd)}">📋 复制</button>
              </div>
              <div class="ghmh-code">
                <code title="${escapeHtml(shallowCmd)}">${escapeHtml(shallowCmd)}</code>
                <button class="ghmh-btn subtle" data-copy="${escapeHtml(shallowCmd)}">⚡ 浅克隆</button>
              </div>
              <a class="ghmh-btn primary" href="${escapeHtml(zipUrl)}" target="_blank" rel="noopener">⬇️ 下载源码 ZIP</a>
            `;
          })()
        : `<div class="ghmh-foot" style="text-align:left">📦 进入任意 GitHub 仓库页后，这里会显示一键加速 Clone 与源码 ZIP 下载。</div>`;

      bodyHtml = `
        <div class="ghmh-sec-head">
          <span class="ghmh-sec-title">🔗 任意 GitHub 链接加速打开</span>
        </div>
        <div class="ghmh-add-row">
          <input class="ghmh-input" id="ghmh-url-input" placeholder="粘贴 github.com 或 raw 链接..." />
          <button class="ghmh-btn primary" id="ghmh-url-go">🚀 打开</button>
        </div>
        ${repoBlock}
      `;
    } else {
      const renderToggle = (id, label, checked) => `
        <label class="ghmh-toggle-row" for="${id}">
          <span class="ghmh-toggle-label">${label}</span>
          <span class="ghmh-switch">
            <input type="checkbox" id="${id}" ${checked ? "checked" : ""} />
            <span class="ghmh-slider"></span>
          </span>
        </label>
      `;

      bodyHtml = `
        <div class="ghmh-list">
          ${renderToggle("ghmh-sw-intercept", "🔗 全站点击 GitHub 链接自动跳镜像", cfg.autoInterceptLinks)}
          ${renderToggle("ghmh-sw-redirect", "🚀 访问 GitHub 原站自动跳镜像", cfg.autoRedirectGitHub)}
          ${renderToggle("ghmh-sw-raw", "⬇️ Raw / Release / Archive 自动加速", cfg.autoAccelerateRaw)}
          ${renderToggle("ghmh-sw-btn", "⚡ 页面内注入「加速下载」按钮", cfg.injectDownloadButtons)}
          ${renderToggle("ghmh-sw-dock", "💬 显示右下角悬浮按钮", cfg.showFloatingDock)}
        </div>
        <div class="ghmh-foot">💡 提示：按住 Alt / Option 点击链接可临时直连原站</div>
      `;
    }

    root.innerHTML = `
      <div class="ghmh-panel">
        <div class="ghmh-header">
          <div class="ghmh-title">
            <span>🚀 GitHub 渡口</span>
            <span class="ghmh-pill">${statusText}</span>
          </div>
          <button class="ghmh-icon-btn" id="ghmh-close-btn" type="button" title="收起">×</button>
        </div>
        <div class="ghmh-seg-wrap">
          <div class="ghmh-seg">
            <button class="ghmh-seg-btn ${activeTab === "nodes" ? "active" : ""}" data-tab="nodes">🌐 节点</button>
            <button class="ghmh-seg-btn ${activeTab === "tools" ? "active" : ""}" data-tab="tools">⚡ 加速工具</button>
            <button class="ghmh-seg-btn ${activeTab === "settings" ? "active" : ""}" data-tab="settings">⚙️ 设置</button>
          </div>
        </div>
        <div class="ghmh-body">
          ${bodyHtml}
          ${isOnMirror ? '<div class="ghmh-foot">🔒 第三方镜像仅供公开浏览，切勿登录账号或输入 Token</div>' : ""}
        </div>
      </div>
    `;

    root.querySelector("#ghmh-close-btn").addEventListener("click", () => {
      dockExpanded = false;
      addingType = null;
      GM_setValue(DOCK_OPEN_KEY, false);
      renderDock();
    });

    for (const tabBtn of root.querySelectorAll(".ghmh-seg-btn")) {
      tabBtn.addEventListener("click", () => {
        activeTab = tabBtn.dataset.tab;
        addingType = null;
        renderDock(true);
      });
    }

    root.querySelector("#ghmh-speed-btn")?.addEventListener("click", runSpeedTest);
    root.querySelector("#ghmh-pick-fastest")?.addEventListener("click", applyFastestNodes);
    root.querySelector("#ghmh-go-origin")?.addEventListener("click", goToOriginGitHub);

    root.querySelector("#ghmh-toggle-add-web")?.addEventListener("click", () => {
      addingType = addingType === "web" ? null : "web";
      renderDock(true);
      root.querySelector("#ghmh-add-input")?.focus();
    });
    root.querySelector("#ghmh-toggle-add-file")?.addEventListener("click", () => {
      addingType = addingType === "file" ? null : "file";
      renderDock(true);
      root.querySelector("#ghmh-add-input")?.focus();
    });

    const submitAdd = () => {
      const val = normalizeBaseUrl(root.querySelector("#ghmh-add-input")?.value || "");
      if (!val) {
        showToast("⚠️ 请输入有效的域名或网址");
        return;
      }
      const type = addingType;
      addExtraMirror(type, val);
      if (type === "web") {
        setActiveWebMirror(val);
        showToast(`✅ 已添加网页镜像：${getHostOf(val)}`);
      } else {
        setActiveFileProxy(val);
        showToast(`✅ 已添加加速节点：${getHostOf(val)}`);
      }
      addingType = null;
      renderDock(true);
    };
    root.querySelector("#ghmh-add-confirm")?.addEventListener("click", submitAdd);
    root.querySelector("#ghmh-add-input")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitAdd();
    });

    for (const delBtn of root.querySelectorAll("[data-del-web]")) {
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeExtraMirror("web", delBtn.dataset.delWeb);
        showToast("🗑️ 已删除自定义网页镜像");
        renderDock(true);
      });
    }
    for (const delBtn of root.querySelectorAll("[data-del-file]")) {
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeExtraMirror("file", delBtn.dataset.delFile);
        showToast("🗑️ 已删除自定义加速节点");
        renderDock(true);
      });
    }

    for (const item of root.querySelectorAll("[data-web-mirror]")) {
      item.addEventListener("click", () => {
        const url = item.dataset.webMirror;
        const mirror = cfg.webMirrors.find((m) => normalizeBaseUrl(m.url) === normalizeBaseUrl(url));
        if (mirror) navigateToMirror(mirror);
      });
    }

    for (const item of root.querySelectorAll("[data-file-proxy]")) {
      item.addEventListener("click", () => {
        const url = item.dataset.fileProxy;
        setActiveFileProxy(url);
        showToast(`⚡ 加速节点已切换：${getHostOf(url)}`);
        renderDock(true);
      });
    }

    for (const btn of root.querySelectorAll("[data-copy]")) {
      btn.addEventListener("click", () => {
        GM_setClipboard(btn.dataset.copy, "text");
        showToast("📋 已复制到剪贴板");
      });
    }

    const openConvertedUrl = () => {
      const val = (root.querySelector("#ghmh-url-input")?.value || "").trim();
      if (!val) return;
      const latest = getConfig();
      const info = classifyUrl(val, latest.webMirrorHosts);
      if (info.kind === "file") {
        GM_openInTab(buildFileProxyUrl(info.canonicalUrl, latest.activeFileProxy), { active: true });
      } else if (info.kind === "web") {
        const target = buildWebMirrorUrl(info.canonicalUrl, latest.activeWebMirror, latest.activeWebMirrorMeta);
        GM_openInTab(target || buildFileProxyUrl(info.canonicalUrl, latest.activeFileProxy), { active: true });
      } else {
        showToast("⚠️ 请输入有效的 GitHub 或 raw 链接");
      }
    };
    root.querySelector("#ghmh-url-go")?.addEventListener("click", openConvertedUrl);
    root.querySelector("#ghmh-url-input")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") openConvertedUrl();
    });

    const bindSwitch = (id, key) => {
      root.querySelector(id)?.addEventListener("change", (e) => {
        GM_setValue(key, Boolean(e.target.checked));
        refreshMenus();
        showToast("✅ 设置已保存");
      });
    };
    bindSwitch("#ghmh-sw-intercept", CFG_KEYS.autoInterceptLinks);
    bindSwitch("#ghmh-sw-redirect", CFG_KEYS.autoRedirectGitHub);
    bindSwitch("#ghmh-sw-raw", CFG_KEYS.autoAccelerateRaw);
    bindSwitch("#ghmh-sw-btn", CFG_KEYS.injectDownloadButtons);
    bindSwitch("#ghmh-sw-dock", CFG_KEYS.showFloatingDock);
  }

  // =========================================================================
  // 9. Universal Popup Menu Commands
  // =========================================================================

  let menuIds = [];

  function refreshMenus() {
    if (typeof GM_unregisterMenuCommand === "function") {
      for (const id of menuIds) {
        try {
          GM_unregisterMenuCommand(id);
        } catch {
          // ignore
        }
      }
    }
    menuIds = [];

    const cfg = getConfig();

    menuIds.push(
      GM_registerMenuCommand("🚀 打开镜像控制面板 / 测速", () => {
        dockExpanded = true;
        activeTab = "nodes";
        renderDock(true);
      })
    );

    menuIds.push(
      GM_registerMenuCommand(
        `${cfg.autoInterceptLinks ? "✅" : "⬜"} 全站链接自动跳镜像`,
        () => {
          GM_setValue(CFG_KEYS.autoInterceptLinks, !cfg.autoInterceptLinks);
          refreshMenus();
          showToast(`🔗 全站链接自动跳镜像已${!cfg.autoInterceptLinks ? "开启" : "关闭"}`);
        }
      )
    );

    menuIds.push(
      GM_registerMenuCommand(
        `${cfg.autoRedirectGitHub ? "✅" : "⬜"} 访问原站自动跳镜像`,
        () => {
          GM_setValue(CFG_KEYS.autoRedirectGitHub, !cfg.autoRedirectGitHub);
          refreshMenus();
          showToast(`🚀 访问原站自动跳镜像已${!cfg.autoRedirectGitHub ? "开启" : "关闭"}`);
        }
      )
    );

    menuIds.push(
      GM_registerMenuCommand("⚙️ 打开设置面板", () => {
        dockExpanded = true;
        activeTab = "settings";
        renderDock(true);
      })
    );
  }

  refreshMenus();

  // =========================================================================
  // 10. Boot DOM Features & Universal SPA Route Watcher
  // =========================================================================

  function bootDom() {
    if (!isOnGitHub && !isOnMirror) return;

    dockExpanded = Boolean(GM_getValue(DOCK_OPEN_KEY, false));
    renderDock();
    injectDownloadButtons();

    let lastHref = location.href;
    const onRouteChange = () => {
      if (location.href === lastHref) return;
      lastHref = location.href;
      renderDock();
      injectDownloadButtons();
    };

    window.addEventListener("popstate", onRouteChange);
    window.addEventListener("hashchange", onRouteChange);

    let debounceTimer = null;
    const observer = new MutationObserver(() => {
      if (location.href !== lastHref) {
        onRouteChange();
      }
      if (debounceTimer) return;
      debounceTimer = setTimeout(() => {
        debounceTimer = null;
        injectDownloadButtons();
      }, 350);
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootDom, { once: true });
  } else {
    bootDom();
  }
})();
