<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const departureTime = ref("")
const targetSoc = ref(80)
const message = ref("")

const submitPlan = () => {
  message.value = t("plan.success")
}
</script>

<template>
  <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
      {{ t("plan.title") }}
    </h2>

    <form @submit.prevent="submitPlan" class="space-y-5">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          {{ t("plan.departure") }}
        </label>
        <input type="datetime-local" v-model="departureTime"
          class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          {{ t("plan.target") }}
        </label>
        <input type="number" v-model="targetSoc" min="0" max="100"
          class="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2" />
      </div>

      <button type="submit"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition">
        {{ message ? t("plan.resend") : t("plan.submit") }}
      </button>
    </form>

    <p v-if="message" class="mt-4 text-center text-green-600 font-semibold">
      {{ message }}
    </p>
  </div>
</template>

