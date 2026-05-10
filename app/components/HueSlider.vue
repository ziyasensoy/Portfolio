<script setup lang="ts">
import { ref, onMounted } from "vue";

const hue = ref(190);

const updateHue = () => {
  document.documentElement.style.setProperty(
    "--hue-color",
    hue.value.toString()
  );

  localStorage.setItem("theme-hue", hue.value.toString());
};

onMounted(() => {
  const savedHue = localStorage.getItem("theme-hue");

  if (savedHue) {
    hue.value = Number(savedHue);
    updateHue();
  }
});
</script>

<template>
  <div class="hue-picker">
    <input
      v-model="hue"
      type="range"
      min="0"
      max="360"
      class="hue-slider"
      @input="updateHue"
    />
  </div>
</template>

<style scoped>
.hue-picker {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
}

/* verticale slider */
.hue-slider {
  -webkit-appearance: none;
  appearance: none;

  width: 180px;
  height: 10px;

  transform: rotate(90deg);

  border-radius: 999px;
  outline: none;

  background: linear-gradient(
    to right,
    #ff0000,
    #ffff00,
    #00ff00,
    #00ffff,
    #0000ff,
    #ff00ff,
    #ff0000
  );
}

/* draggable circle */
.hue-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;

  width: 20px;
  height: 20px;
  border-radius: 50%;

  background: white;
  border: 3px solid #111;

  cursor: pointer;

  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}
</style>