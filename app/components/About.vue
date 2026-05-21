<template>
  <section class="about section">
    <div class="container">
      <h2 class="section_title">
        <i class="uil uil-user contact_icon"></i>
        {{ $t("About.title") }}
      </h2>

      <div class="about_container container grid">
        <img src="/photo4.jpg" alt="photo4" class="about_img" />

        <div class="about_data">
          <p class="about_description">
            <i18n-t keypath="About.description">
              <template #hva>
                <a
                  class="about_link"
                  href="https://www.hva.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t("General.hva") }}
                </a>
              </template>

              <template #altura>
                <a
                  class="about_link"
                  href="https://altura.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ $t("General.altura") }}
                </a>
              </template>
            </i18n-t>
          </p>
          <div class="home_socials">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="home_resume-download"
            >
              {{ $t("General.resume") }}
              <i class="uil uil-file-download"></i>
            </a>

            <span class="social_divider">|</span>

            <a
              href="https://www.linkedin.com/in/ziyasensoy/"
              target="_blank"
              class="home_social-icon"
            >
              <i class="uil uil-linkedin-alt"></i>
              {{ $t("General.Socials.linkedin") }}
            </a>

            <span class="social_divider">|</span>

            <a
              href="https://github.com/ziyasensoy"
              target="_blank"
              class="home_social-icon"
            >
              <i class="uil uil-github-alt"></i>
              {{ $t("General.Socials.github") }}
            </a>

            <span class="social_divider">|</span>

            <a
              href="mailto:zcsensoy@gmail.com"
              target="_blank"
              class="home_social-icon"
            >
              <i class="uil uil-envelope"></i>
            </a>

            <span class="social_divider">|</span>

            <NuxtLink to="/about" class="home_social-icon"
              >{{ $t("Hero.more") }} <i class="uil uil-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
