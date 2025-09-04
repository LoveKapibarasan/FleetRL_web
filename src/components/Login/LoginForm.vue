<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const username = ref("")
const password = ref("")
const message = ref("")

const emit = defineEmits(["login"])

const login = () => {
  if (username.value && password.value) {
    emit("login", username.value) // pass session info
    message.value = t("login.success", { name: username.value })
  } else {
    message.value = t("login.fail")
  }
}

const nfucLogin = () => {
  emit("login", "NFUC-user") // TODO
  message.value = t("login.nfuc_success")
}

const register = () => {
  message.value = t("login.register_msg")
}

</script>

<template>
  <div class="max-w-sm mx-auto mt-16 p-6 bg-white rounded-xl shadow-md space-y-6">
    <h2 class="text-2xl font-bold text-center text-gray-800">{{ t("login.title") }}</h2>

    <!-- Username -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">{{ t("login.username") }}</label>
      <input
        v-model="username"
        type="text"
        class="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <!-- Password -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">{{ t("login.password") }}</label>
      <input
        v-model="password"
        type="password"
        class="w-full px-3 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <!-- Buttons -->
    <div class="space-y-3">
      <button
        @click="login"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        {{ t("login.login") }}
      </button>

      <button
        @click="nfucLogin"
        class="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition"
      >
        {{ t("login.nfuc") }}
      </button>

      <button
        @click="register"
        class="w-full bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition"
      >
        {{ t("login.register") }}
      </button>
    </div>

    <!-- Message -->
    <p v-if="message" class="mt-4 text-center text-green-600 font-semibold">
      {{ message }}
    </p>
  </div>
</template>
