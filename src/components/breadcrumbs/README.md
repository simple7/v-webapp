## BreadCrumbs使用手册
  > [查看源码](https://github.com/samturrell/vue-breadcrumbs)
  #### 1. 引入
  在`main.js`中引入组件并挂在Vue上
  ```
  import BreadCrumbs from './components/breadcrumbs/index';
  Vue.use(BreadCrumbs);
  ```
  #### 2. 配置
  在路由组件配置中做如下配置：
  ```
  {
  path: '/authInfo',
  name: 'authInfo',
  component: authInfo,
  meta: {
  breadcrumb: '认证信息'
  }
  }
  ```
  #### 3. 使用
  因为我们使用的 metronic UI框架，按照它的UI的规范，在需要使用的页面做如下配置：
  ```
<div class="page-content-wrapper">
  <div class="page-content">
    <div class="page-bar">
      <breadcrumbs></breadcrumbs>
    </div>
  </div>
</div>
  ```
