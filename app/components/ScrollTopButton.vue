<template>
    <a href="#" class="scrollup" id="scroll-up">
      <i class="uil uil-arrow-up scrollup_icon"></i>
    </a>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount } from 'vue'
  
  let scrollUpEl = null
  
  const handleScroll = () => {
    if (!scrollUpEl) return
  
    if (window.scrollY >= 560) {
      scrollUpEl.classList.add('show-scroll')
    } else {
      scrollUpEl.classList.remove('show-scroll')
    }
  }
  
  onMounted(() => {
    scrollUpEl = document.getElementById('scroll-up')
    window.addEventListener('scroll', handleScroll)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>