<template>
  <div class="project-content">
    <p class="project-content-grade">
      {{ t("Projects.items.typografie.content.grade") }}
    </p>

    <p class="project-content-intro">
      {{ t("Projects.items.typografie.content.intro1") }}
    </p>
    <p class="project-content-intro">
      {{ t("Projects.items.typografie.content.intro1") }}
    </p>

    <h3>{{ t("Projects.items.typografie.content.opdracht1Title") }}</h3>
    <p>{{ t("Projects.items.typografie.content.opdracht1line1") }}</p>
    <p>{{ t("Projects.items.typografie.content.opdracht1line2") }}</p>
    <p>{{ t("Projects.items.typografie.content.opdracht1line3") }}</p>
    <img
      :src="publicPath('/projects/typografie/typografie_opdracht1.png')"
      alt="Typografie opdracht 1"
    />

    <h3>{{ t("Projects.items.typografie.content.opdracht2Title") }}</h3>
    <p>{{ t("Projects.items.typografie.content.opdracht2") }}</p>

    <h4>{{ t("Projects.items.typografie.content.onderzoekTitle") }}</h4>
    <p>{{ t("Projects.items.typografie.content.onderzoek1") }}</p>
    <p>{{ t("Projects.items.typografie.content.onderzoek2") }}</p>
    <p>{{ t("Projects.items.typografie.content.onderzoek3") }}</p>
    <img
      :src="
        publicPath('/projects/typografie/typografie_kalenderblad_neude.png')
      "
      alt="Typografie neude"
    />

    <h4>
      {{ t("Projects.items.typografie.content.kalenderbladSchetsenTitle") }}
    </h4>
    <p>{{ t("Projects.items.typografie.content.kalenderbladSchetsen") }}</p>
    <img
      :src="
        publicPath('/projects/typografie/typografie_kalenderblad_schetsen.png')
      "
      alt="Typografie kalenderblad schetsen"
    />

    <h4>{{ t("Projects.items.typografie.content.kalenderbladTitle") }}</h4>
    <p>{{ t("Projects.items.typografie.content.kalenderblad") }}</p>
    <img
      :src="publicPath('/projects/typografie/typografie_kalenderblad.png')"
      alt="Typografie kalenderblad"
    />

    <h3>{{ t("Projects.items.typografie.content.typespecimenTitle") }}</h3>
    <p>{{ t("Projects.items.typografie.content.typespecimen1") }}</p>
    <p>{{ t("Projects.items.typografie.content.typespecimen2") }}</p>
    <a
      :href="t('Projects.items.typografie.content.typespecimenLink')"
      target="_blank"
      >{{ t("Projects.items.typografie.content.typespecimenLink") }}</a
    >
    <h4>
      {{ t("Projects.items.typografie.content.typespecimenKarakterset") }}
    </h4>
    <img
      :src="publicPath('/projects/typografie/typografie_karakterset.png')"
      alt="Typografie karakterset"
    />
    <h4>
      {{ t("Projects.items.typografie.content.typespecimenLetteranalyse") }}
    </h4>
    <img
      :src="publicPath('/projects/typografie/typografie_letteranalyse.png')"
      alt="Typografie letteranalyse"
    />
    <h4>{{ t("Projects.items.typografie.content.typespecimenOorsprong") }}</h4>
    <img
      :src="publicPath('/projects/typografie/typografie_oorsprong.png')"
      alt="Typografie oorsprong"
    />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
