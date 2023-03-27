<template>
  <h1 class="h-title">奈亚子练习主页</h1>
  <el-link type="primary" @click="link(1)">bootstrap练习测试</el-link>
</template>

<script lang="ts" setup>
import router from '@/router';

const link = (id: number) => {
  switch (id) {
    case 1:
      router.push('/bootstrap-home');
      break;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
.h-title {
  @apply text-pink-400 text-center font-mono text-8xl italic font-black
  text-shadow-sm text-stroke-sm text-stroke-yellow-500;
}
</style>
