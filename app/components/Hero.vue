<template>
  <section class="home section" id="home">
    <div class="home_container container grid">
      <div class="home_content grid">
        <div class="home_data">
          <div class="home_title-wrapper">
            <h1 class="home_title" data-key="home_title">
              {{ $t("Hero.homeTitle") }}
            </h1>

            <span class="home_title-name">
              {{ $t("General.firstName") }}
            </span>
          </div>
          <div class="home_description">
            <i18n-t keypath="Hero.homeDescription">
              <template #hva>
                <a
                  class="home_description-links"
                  href="https://www.hva.nl"
                  target="_blank"
                >
                  {{ $t("General.hva") }}
                </a>
              </template>

              <template #altura>
                <a
                  class="home_description-links"
                  href="https://altura.io"
                  target="_blank"
                >
                  {{ $t("General.altura") }}
                </a>
              </template>
            </i18n-t>
          </div>
          <div class="home_socials">
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
