<template>
  <section class="projects section">
    <div class="container">
      <h2 class="section_title">
        <i class="uil uil-folder-open contact_icon"></i>
        {{ t("Projects.title") }}
      </h2>

      <div class="projects_filters">
        <button
          v-for="filter in PROJECT_FILTERS"
          :key="filter.id"
          type="button"
          class="projects_filter"
          :class="{ 'projects_filter--active': activeFilter === filter.id }"
          @click="activeFilter = filter.id"
        >
          {{ t(filter.labelKey) }}
        </button>
      </div>

      <div class="projects_grid">
        <ProjectsProjectCard
          v-for="project in filteredProjects"
          :key="project.key"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProjects } from "~/composables/useProjects";
import {
  PROJECT_FILTERS,
  type ProjectFilterId,
} from "~/utils/project-filters";

type FilterId = (typeof PROJECT_FILTERS)[number]["id"];

const { t } = useI18n();
const { projects } = useProjects();
const activeFilter = ref<FilterId>("all");

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") {
    return projects;
  }

  const filter = activeFilter.value as ProjectFilterId;

  return projects.filter((project) => project.filters.includes(filter));
});
</script>
