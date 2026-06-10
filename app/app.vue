<script setup>
useHead({
  bodyAttrs: {
    class: "dark-theme",
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