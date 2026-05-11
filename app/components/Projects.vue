<template>
  <section class="projects section" id="projects">
    <h2 class="section_title">{{ $t("Projects.title") }}</h2>
    <span class="section_subtitle">{{ $t("Projects.subtitle") }}</span>

    <div class="projects_container container grid">
      <div
        v-for="project in visibleProjects"
        :key="project.name"
        class="project"
        @mouseenter="setHover(project)"
        @mouseleave="setHover(null)"
      >
        <div class="project_left">
          <div class="project_name">{{ project.name }}</div>
          <div class="project_year">{{ project.year }}</div>
        </div>

        <div class="project_right">
          <div class="project_type">{{ project.type }}</div>
          <div class="project_stack">{{ project.stack }}</div>
        </div>
      </div>
    </div>
    <div
      v-if="hoveredProject"
      class="project_tooltip"
      :style="{
        backgroundColor: hoveredProject.color,
        left: tooltip.x + 'px',
        top: tooltip.y + 'px'
      }"
    >
      {{ hoveredProject.description }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

export type Project = {
  name: string;
  year: string;
  type: string;
  stack: string;
  description: string;
  color: string;
};

const projects: Project[] = [
  {
    name: "Typografie",
    year: "2026",
    type: "Minor Visual Interface Design",
    stack: "HTML, CSS, JavaScript",
    description: "Onderzoek naar lettertype 'Neude' ",
    color: "#4f46e5",
  },
  {
    name: "Kleur en Compositie",
    year: "2026",
    type: "Minor Visual Interface Design",
    stack: "Figma",
    description: "High-fidelity designs voor luxe koffiemerk",
    color: "#06b6d4",
  },
  {
    name: "Beeld(Taal)",
    year: "2026",
    type: "Minor Visual Interface Design",
    stack: "-",
    description: "Semiotiek, retorica & gestalt",
    color: "#f97316",
  },
  {
    name: "Interface & Beweging",
    year: "2026",
    type: "Minor Visual Interface Design",
    stack: "Rive",
    description: "Animatie",
    color: "#22c55e",
  },
  {
    name: "React Lab",
    year: "2025",
    type: "Prive",
    stack: "React",
    description: "-",
    color: "#ef4444",
  },
];

const showAll = ref(false);
const visibleProjects = computed(() =>
  showAll.value ? projects : projects.slice(0, 4)
);

function toggleShowMore() {
  showAll.value = !showAll.value;
}

const hoveredProject = ref<Project | null>(null);

function setHover(project: Project | null) {
  hoveredProject.value = project;
}

const tooltip = ref({ x: 0, y: 0 });

function moveCursor(e: MouseEvent) {
  tooltip.value = {
    x: e.clientX,
    y: e.clientY,
  };
}

onMounted(() => {
  window.addEventListener("mousemove", moveCursor);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", moveCursor);
});
</script>