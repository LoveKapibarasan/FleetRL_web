<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>

<template>
  <aside class="w-48 bg-gray-800 text-white flex flex-col">
    <router-link
      to="/plan"
      class="p-4 hover:bg-gray-700"
      active-class="bg-gray-700 font-bold"
    >
      {{ t("rightSideBar.PlanForm") }}
    </router-link>

    <router-link
      to="/charging"
      class="p-4 hover:bg-gray-700"
      active-class="bg-gray-700 font-bold"
    >
      {{ t("rightSideBar.ChargingStatus") }}
    </router-link>
  </aside>
</template>
