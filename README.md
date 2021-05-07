
<h1 align="center">General backstage to go</h1>
<div align="center">
A powerful social customer relationship management solution as a web application. based on  <a href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" target="_blank">Ant Design of Vue</a>
</div>

<div align="center">

[![License](https://img.shields.io/npm/l/package.json.svg?style=flat)](https://github.com/vueComponent/ant-design-vue-pro/blob/master/LICENSE)
[![Release](https://img.shields.io/github/release/vueComponent/ant-design-vue-pro.svg?style=flat)](https://github.com/vueComponent/ant-design-vue-pro/releases/latest)
[![Travis branch](https://travis-ci.org/vueComponent/ant-design-vue-pro.svg?branch=master)](https://travis-ci.org/vueComponent/ant-design-vue-pro)

</div>

- 本地开发登陆:  
    username: admin  
    password: admin
- [组件说明文档](./src/components/README.md)
### Env and dependencies

- node
- eslint
- @vue/cli
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue
- [ant-design-vue/pro-layout](https://github.com/vueComponent/pro-layout)
- [axios](https://github.com/axios/axios)
- [lodash](https://github.com/lodash/lodash)
- [nprogress](https://github.com/rstacruz/nprogress)
- [vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll)

## Folders 
```
├── README.md                               ├── 说明文档
├── babel.config.js                         ├── babel配置
├── config/                                 ├── antd主题配置目录/
├── deploy/                                 ├── 编译配置目录/
├── package-lock.json                       ├── 依赖限制，由npm生成
├── package.json                            ├── 依赖配置，由npm生成
├── public/                                 ├── 打包模板目录/
├── src/                                    ├── 源码目录/
│   ├── App.vue                             │   ├── *项目主模板
│   ├── api/                                │   ├── 接口目录/
│   ├── assets/                             │   ├── 静态资源目录/
│   ├── components/                         │   ├── 组件目录/
│   ├── config/                             │   ├── 配置目录/
│   │   ├── defaultSettings.js              │   │   ├── Antd主题配置
│   │   ├── router.config.js                │   │   ├── 路由配置
│   │   └── theme.config.js                 │   │   └── 主题配置
│   ├── core/                               │   ├── 核心目录/
│   │   ├── bootstrap.js                    │   │   ├── bootstarp配置
│   │   ├── directives                      │   │   ├── vue指令目录/
│   │   └── lazy_use.js                     │   │   └── 组件引入配置
│   ├── icons.js                            │   ├── antd图标按需引入（暂未使用）
│   ├── layouts/                            │   ├── layouts目录/
│   ├── locales/                            │   ├── 国际化配置目录/
│   │   ├── index.js                        │   │   ├── 入口文件
│   │   └── lang/                           │   │   └── 语言目录/
│   ├── main.js                             │   ├── *项目主入口
│   ├── mock/                               │   ├── mock配置目录/（暂未使用）
│   │   ├── index.js                        │   │   ├── 入口文件
│   │   ├── services/                       │   │   ├── 分模块mock配置目录/
│   │   └── util.js                         │   │   └── mock公共方法库
│   ├── router/                             │   ├── vue-router配置目录/
│   ├── store/                              │   ├── vuex目录/
│   │   ├── modules/                        │   │  └── vuex组件目录/
│   ├── styles/                             │   ├── 样式目录/
│   ├── utils/                              │   ├── 方法库目录/
│   └── views/                              │   ├── *页面目录/
└── vue.config.js                           └── 项目全局配置
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
