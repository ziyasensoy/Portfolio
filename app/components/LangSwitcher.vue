<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<template>
  <div class="language_switcher">
    <button
      class="lang_button"
      @click="language = language === 'nl-NL' ? 'en-US' : 'nl-NL'"
    >
      <img
        :src="publicPath(language === 'nl-NL' ? '/flags/gb.svg' : '/flags/nl.svg')"
        :alt="language === 'nl-NL' ? 'English' : 'Nederlands'"
      />
    </button>
  </div>
</template>
