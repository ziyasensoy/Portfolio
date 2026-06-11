<script setup lang="ts">
import { computed } from "vue";
import { useProjects } from "~/composables/useProjects";

import VoteVisionProject from "~/components/projects/projectDetails/VoteVisionProject.vue";
import InterfaceInteractionProject from "~/components/projects/projectDetails/InterfaceInteractionProject.vue";
import KleurCompositieProject from "~/components/projects/projectDetails/KleurCompositieProject.vue";
import TypografieProject from "~/components/projects/projectDetails/TypografieProject.vue";
import BeeldtaalProject from "~/components/projects/FeaturedProjects.vue";
import MeesterproefProject from "~/components/projects/projectDetails/MeesterproefProject.vue";

const props = defineProps<{
  projectKey: string;
}>();

const { projects } = useProjects();

const project = computed(() =>
  projects.find((p) => p.key === props.projectKey),
);

const projectComponent = computed(() => {
  switch (props.projectKey) {
    case "votevision":
      return VoteVisionProject;

    case "interfaceInteraction":
      return InterfaceInteractionProject;

    case "kleurCompositie":
      return KleurCompositieProject;

    case "typografie":
      return TypografieProject;

    case "beeldtaal":
      return BeeldtaalProject;

    case "meesterproef":
      return MeesterproefProject;

    default:
      return null;
  }
});
</script>

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
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-external-link-alt"></i>
          </a>
        </div>

        <div class="project-tags">
          <i class="uil uil-tag-alt"></i>

          <span
            v-for="(tag, index) in $t(
              `Projects.items.${projectKey}.stack`
            ).split(',')"
            :key="index"
            class="tag"
          >
            {{ tag.trim() }}
          </span>
        </div>

        <hr class="project-divider" />

        <component
          v-if="project?.component"
          :is="project.component"
        />
      </div>
    </div>
  </section>
</template>