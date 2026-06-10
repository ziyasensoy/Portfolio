<script setup lang="ts">
const loading = ref(false);

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:start", () => {
  loading.value = true;
});

nuxtApp.hook("page:finish", async () => {
  await nextTick();

  const images = Array.from(document.images);

  await Promise.all(
    images.map((img) => {
      if (img.complete) return Promise.resolve();

      return new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      });
    }),
  );

  loading.value = false;
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="loading"
      class="loading-overlay"
    >
      <div class="spinner" />
    </div>
  </Transition>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: var(--body-bg-accent);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>