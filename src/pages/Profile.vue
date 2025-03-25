<script setup>
import { ref } from 'vue';
import {useRouter} from "vue-router";
import ProfileNavigation from "@/features/nav/profileNavigation.vue";
import AboutUser from "@/widgets/AboutUser.vue";
import UserOrders from "@/widgets/UserOrders.vue";
import Footer from "@/features/footer/Footer.vue";
</script>

<template>
      <div class="container">
        <AboutUser/>
        <div class="orders">
          <UserOrders/>
        </div>
      </div>
</template>

<style scoped lang="scss">
</style>