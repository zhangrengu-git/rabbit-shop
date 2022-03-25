<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView></RouterView>
</template>

<style lang="less" scoped>
@import "@/assets/styles/variables.less";
@import "@/assets/styles/mixins.less";
h1 {
  background-color: @warnColor;
  .hoverShadow();
}
</style>
