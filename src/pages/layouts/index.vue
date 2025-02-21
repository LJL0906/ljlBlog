<template>
  <div>
    <LayoutHeader></LayoutHeader>

    <div class="bg-[var(----color-white)]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LayoutHeader } from "@/components";
</script>

<style lang="scss" scoped></style>
