# YSP-Server

**Ynagisa & Skydome & PigeONCity*，让玩家感受人文主义现代化城市之美

这是 烟渚 & 天穹 & 鸽城 的官方网站，采用[`vitepress`](https://vitepress.dev/)作为驱动。

## 运行
### 本地部署

> [!IMPORTANT]  
> 本地部署指的是在本地构建静态文件，不包含如何部署到 Web 服务，请善用搜索引擎解决部署到 Web 服务的问题

前置要求：

- Node.js ＞＝ 18 

在保证以上事项完成后：

1. `fork`本仓库。
2. 在控制台依次输入以下指令：

```bash
yarn install
yarn docs:build
```

打开`docs/.vitepress/dist/`即可看到构建好的文件。

如需在本地预览，只需要将以上步骤中的`yarn docs:build`替换为`yarn docs:dev`即可，打开`http://localhost:5173/`即可查看。

### 在 Cloudflare Page 部署

1. `fork`本仓库。
2. 打开 Cloudflare 控制台，在`Workers 和 Pages`选择`创建应用程序` > `Page` > `连接到 Git`，选择你刚刚 fork 的仓库。
3. 在`变量`一栏增加以下内容：

```bash
NODE_VERSION = 20.11.1
NPM_VERSION = 10.5.0
YARN_VERSION = 1.22.22
```

构建区域需要做以下调整
- 构建命令设置为 `yarn docs:build`
- 输出目录设置为 `docs/.vitepress/dist/`

4. 点击`部署`即可。

### 在 Netlify / Vercel 部署

1. `fork`本仓库
2. 打开 Netlify / Vercel 控制台，选择`Add New` > `Project`，选择你刚刚 fork 的仓库。
3. 直接使用预设好的`Vitepress`，点击`Deploy`。

### 在 GitHub Page 部署

> [!WARNING]  
> 如果不打算在 GitHub Page 部署，请忽视此部分，否则 Actions 会频繁报错

1. 参照注释修改`.github/workflows`目录中的`deploy.yml.demo` 文件。

2. 将`deploy.yml.demo`重命名为`deploy.yml`。

3. 在存储库设置中的`Pages`菜单项下，选择`Build and deployment` > `Source` > `GitHub Actions`。

4. 将更改推送到`你所设定的分支`并等待 GitHub Action 工作流完成。

你应该看到站点部署到`https://<username>.github.io/[repository]/`或`https://<custom-domain>/`，这取决于你的设置。你的站点将在`你所设定的分支`出现新的提交时自动部署。
