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

// For Logout
const handleLogout = () => {
  localStorage.removeItem("sessionUser")
  isLoggedIn.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- ヘッダー -->
    <Header @logout="handleLogout" />

    <!-- メイン部分: コンテンツ + サイドバー -->
    <div class="flex flex-1 flex-row-reverse">
      <!-- 右サイドバー（ログイン時のみ表示） -->
      <RightSideBar v-if="isLoggedIn" />

      <!-- メインコンテンツ -->
      <main class="flex-1 flex items-center justify-center p-6">
        <PlanForm v-if="isLoggedIn" />
        <LoginForm v-else @login="handleLogin" />
      </main>
    </div>

    <!-- フッター -->
    <Footer />
  </div>
</template>


