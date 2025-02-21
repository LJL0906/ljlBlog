<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

router.replace({ path: `/${route.params.path}`, query: route.query });
</script>

<template>
  <div></div>
</template>
