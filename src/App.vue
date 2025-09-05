<script setup lang="ts">
import { ref, onMounted } from "vue"
import Header from "./components/Header/header.vue"
import Footer from "./components/Footer/footer.vue"
import PlanForm from "./components/Main/PlanForm.vue"
import LoginForm from "./components/Login/LoginForm.vue"
import RightSideBar from "./components/RightSideBar/RightSideBar.vue"
import './style.css'

const isLoggedIn = ref(false)

onMounted(() => {
  // session check（localStorage）
  isLoggedIn.value = !!localStorage.getItem("sessionUser")
})

// get event from LoginForm
const handleLogin = (user: string) => {
  localStorage.setItem("sessionUser", user)
  isLoggedIn.value = true
}

const handleLogout = () => {
  localStorage.removeItem("sessionUser")
  isLoggedIn.value = false
  location.href = "/login"
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header @logout="handleLogout" />

    <div class="flex flex-1 flex-row-reverse">
      <RightSideBar v-if="isLoggedIn" />
      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
    <Footer/>
  </div>
</template>


