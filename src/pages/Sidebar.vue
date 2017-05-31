<template>
  <bl-menu>
    <bl-menu-item>
      <span style="line-height:30px">我的控制台</span>
    </bl-menu-item>
    <bl-menu-sub class="nav-item" v-for="(item,index) in menuList"
                 :key="item.router"
                 :icon="item.icon"
                 :opened="true"
                 :class="{ active: $route.path.indexOf(item.category) > -1 }">
      <template slot="title">
        {{item.title}}
      </template>
      <bl-menu-item v-for="(li,i) in item.children"
                    :key="item.router"
                    :href="li.router"
                    :icon="li.icon"
                    :liIndex="index +'-' + i"
                    @isActive="editCurrentIndex"
                    :class="{active: $route.path == li.router}">
        {{li.title}}
      </bl-menu-item>

    </bl-menu-sub>
  </bl-menu>
</template>

<script>
  import BlMenu from './../components/menu/menu'
  import BlMenuItem from './../components/menu/menu-item'
  import BlMenuSub from './../components/menu/menu-sub'
  export default {
    name: 'sidebar',
    data() {
      return {
        currentIndex: null,
        subMenuIndex: null,
        opened: null,
        menuList: [
          {
            title: '管理员控制台',
            icon: 'icon-home',
            category: 'admin',
            children: [
              {title: '系统控制台风格1', router: '/systemControl', icon: 'icon-grid'},
              {title: '系统控制台风格2', router: '/systemControlNew', icon: 'icon-grid'},
              {title: '项目列表', router: '/projectList', icon: 'icon-list'},
              {title: '项目详情风格1', router: '/admin/projectDetail', icon: 'icon-briefcase'},
              {title: '项目详情风格2', router: '/admin/projectDetailNew', icon: 'icon-briefcase'},
              {title: '认证信息', router: '/authInfo', icon: 'icon-user-following'},
              {title: '企业认证', router: '/checkInfo', icon: 'icon-people'},
              {title: 'button with icon', router: '/buttons', icon: 'icon-star'},
              {title: 'test', router: '/test', icon: 'icon-star'},
              {title: 'tab', router: '/tabdemo', icon: 'icon-star'}
            ]
          },
          {
            title: '系统设置',
            icon: 'icon-settings',
            category: 'settings',
            children: [
              {title: '系统日志', router: '/log', icon: 'icon-film'},
              {title: '设置内容', router: '/settings/setting', icon: 'icon-settings'}
            ]
          }
        ]
      }
    },
    components: {BlMenu, BlMenuItem, BlMenuSub},
    methods: {
      editCurrentIndex: function (liIndex) {
        this.currentIndex = liIndex;
        this.subMenuIndex = liIndex.split('-')[0];
      }
    }
  }
</script>
