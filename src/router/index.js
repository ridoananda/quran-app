import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Bookmark from '../views/Bookmark.vue'
import DetailSurah from '../views/DetailSurah.vue'
import DetailTafsir from '../views/DetailTafsir.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/bookmark',
        name: 'Bookmark',
        component: Bookmark
    },
    {
        path: '/surah/:id',
        name: 'DetailSurah',
        component: DetailSurah
    },
    {
        path: '/tafsir/:id',
        name: 'DetailTafsir',
        component: DetailTafsir
    }
]

const router = createRouter({
    history: createWebHashHistory('pages-quran-app'),
    routes
})
export default router