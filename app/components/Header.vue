<template>
  <header class="header" id="header">
    <nav class="nav container">
      <a href="#home" class="nav_logo"> {{ $t("Header.name") }} </a>

      <!-- MENU -->
      <div :class="['nav_menu', { 'show-menu': menuOpen }]" id="nav-menu">
        <ul class="nav_list grid">
          <li class="nav_item">
            <a href="#about" class="nav_link" @click="closeMenu">
              <i class="uil uil-user nav_icon"></i> {{ $t("Header.aboutLink") }}
            </a>
          </li>

          <li class="nav_item">
            <a href="#projects" class="nav_link" @click="closeMenu">
              <i class="uil uil-bag nav_icon"></i> {{ $t("Header.projectsLink") }}
            </a>
          </li>

          <li class="nav_item">
            <a href="#contact" class="nav_link" @click="closeMenu">
              <i class="uil uil-message nav_icon"></i> {{ $t("Header.contactLink") }}
            </a>
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
        <!-- THEME CHANGE BUTTON -->
        <i :class="['change-theme', icon]" @click="toggleTheme"></i>

        <!-- LANGUAGE SWITCHER -->
        <LangSwitcher />

        <!-- MENU OPEN BUTTON -->
        <div class="nav_toggle" id="nav-toggle" @click="openMenu">
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { icon, toggleTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})

/* MENU STATE */
const menuOpen = ref(false)

/* OPEN MENU */
const openMenu = () => {
  menuOpen.value = true
}

/* CLOSE MENU */
const closeMenu = () => {
  menuOpen.value = false
}
</script>