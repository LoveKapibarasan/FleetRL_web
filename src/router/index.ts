import { createRouter, createWebHistory } from "vue-router"
import PlanForm from "../components/Main/PlanForm.vue"
import ChargingStatus from "../components/Misc/ChargingStatus.vue"
import LoginForm from "../components/Login/LoginForm.vue"

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginForm },
  { path: "/plan", component: PlanForm, meta: { requiresAuth: true } },
  { path: "/charging", component: ChargingStatus, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  const isLoggedIn = !!localStorage.getItem("sessionUser")
  console.log("isLoggedIn",isLoggedIn)
  if (to.meta.requiresAuth && !isLoggedIn) {
    next("/login")
  } else {
    next()
  }
})

export default router

