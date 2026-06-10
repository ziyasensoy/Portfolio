<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useTheme } from "~/composables/useTheme";

const { initTheme } = useTheme();

const huePickerOpen = ref(false);
const selectedHue = ref(210);

const pickerRef = ref<HTMLElement | null>(null);

const colors = [
  { name: "Pink", hue: 340 },
  { name: "Red", hue: 0 },
  { name: "Coral", hue: 15 },
  { name: "Orange", hue: 25 },
  { name: "Yellow", hue: 50 },
  { name: "Lime", hue: 90 },
  { name: "Green", hue: 142 },
  { name: "Mint", hue: 160 },
  { name: "Teal", hue: 180 },
  { name: "Blue", hue: 210 },
  { name: "Indigo", hue: 230 },
  { name: "Purple", hue: 250 },
];

const toggleHuePicker = () => {
  huePickerOpen.value = !huePickerOpen.value;
};

const changeHue = (hue: number) => {
  selectedHue.value = hue;
  document.documentElement.style.setProperty("--hue-color", String(hue));
  localStorage.setItem("selected-hue", String(hue));
};

const handleClickOutside = (event: MouseEvent) => {
  if (pickerRef.value && !pickerRef.value.contains(event.target as Node)) {
    huePickerOpen.value = false;
  }
};

onMounted(() => {
  initTheme();
  const savedHue = localStorage.getItem("selected-hue");

  if (savedHue) {
    const hue = Number(savedHue);
    selectedHue.value = hue;
    document.documentElement.style.setProperty("--hue-color", savedHue);
  }
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div ref="pickerRef" class="hue-picker">
    <button class="hue-toggle" @click="toggleHuePicker">
      <i class="uil uil-palette"></i>
    </button>

    <div v-if="huePickerOpen" class="hue-dropdown">
      <div class="hue-title">Theme</div>

      <div
        v-for="color in colors"
        :key="color.hue"
        :title="color.name"
        class="hue-color"
        :class="{
          'hue-color--active': selectedHue === color.hue,
        }"
        :style="{
          backgroundColor: `hsl(${color.hue}, 69%, 61%)`,
        }"
        @click="changeHue(color.hue)"
      />
    </div>
  </div>
</template>

<style scoped>
.hue-picker {
  position: relative;
}

.hue-toggle {
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  cursor: pointer;

  font-size: 1.5rem;
  color: var(--title-color);

  transition:
    transform 0.2s ease,
    color 0.2s ease;
}

.hue-toggle:hover {
  transform: scale(1.1);
  color: var(--first-color);
}

.hue-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;

  display: grid;
  grid-template-columns: repeat(6, 24px);
  gap: 0.5rem;

  width: fit-content;

  padding: 0.75rem;

  background: var(--body-bg);
  border: 1px solid color-mix(in srgb, var(--text-color-light) 20%, transparent);
  border-radius: 8px;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.hue-title {
  grid-column: 1 / -1;

  text-align: center;

  color: var(--title-color);
  font-size: var(--small-font-size);
  font-weight: var(--font-semi-bold);

  padding-bottom: 0.5rem;
  margin-bottom: 0.25rem;

  border-bottom: 1px solid
    color-mix(in srgb, var(--text-color-light) 20%, transparent);
}

.hue-color {
  width: 24px;
  height: 24px;

  border-radius: 6px;
  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border 0.2s ease;
}

.hue-color:hover {
  transform: scale(1.15);
}

.hue-color--active {
  border: 2px solid var(--title-color);
  box-shadow: 0 0 0 2px var(--body-bg);
}
</style>
