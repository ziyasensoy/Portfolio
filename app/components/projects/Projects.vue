<template>
  <section class="projects section">
    <div class="container">
      <h2 class="section_title">
        <i class="uil uil-folder-open contact_icon"></i>
        {{ t("Projects.title") }}
      </h2>

      <div class="projects_grid">
        <ProjectsProjectCard
          v-for="project in projects"
          :key="project.key"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "~/components/projects/ProjectCard.vue";
import { useProjects } from "~/composables/useProjects";

const { t } = useI18n()
const { projects } = useProjects();
</script>
