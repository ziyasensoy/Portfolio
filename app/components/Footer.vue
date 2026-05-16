<template>
  <footer class="footer">
    <div class="footer_container container grid">
      <div class="footer_info">
        <p class="footer_copy">
          {{ $t("Footer.copyright", { year: new Date().getFullYear() }) }}
        </p>

        <span class="footer_separator">-</span>

        <p class="built-with">
          {{ $t("Footer.builtWith") }}

          <span class="icons">
            <img src="/logos/vue_logo.svg" alt="Vue" />Vue
            <img src="/logos/nuxt_logo.svg" alt="Nuxt" /> Nuxt
            <img src="/logos/ts_logo.svg" alt="TypeScript" /> TypeScript
          </span>
        </p>
      </div>

      <div class="footer_widgets">
        <div class="footer_time">
          <p>{{ $t("Footer.localTime") }}</p>
          <i class="uil uil-clock"></i>
          <span>{{ time }}</span>
        </div>

        <span class="footer_separator">-</span>

        <ul class="footer_socials">
          <li>
            <a
              href="https://www.linkedin.com/in/ziyasensoy/"
              target="_blank"
              class="footer_social"
            >
              <i class="uil uil-linkedin-alt"></i>
            </a>
          </li>

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
              href="mailto:zcsensoy@gmail.com"
              target="_blank"
              class="footer_social"
            >
              <i class="uil uil-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const time = ref("");

const updateTime = () => {
  const now = new Date();

  time.value = new Intl.DateTimeFormat("nl-NL", {
    timeZone: "Europe/Amsterdam",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);
};

let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  updateTime();
  interval = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>
