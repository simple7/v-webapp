<template>
    <div id="app" class="page-header-fixed page-sidebar-closed-hide-logo page-content-white page-footer-fixed">
        <top-nav></top-nav>
        <div class="page-container">
            <Sidebar></Sidebar>
            <!--<img src="./assets/logo.png">-->
            <router-view></router-view>
        </div>
        <foot-tip></foot-tip>
    </div>
</template>

<script>
import topNav from './topNav'
import Sidebar from './Sidebar'
import footTip from './footTip'

export default {
    name: 'Home',
    components:{topNav,Sidebar,footTip}
}
</script>
