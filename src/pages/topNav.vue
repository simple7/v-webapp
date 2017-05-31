<template>
    <!-- BEGIN HEADER -->
    <div class="page-header navbar navbar-fixed-top">
      <!-- BEGIN HEADER INNER -->
      <div class="page-header-inner ">
        <!-- BEGIN LOGO -->
        <div class="page-logo">
          <a href="index.html">
            <h4 class="logo-default font-white">帐融<span class="font-red-flamingo">通</span></h4></a>
          <div class="menu-toggler sidebar-toggler">
            <span></span>
          </div>
        </div>
        <!-- END LOGO -->
        <!-- BEGIN RESPONSIVE MENU TOGGLER -->
        <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse"
           data-target=".navbar-collapse"> </a>
        <!-- END RESPONSIVE MENU TOGGLER -->
        <!-- BEGIN TOP NAVIGATION MENU -->
        <div class="top-menu">
          <ul class="nav navbar-nav pull-right">
            <!-- BEGIN INBOX DROPDOWN -->
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                 data-close-others="true">
                <i class="icon-envelope-open"></i>
                <span class="badge badge-default"> 4 </span>
              </a>
              <ul class="dropdown-menu">
                <li class="external">
                  <h3>你有
                                        <span class="bold">7 条</span> 新消息</h3>
                  <a href="app_inbox.html">查看全部</a>
                </li>
                <li>
                  <ul class="dropdown-menu-list scroller" style="height: 275px;" data-handle-color="#637283">
                    <li>
                      <a href="javascript:;" class="nav-link nav-toggle">
                        <i class="fa fa-envelope-o font-green"></i>
                        <span class="title">上还是发京东方科技的撒开</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" class="nav-link nav-toggle">
                        <i class="fa fa-envelope-o font-green"></i>
                        <span class="title">上还是发京东方科技的撒开</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" class="nav-link nav-toggle">
                        <i class="fa fa-envelope-o font-green"></i>
                        <span class="title">上还是发京东方科技的撒开</span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" class="nav-link nav-toggle">
                        <i class="fa fa-envelope-o font-green"></i>
                        <span class="title">上还是发京东方科技的撒开</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <!-- END INBOX DROPDOWN -->
            <!-- BEGIN USER LOGIN DROPDOWN -->
            <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
            <li class="dropdown dropdown-user">
              <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown"
                 data-close-others="true">
                <span class="username username-hide-on-mobile"> Nick </span>
                <i class="fa fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-default">
                <li>
                  <a href="page_user_profile_1.html">
                    <i class="icon-user"></i> 账户 </a>
                </li>
                <li>
                  <a href="page_user_login_1.html">
                    <i class="icon-key"></i> Log Out </a>
                </li>
              </ul>
            </li>
            <!-- END USER LOGIN DROPDOWN -->
          </ul>
        </div>
        <!-- END TOP NAVIGATION MENU -->
      </div>
      <!-- END HEADER INNER -->
    </div>
    <!-- END HEADER -->
</template>