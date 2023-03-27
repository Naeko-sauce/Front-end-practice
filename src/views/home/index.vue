<template>
  <div class="pl-40">
    <h1 class="h-title">奈亚子练习主页</h1>
    <div v-for="(link, index) in links" :key="index">
      <el-link class="!text-xl" type="primary" @click="handleLinkClick(link)">
        {{ link.label }}
      </el-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';

/** 定义跳转链接数组 */
const links = [
  { id: 1, label: 'bootstrap', path: '/bootstrap-home' },
  { id: 2, label: 'niao-bi', path: '/niao-bi' },
];
// const links: { [key: number]: string } = {
//   1: '/bootstrap-home',
//   2: '/niao-bi',
// };

/** 执行链接跳转 */
const handleLinkClick = (link: any): void => {
  router.push(link.path);
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
