<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";
import ProfileNavigation from "@/features/nav/profileNavigation.vue";
import AboutUser from "@/widgets/AboutUser.vue";
import UserOrders from "@/widgets/UserOrders.vue";
</script>

<template>
  <div class="container">
    <ProfileNavigation/>
    <AboutUser/>
    <div class="orders">
      <UserOrders/>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>