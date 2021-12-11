<script setup>
import CardSurah from '../components/CardSurah.vue'

import { onBeforeMount, ref, reactive } from 'vue'
import { inject } from "vue";
const state = inject('global')
state.getSurah()
const search = ref('')
const editName = ref(false)

const searchSurah = () => {
    setTimeout(() => {
        if (search.value.length > 0) {
            state.surahFiltered.value = state.surah.value.filter(result => result.nama_latin.toLowerCase().replace('-', '').match(search.value.toLowerCase()))
        } else {
            state.surahFiltered.value = state.surah.value
        }
    }, 1000)
}
const changeName = () => {
    editName.value = !editName.value
    localStorage.setItem('name', state.name.value)
}
</script>
<template>
    <div class="px-4 md:w-10/12 mx-auto">
        <!-- Introduce -->
        <div class="text-text-color mt-3 font-semibold">Assalamu'alaikum</div>
        <div class="flex items-center font-bold font-head text-primary text-2xl">
            <input
                v-if="!state.name.value.length || editName"
                type="text"
                autofocus
                @focusout.enter="changeName"
                class="focus:outline-none focus:ring rounded-md p-1 px-2 text-sm text-gray-500 border mt-2"
                v-model="state.name.value"
            />
            <div class="flex items-center" v-if="!editName">
                {{ state.name.value }}
                <svg
                    @click="editName = true"
                    class="ml-1 cursor-pointer"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.64645 4.64645L4.03816 9.25473C4.02714 9.26575 4.0162 9.27668 4.00533 9.28752C3.84286 9.44965 3.69903 9.59317 3.59767 9.7722C3.4963 9.95123 3.44723 10.1484 3.3918 10.3711C3.38809 10.386 3.38436 10.401 3.38057 10.4162L3.05038 11.7369C3.04816 11.7458 3.04593 11.7547 3.04369 11.7636C3.00445 11.9203 2.96254 12.0877 2.9488 12.2282C2.93366 12.3829 2.93719 12.644 3.1466 12.8534C3.35601 13.0628 3.61706 13.0663 3.7718 13.0512C3.91233 13.0375 4.07967 12.9955 4.23636 12.9563C4.2453 12.9541 4.2542 12.9518 4.26306 12.9496L5.58384 12.6194C5.59896 12.6156 5.61397 12.6119 5.62886 12.6082C5.8516 12.5528 6.04877 12.5037 6.2278 12.4023C6.40683 12.301 6.55036 12.1571 6.71248 11.9947C6.72332 11.9838 6.73425 11.9729 6.74527 11.9618L11.3536 7.35355C11.3701 7.33701 11.3865 7.32065 11.4027 7.30446C11.6262 7.08162 11.8194 6.88892 11.9298 6.66602C12.1378 6.24636 12.1378 5.75364 11.9298 5.33398C11.8194 5.11108 11.6262 4.91838 11.4027 4.69554C11.3865 4.67935 11.3701 4.66299 11.3536 4.64645C11.337 4.62991 11.3207 4.61351 11.3045 4.59727C11.0816 4.37384 10.8889 4.18064 10.666 4.07018C10.2464 3.86222 9.75364 3.86222 9.33398 4.07018C9.11108 4.18064 8.91838 4.37384 8.69554 4.59727C8.67934 4.61351 8.66299 4.62991 8.64645 4.64645Z"
                        stroke="#828282"
                    />
                    <path
                        d="M8.33334 5.00002L10.3333 3.66669L12.3333 5.66669L11 7.66669L8.33334 5.00002Z"
                        fill="#828282"
                    />
                </svg>
            </div>
        </div>
        <!-- Search -->
        <div
            class="flex items-center border border-text-color rounded-xl my-4 py-1.5 px-2 w-full md:w-6/12"
        >
            <div>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="11" cy="11" r="7" stroke="#828282" stroke-width="2" />
                    <path
                        d="M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11"
                        stroke="#828282"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                    <path
                        d="M20 20L17 17"
                        stroke="#828282"
                        stroke-width="2"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
            <div class="flex w-full">
                <input
                    v-model="search"
                    type="text"
                    @keyup="searchSurah"
                    placeholder="Cari Surah . . ."
                    class="w-full border-0 ring-0 focus:outline-none text-text-color ml-1 placeholder-text-color"
                />
            </div>
        </div>
        <!-- Card Surah -->
        <div class="flex flex-wrap">
            <!-- <div class="flex items-center"> -->
            <CardSurah
                v-for="(result, index) in state.surahFiltered.value"
                :key="result.nomor"
                :surah="result"
            />
            <!-- </div> -->
        </div>
    </div>
</template>