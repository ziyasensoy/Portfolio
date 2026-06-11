<template>
  <div class="project-content">
    <p>{{ t("Projects.items.votevision.content.intro1") }}</p>
    <p>{{ t("Projects.items.votevision.content.intro2") }}</p>

    <h2>{{ t("Projects.items.votevision.content.contributionsTitle") }}</h2>

    <p>{{ t("Projects.items.votevision.content.contribution1") }}</p>
    <p>{{ t("Projects.items.votevision.content.contribution2") }}</p>

    <h3>{{ t("Projects.items.votevision.content.landingPage") }}</h3>
    <img
      :src="publicPath('/projects/votevision/votevision_landingpage.png')"
      alt="Votevision landing page"
    />

    <h3>{{ t("Projects.items.votevision.content.resultsPage") }}</h3>
    <img
      :src="publicPath('/projects/votevision/votevision_resultspage_1.png')"
      alt="Votevision results page 1"
    />
    <img
      :src="publicPath('/projects/votevision/votevision_resultspage_2.png')"
      alt="Votevision results page 2"
    />

    <h3>{{ t("Projects.items.votevision.content.quizPage") }}</h3>
    <img
      :src="publicPath('/projects/votevision/votevision_quiz.png')"
      alt="Votevision quiz page"
    />
  </div>
</template>


<script setup lang="ts">
const { t } = useI18n()
</script>