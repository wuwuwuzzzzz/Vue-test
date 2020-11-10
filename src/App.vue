<template>
  <div id="app">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/login">登录</router-link>
      <router-view></router-view>
  </div>
</template>

<script>

</script>

<style >
    @import "./assets/css/main.css";
    @import "./assets/css/color-dark.css";     /*深色主题*/
    /*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>
