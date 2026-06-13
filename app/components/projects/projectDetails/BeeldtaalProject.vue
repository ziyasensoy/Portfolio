<template>
  <div class="project-content">
    <p class="project-content-grade">
      {{ t("Projects.items.beeldtaal.content.grade") }}
    </p>

    <p>{{ t("Projects.items.beeldtaal.content.intro1") }}</p>
    <p>{{ t("Projects.items.beeldtaal.content.intro2") }}</p>

    <h3>{{ t("Projects.items.beeldtaal.content.opdracht1Title") }}</h3>
    <p>{{ t("Projects.items.beeldtaal.content.opdracht1line1") }}</p>
    <p>{{ t("Projects.items.beeldtaal.content.opdracht1line2") }}</p>
    <p>{{ t("Projects.items.beeldtaal.content.opdracht1line3") }}</p>
    <h4>{{ t("Projects.items.beeldtaal.content.opdracht1scene1Title") }}</h4>
    <img
      :src="publicPath('/projects/beeldtaal/beeldtaal_opdracht1_1.png')"
      alt="Beeldtaal opdracht 1 scene 1"
    />
    <h4>{{ t("Projects.items.beeldtaal.content.opdracht1scene2Title") }}</h4>
    <img
      :src="publicPath('/projects/beeldtaal/beeldtaal_opdracht1_2.png')"
      alt="Beeldtaal opdracht 1 scene 2"
    />
    <h4>{{ t("Projects.items.beeldtaal.content.opdracht1scene3Title") }}</h4>
    <img
      :src="publicPath('/projects/beeldtaal/beeldtaal_opdracht1_3.png')"
      alt="Beeldtaal opdracht 1 scene 3"
    />

    <h3>{{ t("Projects.items.beeldtaal.content.opdracht2Title") }}</h3>
    <p>{{ t("Projects.items.beeldtaal.content.opdracht2line1") }}</p>
    <p>{{ t("Projects.items.beeldtaal.content.opdracht2line2") }}</p>
    <p>{{ t("Projects.items.beeldtaal.content.opdracht2line3") }}</p>

    <div class="animation-row">
      <img
        :src="publicPath('/projects/beeldtaal/beeldtaal_poster_oud.png')"
        alt="Beeldtaal opdracht 2 poster oud"
      />
      <img
        :src="publicPath('/projects/beeldtaal/beeldtaal_poster_nieuw.png')"
        alt="Beeldtaal opdracht 2 poster nieuw"
      />
    </div>

    <h3>{{ t("Projects.items.beeldtaal.content.EindopdrachtTitle") }}</h3>
    <p>{{ t("Projects.items.beeldtaal.content.Eindopdracht1") }}</p>
    <p>{{ t("Projects.items.beeldtaal.content.Eindopdracht2") }}</p>
    <p>{{ t("Projects.items.beeldtaal.content.Eindopdracht3") }}</p>
    <img
      :src="publicPath('/projects/beeldtaal/beeldtaal_eindopdracht.png')"
      alt="Beeldtaal eindopdracht"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
