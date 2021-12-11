import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = 'https://equran.id/api/'
import './index.css'

createApp(App).use(router).mount('#app')
