<template>
    <div class="laylout-container">
      <appTonavVue/>
      <appHeader/>
      <main class="app-body">
    <!-- 路由出口 -->
  </main>
      <appFooterVue/>
    </div>
</template>

<script setup lang="ts">
import appTonavVue from './components/app-tonav.vue'
import appHeader from './components/app-header.vue'
import appFooterVue from './components/app-footer.vue'
</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>