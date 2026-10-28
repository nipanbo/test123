# 山野 SHANYE 餐厅首页

使用 Vue 3、TypeScript 和 Vite 构建的现代川菜餐厅品牌首页。

## 环境要求

| 软件 | 是否必需 | 推荐版本 | 用途 |
| --- | --- | --- | --- |
| Node.js | 必需 | 22 LTS 或 24 | 运行 Vite、编译 TypeScript 和构建项目 |
| npm | 必需 | 随 Node.js 安装 | 安装依赖和执行项目脚本 |
| Git | 可选 | 2.40 或更高 | 克隆仓库、同步更新和提交代码 |
| Python | 可选 | 3.10 或更高 | 使用 Python 自带的 HTTP 服务预览静态文件 |
| 现代浏览器 | 必需 | Chrome、Edge、Firefox、Safari 新版本 | 访问和调试页面 |

> Python 不是本项目的运行依赖。使用 `npm run dev` 或 `npm run preview` 即可完成开发和生产预览。

## 安装 Node.js 和 npm

本项目使用 Vite 7，建议安装 Node.js 22 LTS 或 24。安装 Node.js 时会自动安装 npm。

### macOS

方法一：从 [Node.js 官网](https://nodejs.org/) 下载并安装 LTS 版本。

方法二：使用 Homebrew 安装：

```bash
brew install node
```

如果尚未安装 Homebrew，可按照 [Homebrew 官网](https://brew.sh/) 的说明安装。

### Windows

方法一：从 [Node.js 官网](https://nodejs.org/) 下载 Windows 安装程序，安装时保持 `Add to PATH` 选项开启。

方法二：使用 Windows 包管理器：

```powershell
winget install OpenJS.NodeJS.LTS
```

安装完成后重新打开终端。

### Linux

以下命令适用于 Ubuntu / Debian：

```bash
sudo apt update
sudo apt install -y curl git
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

其他 Linux 发行版可以使用对应的包管理器，或从 [Node.js 官网](https://nodejs.org/) 下载安装。

### 检查 Node.js 安装

```bash
node --version
npm --version
```

`node --version` 应显示 `v22` 或更高版本。如果终端提示找不到命令，请重新打开终端；Windows 用户还应确认 Node.js 已加入系统 `PATH`。

## 安装 Git（可选）

Git 只在克隆仓库或提交代码时需要。

### macOS

```bash
xcode-select --install
```

也可以使用 Homebrew：

```bash
brew install git
```

### Windows

从 [Git 官网](https://git-scm.com/download/win) 下载安装程序，或使用：

```powershell
winget install Git.Git
```

### Linux

```bash
sudo apt install -y git
```

检查安装：

```bash
git --version
```

## 安装项目依赖

进入项目目录后执行：

```bash
npm install
```

`npm install` 会读取 `package.json`，并安装以下项目依赖：

- Vue 3：页面组件与响应式状态
- Vite：开发服务器和生产构建
- TypeScript：类型检查
- `@vitejs/plugin-vue`：Vite 的 Vue 单文件组件支持
- `vue-tsc`：Vue 文件类型检查

如果需要严格按照 `package-lock.json` 中锁定的版本安装，可以使用：

```bash
npm ci
```

依赖会安装在项目内的 `node_modules/` 目录中，不需要全局安装 Vue 或 Vite。

## 启动开发环境

```bash
npm run dev
```

浏览器访问：

```text
http://127.0.0.1:5173
```

如果端口已被占用，可以临时指定其他端口：

```bash
npm run dev -- --port 5174
```

修改 `src/` 下的文件后，页面会自动刷新。

## 类型检查与构建

执行 TypeScript 类型检查：

```bash
npm run typecheck
```

生成生产版本：

```bash
npm run build
```

构建命令会先执行类型检查，再将生产文件输出到 `dist/`。

预览生产构建：

```bash
npm run preview
```

默认访问地址：

```text
http://127.0.0.1:4173
```

## 使用 Python 预览（可选）

如果不想使用 `npm run preview`，可以在 Python 3 已安装的情况下直接启动静态服务器。

### 安装 Python

- macOS：从 [Python 官网](https://www.python.org/downloads/) 下载，或执行 `brew install python`
- Windows：从 [Python 官网](https://www.python.org/downloads/windows/) 下载，安装时勾选 `Add python.exe to PATH`
- Ubuntu / Debian：执行 `sudo apt install -y python3`

安装后检查版本：

```bash
python3 --version
```

Windows 上通常也可以使用 `python --version`。

### 预览生产构建

先执行 `npm run build`，再运行：

```bash
python3 -m http.server 8000 --directory dist
```

访问 `http://127.0.0.1:8000`。

### 预览旧版静态页面

```bash
python3 -m http.server 8080 --directory legacy
```

访问 `http://127.0.0.1:8080`。也可以直接双击打开 `legacy/index.html`。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm install` | 安装项目依赖 |
| `npm ci` | 按锁文件重新安装依赖 |
| `npm run dev` | 启动开发服务器 |
| `npm run typecheck` | 检查 TypeScript 和 Vue 类型 |
| `npm run build` | 生成生产文件到 `dist/` |
| `npm run preview` | 预览生产构建 |

## 项目结构

```text
.
├── public/assets/       # Vue 页面使用的本地图片
├── src/
│   ├── components/      # 页面组件
│   ├── data/            # 菜单、导航和营业信息
│   ├── directives/      # 滚动显现指令
│   ├── styles/          # 全局样式
│   └── types/           # TypeScript 类型
├── legacy/              # 迁移前的静态版页面
├── index.html           # Vite 入口 HTML
├── package.json         # 依赖和命令
└── vite.config.ts       # Vite 配置
```

## 常见问题

### 提示 `node: command not found`

Node.js 尚未安装或没有加入系统 `PATH`。重新安装 Node.js，然后关闭并重新打开终端。

### 提示 `npm: command not found`

npm 通常随 Node.js 一起安装。请先确认 Node.js 安装成功，再检查 npm：

```bash
node --version
npm --version
```

### 依赖安装失败

确认网络可以访问 npm 软件源，并在项目根目录重新执行：

```bash
npm install
```

不要单独全局安装 Vue 或 Vite，本项目使用本地依赖。

### 端口被占用

使用其他端口启动：

```bash
npm run dev -- --port 5174
```

### Python 启动服务器后页面没有样式

确认预览目录是包含构建产物的 `dist/`，并且已经先执行过 `npm run build`。

## 说明

当前订座表单为前端交互演示，不会向服务器发送真实预订数据。接入真实预订系统时，应在 `src/components/ReservationSection.vue` 的提交逻辑中调用后端接口。
