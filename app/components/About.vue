<template>
  <section class="about section">
    <div class="container">
      <h2 class="section_title">
        <i class="uil uil-user contact_icon"></i>
        {{ t("About.title") }}
      </h2>

      <div class="about_container container grid">
        <img :src="publicPath('/about_photo.png')" alt="about_photo" class="about_img" />

        <div class="about_data">
          <div class="about_description">
            <p>
              <i18n-t keypath="About.Description.line1">
                <template #hva>
                  <a
                    class="about_description-links"
                    href="https://www.hva.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ t("General.hva") }}
                  </a>
                </template>
                <template #vision>
                  <a
                    href="#"
                    class="about_description-links"
                    @click.prevent="openVision"
                  >
                    {{ t("About.Vision.link") }}
                  </a>
                </template>
              </i18n-t>
            </p>

            <p>
              <i18n-t keypath="About.Description.line2">
                <template #altura>
                  <a
                    class="about_description-links"
                    href="https://altura.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ t("General.altura") }}
                  </a>
                </template>
              </i18n-t>
            </p>

            <p>
              <i18n-t keypath="About.Description.line3">
                <template #email>
                  <a
                    href="mailto:zcsensoy@gmail.com"
                    target="_blank"
                    class="about_description-links"
                  >
                    {{ t("About.Description.email") }}
                  </a>
                </template>
              </i18n-t>
            </p>
          </div>
          <div class="socials">
            <a
              :href="publicPath('/resume.pdf')"
              target="_blank"
              rel="noopener noreferrer"
              class="resume_download-button"
            >
              {{ t("General.resume") }}
              <i class="uil uil-file-download"></i>
            </a>

            <span class="social_divider">|</span>

            <a
              href="https://www.linkedin.com/in/ziyasensoy/"
              target="_blank"
              class="social_icon"
            >
              <i class="uil uil-linkedin-alt"></i>
              {{ t("General.Socials.linkedin") }}
            </a>

            <span class="social_divider">|</span>

            <a
              href="https://github.com/ziyasensoy"
              target="_blank"
              class="social_icon"
            >
              <i class="uil uil-github-alt"></i>
              {{ t("General.Socials.github") }}
            </a>

            <span class="social_divider">|</span>

            <a
              href="mailto:zcsensoy@gmail.com"
              target="_blank"
              class="social_icon"
            >
              <i class="uil uil-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="showVision" class="vision_modal" @click.self="closeVision">
        <div
          class="vision_modal_content"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="visionTitleId"
        >
          <button
            type="button"
            class="vision_modal_close"
            :aria-label="t('About.Vision.close')"
            @click="closeVision"
          >
            <i class="uil uil-times"></i>
          </button>

          <h3 :id="visionTitleId" class="vision_modal_title">
            {{ t("About.Vision.title") }}
          </h3>
          <p>{{ t("About.Vision.line1") }}</p>
          <p>{{ t("About.Vision.line2") }}</p>
          <p>{{ t("About.Vision.line3") }}</p>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const showVision = ref(false);
const visionTitleId = "about-vision-title";

function openVision() {
  showVision.value = true;
}

function closeVision() {
  showVision.value = false;
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeVision();
  }
}

watch(showVision, (isOpen) => {
  document.body.style.overflow = isOpen ? "hidden" : "";
});

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>
