<template>
  <footer class="footer">
    <div class="footer_bg">
      <div class="footer_container container grid">
        <div>
          <h1 class="footer_title">{{ $t("Footer.title") }}</h1>
          <span class="footer_subtitle">{{ $t("Footer.subtitle") }}</span>
        </div>

        <ul class="footer_links">
          <li>
            <a href="#about" class="footer_link">{{
              $t("Footer.aboutLink")
            }}</a>
          </li>
          <li>
            <a href="#skills" class="footer_link">{{
              $t("Footer.skillsLink")
            }}</a>
          </li>
          <li>
            <a href="#minor" class="footer_link">{{
              $t("Footer.minorLink")
            }}</a>
          </li>
          <li>
            <a href="#contact" class="footer_link">{{
              $t("Footer.contactLink")
            }}</a>
          </li>
        </ul>

        <div class="footer_socials">
          <a
            href="https://www.linkedin.com/in/ziyasensoy/"
            target="_blank"
            class="footer_social"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <!-- <a
              href="https://twitter.com/ziyasensoy"
              target="_blank"
              class="footer_social"
            >
              <i class="uil uil-twitter-alt"></i>
            </a> -->
          <a
            href="https://github.com/ziyasensoy"
            target="_blank"
            class="footer_social"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
      </div>

      <p class="footer_copy">
        {{ $t("Footer.copyright", { year: new Date().getFullYear() }) }}
      </p>
      <p class="built-with">
        {{ $t("Footer.builtWith") }}

        <span class="icons">
          <img src="/logos/vue_logo.svg" alt="Vue" />
          <img src="/logos/nuxt_logo.svg" alt="Nuxt" />
          <img src="/logos/ts_logo.svg" alt="TypeScript" />
        </span>
      </p>
    </div>
  </footer>
</template>