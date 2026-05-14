<template>
  <section class="projects section" id="projects">
    <div class="featured_projects container">
      <h2 class="section_title">
        <i class="uil uil-star contact_icon"></i>{{ $t("Projects.title") }}
      </h2>
      <br />
      <div
        v-for="project in featuredProjects"
        :key="project.name"
        class="project_card"
      >
        <div class="project_image_wrapper">
          <img :src="project.image" :alt="project.name" />
        </div>

        <div class="project_content">
          <h3 class="project_title">{{ project.name }}</h3>
          <p class="project_description">{{ project.description }}</p>

          <p class="project_stack">
            <i class="uil uil-tag-alt"></i>

            <span
              v-for="(tag, index) in project.stack.split(',')"
              :key="index"
              class="tag"
            >
              {{ tag.trim() }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Project = {
  name: string;
  description: string;
  stack: string;
  image: string;
};

const featuredProjects: Project[] = [
  {
    name: "Typografie",
    description: "Type specimen voor lettertype 'Neude'",
    stack: "HTML, CSS, JavaScript",
    image: "/typo.png",
  },
  {
    name: "Kleur en Compositie",
    description: "High-fidelity designs voor luxe koffiemerk",
    stack: "Figma",
    image: "/kleur_compositie.png",
  },
];
</script>