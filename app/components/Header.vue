<template>
    <header class="header" id="header">
      <nav class="nav container">
        <a href="#home" class="nav_logo">Ziya Şensoy</a>

        <div class="nav_menu" id="nav-menu">
          <ul class="nav_list grid">
            <li class="nav_item">
              <a href="#about" class="nav_link">
                <i class="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li class="nav_item">
              <a href="#skills" class="nav_link">
                <i class="uil uil-award nav_icon"></i> Skills
              </a>
            </li>

            <li class="nav_item">
              <a href="#minor" class="nav_link">
                <i class="uil uil-award nav_icon"></i> VID Minor
              </a>
            </li>

            <li class="nav_item">
              <a href="#contact" class="nav_link">
                <i class="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav_close" id="nav-close"></i>
        </div>

        <div class="nav_btns">
          <!--theme change button-->
          <i :class="['change-theme', icon]" @click="toggleTheme"></i>

          <!-- Language switcher -->
          <div class="language_switcher">
            <button class="lang_button" data-lang="en">
              <img src="/flags/gb.svg" alt="English" />
            </button>

            <button class="lang_button" data-lang="nl">
              <img src="/flags/nl.svg" alt="Nederlands" />
            </button>
          </div>

          <div class="nav_toggle" id="nav-toggle">
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { icon, toggleTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>