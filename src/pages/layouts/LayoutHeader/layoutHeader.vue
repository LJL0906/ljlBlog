<template>
  <div
    class="select-none sticky top-0 left-0 flex items-center justify-center w-full h-16 z-[9999] font-bold text-[var(--header-text-color)] header"
  >
    <div
      class="flex items-center justify-between w-[195px] h-12 mx-5 px-2 rounded-xl bg-[var(--header-tag-bg-color)]"
    >
      <div class="flex items-center w-fit">
        <img src="@/assets/image/header_icon.png" alt="" class="w-4 h-4" />
        <div class="w-fit">
          <div
            class="h-6 ml-2 overflow-hidden text-sm tracking-normal break-all border-r w-fit border-r-transparent font-CM typing"
          >
            Pretty and charming
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.typing {
  animation: typing 2s steps(42, end);
}

.header {
  background-image: radial-gradient(
    transparent 1px,
    var(--header-bg-color) 1px
  );
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  -webkit-backdrop-filter: saturate(50%) blur(4px);
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
