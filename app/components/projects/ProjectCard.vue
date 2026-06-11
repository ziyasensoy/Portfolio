<template>
  <NuxtLink
    :to="`/projects/${project.key}`"
    class="project_card"
  >
    <div class="project_image_wrapper">
      <img
        :src="project.thumbnail"
        :alt="$t(`Projects.items.${project.key}.name`)"
      />
    </div>

    <div class="project_content">
      <h3 class="project_title">
        {{ $t(`Projects.items.${project.key}.name`) }}
      </h3>
      <p class="project_description">
        {{ $t(`Projects.items.${project.key}.description`) }}
      </p>

      <p class="project_stack">
        <i class="uil uil-tag-alt"></i>

        <span
          v-for="(tag, index) in $t(
            `Projects.items.${project.key}.stack`,
          ).split(',')"
          :key="index"
          class="tag"
        >
          {{ tag.trim() }}
        </span>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from "~/composables/useProjects";

defineProps<{
  project: Project;
}>();
</script>
