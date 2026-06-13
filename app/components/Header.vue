<template>
  <header class="header" id="header">
    <nav class="nav container">
      <NuxtLink :to="localePath('/')" class="nav_logo" @click="closeMenu">
        {{ t("General.fullName") }}
      </NuxtLink>

      <div class="nav_menu desktop_menu">
        <ul class="nav_list">
          <li class="nav_item">
            <NuxtLink :to="localePath('/about')" class="nav_link">
              {{ t("Header.aboutLink") }}
            </NuxtLink>
          </li>

          <li class="nav_item">
            <NuxtLink :to="localePath('/projects')" class="nav_link">
              {{ t("Header.projectsLink") }}
            </NuxtLink>
          </li>

          <li class="nav_item">
            <NuxtLink :to="localePath('/contact')" class="nav_link">
              {{ t("Header.contactLink") }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="nav_btns desktop-only">
        <HuePicker />
        <i :class="['change-theme', icon]" @click="toggleTheme"></i>
        <LangSwitcher />
      </div>

      <div class="nav_toggle" @click="openMenu">
        <i class="uil uil-bars"></i>
      </div>

      <div :class="['nav_menu mobile_menu', { 'show-menu': menuOpen }]">
        <div class="mobile_menu_header">
          <HuePicker />
          <i :class="['change-theme', icon]" @click="toggleTheme"></i>
          <LangSwitcher />
        </div>

        <ul class="mobile_nav_list">
          <li class="nav_item">
            <NuxtLink :to="localePath('/about')" class="nav_link" @click="closeMenu">
              {{ t("Header.aboutLink") }}
            </NuxtLink>
          </li>

          <li class="nav_item">
            <NuxtLink :to="localePath('/projects')" class="nav_link" @click="closeMenu">
              {{ t("Header.projectsLink") }}
            </NuxtLink>
          </li>

          <li class="nav_item">
            <NuxtLink :to="localePath('/contact')" class="nav_link" @click="closeMenu">
              {{ t("Header.contactLink") }}
            </NuxtLink>
          </li>
        </ul>

        <i class="uil uil-times nav_close" @click="closeMenu"></i>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTheme } from "~/composables/useTheme";

const { icon, toggleTheme, initTheme } = useTheme();
const { t } = useI18n()
const localePath = useLocalePath();

onMounted(() => {
  initTheme();
});

const menuOpen = ref(false);

const openMenu = () => {
  menuOpen.value = true;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>
