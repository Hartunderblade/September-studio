<script setup>
import { RouterView } from 'vue-router'
import adminNavigation from "@/features/nav/adminNavigation.vue";
import Footer from "@/features/footer/Footer.vue";
</script>

<template>
  <div class="profile">
    <div class="content">
      <div class="container">
        <adminNavigation/>
        <div>
          <RouterView/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<style scoped lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>