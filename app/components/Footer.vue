<template>
  <footer class="footer">
    <div class="footer_bg">
      <div class="footer_container container grid">
        <div>
          <h1 class="footer_title">{{ $t("Footer.title") }}</h1>
          <span class="footer_subtitle">{{ $t("Footer.subtitle") }}</span>
        </div>

        <ul class="footer_links">
          <h3 class="footer_column-title">{{ $t("Footer.explore") }}</h3>
          <li>
            <a href="#about" class="footer_link">{{
              $t("Footer.aboutLink")
            }}</a>
          </li>
          <li>
            <a href="#projects" class="footer_link">{{
              $t("Footer.projectsLink")
            }}</a>
          </li>
          <li>
            <a href="#contact" class="footer_link">{{
              $t("Footer.contactLink")
            }}</a>
          </li>
        </ul>

        <ul class="footer_socials">
          <h3 class="footer_column-title">{{ $t("Footer.socials") }}</h3>
          <li>
            <a
            href="https://github.com/ziyasensoy"
            target="_blank"
            class="footer_social"
          >
            <i class="uil uil-github-alt"></i>
            
          </a>
          
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ziyasensoy/"
              target="_blank"
              class="footer_social"
            >
              <i class="uil uil-linkedin-alt"></i>
            </a>
          </li>
        </ul>
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
