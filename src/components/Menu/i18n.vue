<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
const open = ref(false)

const locales = [
  { code: "en", label: "English", flag: "us" },
  { code: "jp", label: "日本語", flag: "jp" },
  { code: "de", label: "Deutsch", flag: "de" }
]

const currentLocale = computed(() => {
  const current = locales.find(l => l.code === locale.value)
  return current ? `${current.label}` : locale.value
})

const setLocale = (code: string) => {
  locale.value = code
  localStorage.setItem("appLocale", code)
  open.value = false
}


onMounted(() => {
  const savedLocale = localStorage.getItem("appLocale")
  if (savedLocale) {
    locale.value = savedLocale
  }
})
</script>

<template>
  <div class="relative inline-block text-left">
    <!-- Trigger Button -->
    <button @click="open = !open"
      class="flex items-center gap-3 px-6 py-4 bg-gray-100 rounded-xl border hover:bg-gray-200 transition text-lg whitespace-nowrap">
      <span v-if="locales.find(l => l.code === locale.value)" 
            :class="['fi fi-' + locales.find(l => l.code === locale.value).flag, 'w-5 h-5']"></span>
      <span>{{ currentLocale }}</span>
      <svg
        class="w-6 h-6 transform transition-transform"
        :class="{ 'rotate-180': open }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div v-if="open" class="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg z-10">
      <div class="py-1">
        <div v-for="lang in locales" :key="lang.code">
          <button @click="setLocale(lang.code)"
            class="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 transition gap-2"
            :class="locale.value === lang.code ? 'font-semibold text-blue-600' : 'text-gray-700'">
            <span :class="['fi fi-' + lang.flag, 'w-5 h-5']"></span>
            <span>{{ lang.label }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
