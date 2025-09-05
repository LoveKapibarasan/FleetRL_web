<script setup lang="ts">
const gridSize = 10
const cells = Array.from({ length: gridSize * gridSize }, (_, i) => {
  const row = Math.floor(i / gridSize) + 1
  const col = (i % gridSize) + 1
  return { id: i, row, col }
})
</script>

<template>
  <div class="relative w-80 h-80">
    <!-- Grid -->
    <div
      class="absolute inset-0 grid"
      :style="{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`
      }"
    >
      <div
        v-for="cell in cells"
        :key="cell.id"
        class="w-full h-full animate-gradient-wave"
        :style="{
          animationDelay: `${(cell.row + cell.col) * 150}ms`,
          opacity: 1 - (cell.row + cell.col) * 0.03
        }"
      ></div>
    </div>

    <!-- Text -->
    <div class="absolute inset-0 flex flex-col items-center justify-center font-bold text-white drop-shadow-lg">
      <span class="text-4xl">AI-Charge</span>
      <span class="text-lg font-medium">Technologies</span>
    </div>
  </div>
</template>

<style>
@keyframes gradientWave {
  0%   { background: linear-gradient(135deg, #ff0000, #ff7f7f); }
  40%  { background: linear-gradient(135deg, #ff0000, #ff7f7f); } /* Red */
  50%  { background: linear-gradient(135deg, #00cc00, #66ff66); }
  90%  { background: linear-gradient(135deg, #00cc00, #66ff66); } /* Green */
  100% { background: linear-gradient(135deg, #ff0000, #ff7f7f); }
}

.animate-gradient-wave {
  animation: gradientWave 8s infinite ease-in-out;
}
</style>
