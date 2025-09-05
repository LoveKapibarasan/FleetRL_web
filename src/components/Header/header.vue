<script setup lang="ts">
import LanguageMenu from "../Menu/i18n.vue"
import Logo from "../Misc/Logo.vue"
const emit = defineEmits(["logout"])
</script>

<template>
  <header class="bg-gray-100 px-6 shadow py-3 flex justify-between items-center">
    <!-- Left side: Logo + Title -->
    <div class="flex items-center gap-4">
      <!-- Animated Logo -->
      <div class="w-16 h-16">
        <Logo />
      </div>      
    </div>
  <div class="flex items-center gap-3">
    <!-- Title -->
    <h1 class="text-2xl font-bold text-gray-800">FleetRL Web</h1>
    <img src="@/assets/logo.png" alt="FleetRL Web" class="h-28 w-auto" />
  </div>
    <!-- Right side: Logout + Language Switcher -->
    <div class="flex items-center gap-4">
      <button
        @click="emit('logout')"
        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        {{ $t("header.logout") }}
      </button>
      <LanguageMenu />
    </div>
  </header>
</template>

