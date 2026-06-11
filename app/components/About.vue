<template>
  <section class="about section">
    <div class="container">
      <h2 class="section_title">
        <i class="uil uil-user contact_icon"></i>
        {{ t("About.title") }}
      </h2>

      <div class="about_container container grid">
        <img src="/about_photo.png" alt="about_photo" class="about_img" />

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
              href="/resume.pdf"
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
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
