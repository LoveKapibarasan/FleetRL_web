<script setup lang="ts">
//Δt = 5000 / (gridSize * 2 - 1)
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
        class="w-full h-full animate-gradient-square"
        :style="{
          animationDelay: `${(cell.row + cell.col - 2) * (5000 / (gridSize * 2 - 1))}ms`
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
@keyframes gradientShift {
  0%   { background: linear-gradient(135deg, red, orange); }
  33%  { background: linear-gradient(135deg, blue, cyan); }
  66%  { background: linear-gradient(135deg, green, lime); }
  100% { background: linear-gradient(135deg, red, orange); }
}

.animate-gradient-square {
  background: linear-gradient(135deg, red, orange); 
  animation: gradientShift 5s infinite;
}

</style>


.animate-gradient-square {
  background: red !important;
}
