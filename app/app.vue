<script setup lang="ts">
const { theme } = useTheme();

useHead({
  bodyAttrs: {
    class: computed(() => (theme.value === "dark" ? "dark-theme" : "")),
  },
});
</script>

<template>
  <div>
    <PageLoader />

    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>