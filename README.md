# YSP-Server

## 运行
### 本地部署

在控制台依次输入以下指令：

```bash
yarn install
yarn docs:build
```

打开`docs/.vitepress/dist/`即可看到构建好的文件。

### 在 Cloudflare Page 部署

在`变量`一栏增加以下内容：

```bash
NODE_VERSION = 20.11.1
NPM_VERSION = 10.5.0
YARN_VERSION = 1.22.22
```

构建区域需要做以下调整
- 构建命令设置为 `yarn docs:build`
- 输出目录设置为 `docs/.vitepress/dist/`

点击`部署`即可。

### 在 GitHub Page 部署

> [!WARNING]  
> 如果不打算在 GitHub Page 部署，请忽视此部分，否则 Actions 会频繁报错

1. 参照注释修改`.github/workflows`目录中的`deploy.yml.demo` 文件。

2. 将`deploy.yml.demo`重命名为`deploy.yml`。

3. 在存储库设置中的`Pages`菜单项下，选择`Build and deployment` > `Source` > `GitHub Actions`。

4. 将更改推送到`你所设定的分支`并等待 GitHub Action 工作流完成。

你应该看到站点部署到`https://<username>.github.io/[repository]/`或`https://<custom-domain>/`，这取决于你的设置。你的站点将在`你所设定的分支`出现新的提交时自动部署。
