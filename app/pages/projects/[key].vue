<script setup lang="ts">
const route = useRoute();

const { t } = useI18n()
const projectKey = route.params.key as string;

useHead({
  title: `${t(`Projects.items.${projectKey}.name`)} | Ziya Sensoy`,
});
</script>

<template>
  <div>
    <Header />
    <ProjectsProjectDetail :project-key="projectKey" />
    <Footer />
  </div>
</template>
