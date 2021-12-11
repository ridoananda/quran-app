<script setup>
import TheNavbar from './components/TheNavbar.vue'
import global from "./global";
import { provide } from "vue";
provide('global', global)

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <TheNavbar />
  <div class="pt-14">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-white;
}
</style>
