<template>
  <div class="flex w-screen h-screen bg-[--body-bg-color]">
    <div class="w-[var(--silder-width)] h-full">
      <LayoutHeader></LayoutHeader>

      <LayoutSilder></LayoutSilder>
    </div>

    <div class="h-full">
      <LayoutMain> </LayoutMain>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LayoutHeader from "./LayoutHeader/layoutHeader.vue";
import LayoutSilder from "./LayoutSilder/layoutSilder.vue";
import LayoutMain from "./LayoutMain/layoutMain.vue";
</script>

<style lang="scss" scoped></style>
