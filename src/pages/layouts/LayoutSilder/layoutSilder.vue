<template>
  <div class="w-full" style="height: calc(100vh - 64px)">
    <el-menu
      default-active="2"
      class="h-full overflow-x-hidden overflow-y-auto"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu
        v-for="(item, idx) in menuItems"
        :index="`${idx + 1}`"
        :key="item.key"
      >
        <template #title>
          <el-icon class="house"></el-icon>
          <span>{{ item.label }}</span>
        </template>
        <template v-if="item.children?.length">
          <el-menu-item
            v-for="(childMenu, cidx) in item.children"
            :index="`${idx + 1}-${cidx + 1}`"
          >
            {{ childMenu.label }}
          </el-menu-item>
        </template>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { menuItems } from "./silder";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped></style>
