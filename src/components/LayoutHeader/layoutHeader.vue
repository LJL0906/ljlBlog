<template>
  <div
    class="sticky top-0 left-0 flex items-center justify-between w-full border-b border-gray-200 h-16 z-[9999] px-12 bg-white"
  >
    <div class="flex items-center w-fit">
      <img src="@/assets/image/v_icon.png" alt="" class="w-6 h-6" />
      <div class="w-[250px]">
        <div class="ml-4 typing">Pretty and charming</div>
      </div>
    </div>

    <div class="userInfo">123</div>
  </div>
</template>

<script lang="ts" setup>
import { menuTabs } from "./menuTabs";
</script>

<style lang="scss" scoped>
.xl-header {
  background-image: radial-gradient(transparent 1px, var(--color-white) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
}

.typing {
  font-size: 16px;
  width: fit-content;
  height: 26px;
  border-right: 1px solid transparent;
  animation: typing 2s steps(42, end);
  font-family: Consolas, Monaco;
  word-break: break-all;
  overflow: hidden;
}

/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 175px;
  }
}
</style>
