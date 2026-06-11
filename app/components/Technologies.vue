<template>
  <section class="skills" id="skills">
    <div class="skills_container container">
      <h2 class="section_title">
        <i class="uil uil-brackets-curly contact_icon"></i>
        {{ t("Technologies.title") }}
      </h2>

      <div class="skills_grid">
        <div
          class="skill_card"
          v-for="skill in skills"
          :key="skill.name"
        >
          <div class="skill_header">
            <div class="skill_logo">
              <img :src="skill.logo" :alt="skill.name" />
            </div>

            <div>
              <h3 class="skill_name">{{ skill.name }}</h3>
              <p class="skill_description">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const skills = [
  {
    name: t('Technologies.vue.name'),
    description: t('Technologies.vue.description'),
    logo: "/logos/vue_logo.svg",
  },
  {
    name: t('Technologies.typescript.name'),
    description: t('Technologies.typescript.description'),
    logo: "/logos/ts_logo.svg",
  },
  {
    name: t('Technologies.javascript.name'),
    description: t('Technologies.javascript.description'),
    logo: "/logos/js_logo.svg",
  },
  {
    name: t('Technologies.figma.name'),
    description: t('Technologies.figma.description'),
    logo: "/logos/figma_logo.svg",
  },
  {
    name: t('Technologies.nuxt.name'),
    description: t('Technologies.nuxt.description'),
    logo: "/logos/nuxt_logo.svg",
  },
  {
    name: t('Technologies.tailwind.name'),
    description: t('Technologies.tailwind.description'),
    logo: "/logos/Tailwind_CSS_Logo.svg",
  },
  {
    name: t('Technologies.java.name'),
    description: t('Technologies.java.description'),
    logo: "/logos/java_logo.svg",
  },
  {
    name: t('Technologies.git.name'),
    description: t('Technologies.git.description'),
    logo: "/logos/git_logo.svg",
  },
];
</script>