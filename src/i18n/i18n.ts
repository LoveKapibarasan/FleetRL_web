import { createI18n } from "vue-i18n"

// Read all locales/en/*.json, locales/ja/*.json, locales/de/*.json
const modules = import.meta.glob("./locales/*/*.json", { eager: true })

const messages: Record<string, any> = {}

for (const path in modules) {
  // Example: "./locales/en/login.json" → ["", "locales", "en", "login.json"]
  const [, , locale, file] = path.split("/")
  const key = file.replace(".json", "") // "login.json" → "login"
  messages[locale] ??= {}
  messages[locale][key] = (modules[path] as any).default
}

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages
})

export default i18n


