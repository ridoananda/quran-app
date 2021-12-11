import { reactive, toRefs, computed } from 'vue';
import axios from 'axios'

const state = reactive({
    surah: [],
    detailSurah: [],
    surahFiltered: [],
    tafsir: [],
    name: localStorage.getItem('name_quran_app') || 'Rido Ananda',
    bookmarks: JSON.parse(localStorage.getItem('bookmark_quran_app') || '[]'),
})
const methods = {
    getSurah : async () => {
        try {
            const { data } = await axios.get(`surat`)
            state.surah = data
            state.surahFiltered = data
        } catch (error) {
            console.log(error.response.data);
        }
    },
    getDetailSurah : async (id) => {
        try {
            const { data } = await axios.get(`surat/${id}`)
        state.detailSurah = data
        } catch (error) {
            console.log(error.response.data);
        }
    },
    getTafsir : async (id) => {
        try {
            const { data } = await axios.get(`tafsir/${id}`)
            state.detailSurah = data
        } catch (error) {
            console.log(error.response.data);
        }
    },
    addBookmark : (i) => {
        const data = JSON.parse(localStorage.getItem('bookmark_quran_app') || '[]')
        const item = data.indexOf(i)
        if (item === -1) {
            data.push(i)
        } else {
            data.splice(item, 1)
        }
        localStorage.setItem('bookmark_quran_app', JSON.stringify(data))
        state.bookmarks = data
    }
}
export default { ...toRefs(state), ...methods}