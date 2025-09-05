import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import i18n from './i18n/i18n'
import 'flag-icons/css/flag-icons.min.css'
import router from "./router"

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount("#app")

