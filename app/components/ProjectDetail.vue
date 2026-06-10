<template>
  <section class="about section">
    <div class="container">
      <div class="project-detail">
        <div class="project_details_image_wrapper">
          <img
            v-if="project"
            :src="project.image"
            :alt="$t(`Projects.items.${projectKey}.name`)"
            class="project-image"
          />
        </div>

        <h1 class="project-title">
          {{ $t(`Projects.items.${projectKey}.name`) }}
        </h1>

        <div v-if="project" class="project-meta">
          <span class="project-date">
            <i class="uil uil-schedule"></i>
            {{ $t(`Projects.items.${projectKey}.date`) }}
          </span>

          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Demo"
          >
            <i class="uil uil-external-link-alt"></i>
          </a>
        </div>

        <div class="project-tags">
          <i class="uil uil-tag-alt"></i>

          <span
            v-for="(tag, index) in $t(
              `Projects.items.${projectKey}.stack`,
            ).split(',')"
            :key="index"
            class="tag"
          >
            {{ tag.trim() }}
          </span>
        </div>

        <hr class="project-divider" />

        <div class="project-overview">
          <p>
            {{ $t(`Projects.items.${projectKey}.overview`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useProjects } from "~/composables/useProjects";

const props = defineProps<{
  projectKey: string;
}>();

const { projects } = useProjects();

const project = computed(() =>
  projects.find((p) => p.key === props.projectKey),
);
</script>
