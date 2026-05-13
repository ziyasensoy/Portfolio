<template>
  <section class="projects section" id="projects">

    <div class="featured_projects container">
      <h2 class="section_title">{{ $t("Projects.title") }}</h2><br>
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

          <p class="project_stack">          <i class="uil uil-tag-alt"></i>
            {{ project.stack }}</p>
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

<style lang="css">
.featured_projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.3rem;
}

.project_card {
  border-radius: 0.5rem;
  overflow: hidden;
  background: var(--container-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.project_card:hover {
  transform: translateY(-5px);
}

.project_image_wrapper {
  padding: 2rem;
  background: var(--first-color-alt);
}

.project_image_wrapper img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.project_content {
  padding: 1rem;
}

.project_title {
  font-size: var(--medium-font-size);
  margin-bottom: 0.5rem;
}

.project_description {
  font-size: var(--smaller-font-size);
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.project_stack {
  font-size: var(--smaller-font-size);
  opacity: 0.8;
}
</style>
