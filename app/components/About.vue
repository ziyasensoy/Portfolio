<template>
  <section class="about section" id="about">
    <h2 class="section_title">{{ $t("About.title") }}</h2>
    <span class="section_subtitle">{{ $t("About.subtitle") }}</span>

    <div class="about_container container grid">
      <img src="/photo4.jpg" alt="photo4" class="about_img" />

      <div class="about_data">
        <p class="about_description">
          {{ $t("About.description") }}
        </p>

        <div class="about_info">
          <div>
            <span class="about_info-title">{{ $t("About.experience") }}</span>
            <span class="about_info-name">{{ $t('About.experienceInfo').split(' ')[0] }} <br /> {{ $t('About.experienceInfo').split(' ')[1] }}

            </span>
          </div>

          <div>
            <span class="about_info-title">{{ $t("About.projects") }}</span>
            <span class="about_info-name">{{ $t('About.projectsInfo').split(' ')[0] }} <br /> {{ $t('About.projectsInfo').split(' ')[1] }}

            </span>
          </div>
        </div>

        <div class="about_buttons">
          <a
            href=""
            class="button button-flex"
            download="Curriculum Vitae - Ziya Sensoy"
            >{{ $t("About.downloadCv") }}<i class="uil uil-download-alt button_icon"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>
