<template>
  <section class="about section" id="about">
    <h2 class="section_title">{{ $t("About.title") }}</h2>
    <span class="section_subtitle">{{ $t("About.subtitle") }}</span>

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
                {{$t("General.altura")}}
              </a>
            </template>
          </i18n-t>
        </p>

        <div class="about_buttons">
          <a
            href=""
            class="button button-flex"
            download="Curriculum Vitae - Ziya Sensoy"
            >{{ $t("About.downloadCv")
            }}<i class="uil uil-download-alt button_icon"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>
