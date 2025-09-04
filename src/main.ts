import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import i18n from './i18n/i18n'
import 'flag-icons/css/flag-icons.min.css'


createApp(App).use(i18n).mount('#app')

