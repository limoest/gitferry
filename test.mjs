import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const core = require("./github-mirror-helper.user.js");

const mirrors = new Set([
  "bgithub.xyz",
  "kkgithub.com",
  "githubfast.com",
  "git.bdnb.cn",
  "gitclone.com",
  "hub.gitmirror.com",
]);

// 1. normalizeBaseUrl
assert.equal(core.normalizeBaseUrl("bgithub.xyz/"), "https://bgithub.xyz");
assert.equal(core.normalizeBaseUrl("https://gh-proxy.org///"), "https://gh-proxy.org");
assert.equal(core.normalizeBaseUrl("  "), "");
assert.equal(core.normalizeBaseUrl("https://example.com/gh-proxy/"), "https://example.com/gh-proxy");

// 2. isSensitivePath
assert.equal(core.isSensitivePath("/login"), true);
assert.equal(core.isSensitivePath("/login/oauth/authorize"), true);
assert.equal(core.isSensitivePath("/settings/tokens"), true);
assert.equal(core.isSensitivePath("/sessions/two-factor"), true);
assert.equal(core.isSensitivePath("/torvalds/linux"), false);
assert.equal(core.isSensitivePath("/login-demo/repo"), false);

// 3. isFileDownloadPath
assert.equal(core.isFileDownloadPath("/a/b/releases/download/v1.0.0/app.zip", ""), true);
assert.equal(core.isFileDownloadPath("/a/b/archive/refs/heads/main.zip", ""), true);
assert.equal(core.isFileDownloadPath("/a/b/raw/main/README.md", ""), true);
assert.equal(core.isFileDownloadPath("/a/b/blob/main/README.md", "?raw=true"), true);
assert.equal(core.isFileDownloadPath("/a/b/blob/main/README.md", ""), false);
assert.equal(core.isFileDownloadPath("/a/b/releases", ""), false);

// 4. extractRepoInfo (including gitclone.com/github.com/owner/repo)
assert.deepEqual(core.extractRepoInfo("/torvalds/linux"), { owner: "torvalds", repo: "linux", branch: "" });
assert.deepEqual(core.extractRepoInfo("/github.com/torvalds/linux/blob/master/README"), {
  owner: "torvalds",
  repo: "linux",
  branch: "master",
});
assert.equal(core.extractRepoInfo("/explore/topics"), null);
assert.equal(core.extractRepoInfo("/settings/profile"), null);

// 5. unwrapPortalUrl
assert.equal(
  core.unwrapPortalUrl("https://link.zhihu.com/?target=https%3A%2F%2Fgithub.com%2Ftorvalds%2Flinux"),
  "https://github.com/torvalds/linux"
);
assert.equal(
  core.unwrapPortalUrl("https://link.juejin.cn/?target=https%3A%2F%2Fraw.githubusercontent.com%2Fa%2Fb%2Fmain%2Fc.js"),
  "https://raw.githubusercontent.com/a/b/main/c.js"
);
assert.equal(
  core.unwrapPortalUrl("https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fa%2Fb"),
  "https://github.com/a/b"
);

// 6. classifyUrl
const webInfo = core.classifyUrl("https://link.csdn.net/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fcore", mirrors);
assert.equal(webInfo.kind, "web");
assert.equal(webInfo.canonicalUrl, "https://github.com/vuejs/core");
assert.deepEqual(webInfo.repo, { owner: "vuejs", repo: "core", branch: "" });

assert.equal(core.classifyUrl("https://github.com/login?return_to=foo", mirrors).kind, "auth");
assert.equal(core.classifyUrl("https://raw.githubusercontent.com/torvalds/linux/master/README", mirrors).kind, "file");

const mirrorReleaseInfo = core.classifyUrl("https://gitclone.com/github.com/a/b/releases/download/v1.0/a.zip", mirrors);
assert.equal(mirrorReleaseInfo.kind, "file");
assert.equal(mirrorReleaseInfo.canonicalUrl, "https://github.com/a/b/releases/download/v1.0/a.zip");

// 7. buildWebMirrorUrl (replace / gitclone / prefix)
assert.equal(
  core.buildWebMirrorUrl("https://github.com/torvalds/linux/issues?q=is%3Aopen#no_mirror", "https://bgithub.xyz", {
    mode: "replace",
  }),
  "https://bgithub.xyz/torvalds/linux/issues?q=is%3Aopen"
);
assert.equal(
  core.buildWebMirrorUrl("https://github.com/torvalds/linux?no_mirror=1", "https://gitclone.com", {
    mode: "gitclone",
  }),
  "https://gitclone.com/github.com/torvalds/linux"
);
assert.equal(
  core.buildWebMirrorUrl("https://github.com/torvalds/linux", "https://hub.gitmirror.com", {
    mode: "prefix",
  }),
  "https://hub.gitmirror.com/https://github.com/torvalds/linux"
);

// 8. buildFileProxyUrl
assert.equal(
  core.buildFileProxyUrl("https://github.com/a/b/releases/download/v1/f.zip", "https://gh-proxy.org/"),
  "https://gh-proxy.org/https://github.com/a/b/releases/download/v1/f.zip"
);
assert.equal(
  core.buildFileProxyUrl("https://gh-proxy.org/https://github.com/a/b.git", "https://gh-proxy.org"),
  "https://gh-proxy.org/https://github.com/a/b.git"
);
assert.equal(
  core.buildFileProxyUrl("https://raw.githubusercontent.com/torvalds/linux/master/README", "https://fastly.jsdelivr.net"),
  "https://fastly.jsdelivr.net/gh/torvalds/linux@master/README"
);

// 9. Verify mirror pool sizes & no github1s/deepwiki
assert.ok(core.BUILTIN_WEB_MIRRORS.length >= 6);
assert.ok(core.BUILTIN_FILE_PROXIES.length >= 15);
assert.equal(core.BUILTIN_WEB_MIRRORS.some((m) => m.url.includes("github1s") || m.url.includes("deepwiki")), false);

console.log("ALL UNIT TESTS PASSED");
