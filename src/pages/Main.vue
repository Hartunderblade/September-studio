<script setup>
import '@/assets/styles/mainPage.scss';
import MainNavigation from "@/features/nav/mainNavigation.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <div class="container">
    <MainNavigation/>
    <RouterView />
  </div>
</template>

