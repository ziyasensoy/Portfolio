<template>
  <div class="project-content">
    <p>
      {{ t("Projects.items.meesterproef.content.intro1") }}
    </p>

    <p>
      {{ t("Projects.items.meesterproef.content.intro2") }}
    </p>

    <h3>
      {{ t("Projects.items.meesterproef.content.myFascinationTitle") }}
    </h3>
    <p>
      {{ t("Projects.items.meesterproef.content.myFascination1") }}
    </p>
    <p>
      {{ t("Projects.items.meesterproef.content.myFascination2") }}
    </p>
    
    <h3>
      {{ t("Projects.items.meesterproef.content.persoonlijkeVisieTitle") }}
    </h3>
    <p>
      {{ t("Projects.items.meesterproef.content.persoonlijkeVisie1") }}
    </p>
    <p>
      {{ t("Projects.items.meesterproef.content.persoonlijkeVisie2") }}
    </p>
    <p>
      {{ t("Projects.items.meesterproef.content.persoonlijkeVisie3") }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
