---
title: 博客说明
date: 2026-11-09
tags:
  - VitePress
  - 博客
description: 简短描述这篇文章讲了什么，用于摘要、SEO
---
# 博客说明
## 更换新环境如何部署
### 本地环境
检查软件版本 
git: git version 2.45.2.windows.1 

```bash
git --version
```
Node.js: v20.10.0
```bash
node -v
```
### 拉取远程仓库到本地
```bash
# SSH（配置好ssh之后用这个）
git clone git@github.com:MelonPeasant/blog.git

cd blog
```
### 安装依赖
不要手动复制旧电脑的 `node_modules`，直接重新安装
```bash
npm install
``` 
安装完成后，测试本地能否正常运行：
```bash
npm run dev
``` 
## 更新博客（写文章 / 修改页面）
- 新增文章：在 `docs/posts/` 新建 `xxx.md`
- 修改配置：`docs/.vitepress/config.js`
- 修改首页：`docs/index.md`     
- 写完继续本地预览，确认排版、链接都正常。 
## 提交并推送到 GitHub
```bash
# 查看改动了哪些文件
git status

# 添加所有改动
git add .

# 填写提交信息，说明这次更新内容
git commit -m "新增文章：xxxx"

# 推送到远程main分支
git push origin main
```
推送成功后，自动触发 GitHub Actions，等待构建部署完成，网站就更新了。
## 再次更新博客
以后再写文章，只需要： 
```bash
# 先拉取远程最新代码（多人协作很重要；单人写博客建议也养成习惯，防止本地和远程不一致）
git pull origin main

# 写文章、修改文件
npm run dev # 预览

git add .
git commit -m "更新内容"
git push origin main
```
## 注意事项  
0. 文章的图片、附件统一管理，建议放在仓库内 `docs/public/` 目录，这样换电脑克隆后图片也不会丢失。 
1. **不要上传 node_modules**
仓库里已经有 `.gitignore`，里面写了 `node_modules/`，正常情况下不会提交。
2. 提示权限拒绝：
   - HTTPS 方式：token 过期了，重新生成 PAT 
   - SSH 方式：检查公钥有没有加到 GitHub，或者本地 ssh-agent 没加载密钥 
3. 拉下来本地运行报错： 
   - node 版本差异导致依赖异常：删除 `package-lock.json` + `node_modules`，再 `npm install`
4. 多设备轮流写博客：**每次写之前先 git pull**，避免冲突！
5. 仓库里的 `.github/workflows/deploy.yml` 会跟着仓库一起拉下来，不用重新配置 Actions


