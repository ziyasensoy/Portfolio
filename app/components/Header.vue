<template>
  <header class="header" id="header">
    <nav class="nav container">
      <!-- MENU OPEN BUTTON -->
      <div class="nav_toggle" id="nav-toggle" @click="openMenu">
        <i class="uil uil-apps"></i>
      </div>
      <NuxtLink to="/" class="nav_logo" @click="closeMenu">{{
        $t("General.fullName")
      }}</NuxtLink>

      <!-- MENU -->
      <div :class="['nav_menu', { 'show-menu': menuOpen }]" id="nav-menu">
        <ul class="nav_list grid">
          <li class="nav_item">
            <NuxtLink to="/about" class="nav_link" @click="closeMenu">{{
              $t("Header.aboutLink")
            }}</NuxtLink>
          </li>

          <li class="nav_item">
            <NuxtLink to="/projects" class="nav_link" @click="closeMenu">{{
              $t("Header.projectsLink")
            }}</NuxtLink>
          </li>

          <li class="nav_item">
            <NuxtLink to="/contact" class="nav_link" @click="closeMenu">{{
              $t("Header.contactLink")
            }}</NuxtLink>
          </li>
        </ul>

        <!-- CLOSE BUTTON -->
        <i
          class="uil uil-times nav_close"
          id="nav-close"
          @click="closeMenu"
        ></i>
      </div>

      <div class="nav_btns">
        <!-- HUE CHANGE BUTTON -->
        <HuePicker />
        
        <!-- THEME CHANGE BUTTON -->
        <i :class="['change-theme', icon]" @click="toggleTheme"></i>

        <!-- LANGUAGE SWITCHER -->
        <LangSwitcher />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTheme } from "~/composables/useTheme";

const { icon, toggleTheme, initTheme } = useTheme();

onMounted(() => {
  initTheme();
});

/* MENU STATE */
const menuOpen = ref(false);

/* OPEN MENU */
const openMenu = () => {
  menuOpen.value = true;
};

/* CLOSE MENU */
const closeMenu = () => {
  menuOpen.value = false;
};
</script>
