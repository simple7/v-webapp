import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import projectDetail from '@/pages/projectDetail'
import authInfo from '@/pages/authInfo'
import checkInfo from '@/pages/checkInfo'
import projectDetailNew from '@/pages/projectDetailNew'
import Login from '@/pages/Login'
import loginNew from '@/pages/loginNew'
import log from '@/pages/log'
import setting from '@/pages/setting'
import systemControlNew from '@/pages/systemControlNew'
import systemControl from '@/pages/systemControl'
import projectList from '@/pages/projectList'
import Home from '@/pages/Home'
import Register from '@/pages/Register'
import enter from '@/pages/enter'
import Buttons from '@/pages/Buttons'
import test from '@/pages/test'
import TabDemo from '@/pages/TabDemo'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {breadcrumb: '首页'},
    redirect: {path: '/login'},
    children: [{
      path: '/admin/projectDetail',
      name: 'projectDetail',
      component: projectDetail,
      meta: {
        breadcrumb: '项目详情'
      }
    },
      {
        path: '/authInfo',
        name: 'authInfo',
        component: authInfo,
        meta: {
          breadcrumb: '认证信息'
        }
      },
      {
        path: '/checkInfo',
        name: 'checkInfo',
        component: checkInfo,
        meta: {
          breadcrumb: '企业认证'
        }
      },
      {
        path: '/settings/log',
        name: 'log',
        component: log,
        meta: {
          breadcrumb: '系统日志'
        }
      },
      {
        path: '/admin/projectDetailNew',
        name: 'projectDetailNew',
        component: projectDetailNew,
        meta: {
          breadcrumb: '项目详情'
        }
      },
      {
        path: '/settings/setting',
        name: 'setting',
        component: setting,
        meta: {
          breadcrumb: '系统设置'
        }
      },
      {
        path: '/systemControlNew',
        name: 'systemControlNew',
        component: systemControlNew,
        meta: {
          breadcrumb: '系统控制台'
        }
      },
      {
        path: '/systemControl',
        name: 'systemControl',
        component: systemControl,
        meta: {
          breadcrumb: '系统控制台'
        }
      },
      {
        path: '/projectList',
        name: 'projectList',
        component: projectList,
        meta: {
          breadcrumb: '项目列表'
        }
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: Buttons,
        meta: {
          breadcrumb: 'Buttons'
        }
      },
      {
        path: '/test',
        name: 'test',
        component: test,
        meta: {
          breadcrumb: '组件测试'
        }
      },
      {
        path: '/tabdemo',
        name: 'tabdemo',
        component: TabDemo,
        meta: {
          breadcrumb: 'tab'
        }
      }
    ]
  },
    {path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/loginNew',
      name: 'loginNew',
      component: loginNew
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/enter',
      name: 'enter',
      component: enter
    }
  ]
})
