<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-100 shadow-inner py-4 px-6 mt-auto">
    <div class="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-2">
      <!-- Left: Year + Copyright -->
      <span>© {{ year }} FleetRL Web. {{ t("footer.copyright") }}</span>

      <!-- Right: TODO: Change email Contact -->
      <a href="mailto:contact@fleetrl.example"
         class="text-blue-600 hover:underline">
        {{ t("footer.contact") }}
      </a>
    </div>
  </footer>
</template>
