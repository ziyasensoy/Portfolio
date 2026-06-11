<template>
  <section class="projects section">
    <div class="container">
      <div class="projects_header">
        <h2 class="section_title">
          <i class="uil uil-star contact_icon"></i>
          {{ t("Projects.featured") }}
        </h2>

        <NuxtLink to="/projects" class="see_more_btn">
          {{ t("Projects.viewMore") }} <i class="uil uil-arrow-right"></i>
        </NuxtLink>
      </div>

      <div class="featured_projects">
        <ProjectsProjectCard
          v-for="project in featuredProjects"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ProjectCard from "~/components/projects/ProjectCard.vue";
import { useProjects } from "~/composables/useProjects";

const { t } = useI18n()
const { projects } = useProjects();

const featuredProjects = computed(() => projects.slice(0, 2));
</script>
