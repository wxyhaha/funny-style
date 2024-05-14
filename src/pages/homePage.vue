<template>
  <div class="homePageWrapper">
    <button @click="router.push('/simButton')">拟物按钮</button>
    <button @click="router.push('/3dCard')">3D卡片</button>
  </div>
</template>

<script setup>
import router from "../router";

</script>

<style lang="scss" scoped>
.homePageWrapper{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>