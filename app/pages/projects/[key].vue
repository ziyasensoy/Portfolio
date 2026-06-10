<script setup lang="ts">
const route = useRoute();

const projectKey = route.params.key as string;
</script>

<template>
  <div>
    <Header />
    <ProjectDetail :project-key="projectKey" />
    <Footer />
  </div>
</template>
