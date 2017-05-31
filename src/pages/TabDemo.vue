<template>
  <!-- BEGIN CONTENT -->
  <div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <div class="page-content">
      <!-- BEGIN PAGE HEADER-->
      <!-- BEGIN PAGE BAR -->
      <div class="page-bar">
        <ul class="page-breadcrumb">
          <li>
            <a href="index.html">首页</a>
            <i class="fa fa-angle-right"></i>
          </li>
          <li>
            <span>tab</span>
          </li>
        </ul>
      </div>
      <!-- END PAGE BAR -->
      <!-- BEGIN PAGE TITLE-->
      <h3 class="page-title">
        tab
      </h3>
      <!-- END PAGE TITLE-->
      <!-- END PAGE HEADER-->
      <div class="row">
        <div class="col-md-12">
          <Tab></Tab>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Tab from '@/components/tab/Tab'
  export default {
    components: {Tab}
  }
</script>
