# 山野 SHANYE 餐厅首页

使用 Vue 3、TypeScript 和 Vite 构建的现代川菜餐厅品牌首页。

## 开发

安装依赖并启动开发服务器：

```bash
npm install
npm run dev
```

浏览器访问 `http://127.0.0.1:5173`。

## 构建

```bash
npm run typecheck
npm run build
npm run preview
```

生产文件输出到 `dist/`，预览地址为 `http://127.0.0.1:4173`。

## 项目结构

- `src/components/`：首屏、菜单、空间、订座、到店等 Vue 组件
- `src/data/site.ts`：菜单、导航、营业信息和订座选项
- `src/types/site.ts`：业务数据类型
- `src/styles/main.css`：全局视觉与响应式样式
- `public/assets/`：本地图片资源
- `legacy/`：迁移前可直接打开的静态版首页

页面包含全屏品牌首屏、移动端导航、菜单分类筛选、菜品收藏提示、滚动动效以及订座表单和确认弹窗。

当前订座表单为前端交互演示。接入真实预订系统时，应在 `ReservationSection.vue` 的提交逻辑中调用后端接口。
