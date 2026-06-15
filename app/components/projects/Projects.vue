<template>
  <section class="projects section">
    <div class="container">
      <h2 class="section_title">
        <i class="uil uil-folder-open contact_icon"></i>
        {{ t("Projects.title") }}
      </h2>

      <div class="projects_controls">
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

        <div ref="sortRef" class="projects_sort">
          <span class="projects_sort_label">
            {{ t("Projects.sort.label") }}
          </span>
          <div class="projects_sort_dropdown">
            <button
              type="button"
              class="projects_sort_trigger"
              :aria-expanded="sortOpen"
              @click="sortOpen = !sortOpen"
            >
              <span>{{ activeSortLabel }}</span>
              <i
                class="uil uil-angle-down projects_sort_icon"
                :class="{ 'projects_sort_icon--open': sortOpen }"
              ></i>
            </button>

            <div v-if="sortOpen" class="projects_sort_menu">
              <button
                v-for="option in PROJECT_SORT_OPTIONS"
                :key="option.id"
                type="button"
                class="projects_sort_option"
                :class="{
                  'projects_sort_option--active': activeSort === option.id,
                }"
                @click="selectSort(option.id)"
              >
                {{ t(option.labelKey) }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="projects_grid">
        <ProjectsProjectCard
          v-for="project in displayedProjects"
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
import {
  PROJECT_SORT_OPTIONS,
  sortProjects,
  type ProjectSortId,
} from "~/utils/project-sort";

type FilterId = (typeof PROJECT_FILTERS)[number]["id"];

const { t } = useI18n();
const { projects } = useProjects();
const activeFilter = ref<FilterId>("all");
const activeSort = ref<ProjectSortId>("favorites");
const sortOpen = ref(false);
const sortRef = ref<HTMLElement | null>(null);

const activeSortLabel = computed(() => {
  const option = PROJECT_SORT_OPTIONS.find(
    (item) => item.id === activeSort.value,
  );

  return option ? t(option.labelKey) : "";
});

function selectSort(sort: ProjectSortId) {
  activeSort.value = sort;
  sortOpen.value = false;
}

function handleClickOutside(event: MouseEvent) {
  if (sortRef.value && !sortRef.value.contains(event.target as Node)) {
    sortOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") {
    return projects;
  }

  const filter = activeFilter.value as ProjectFilterId;

  return projects.filter((project) => project.filters.includes(filter));
});

const displayedProjects = computed(() =>
  sortProjects(filteredProjects.value, activeSort.value),
);
</script>
