<script setup>
import { RouterView } from 'vue-router'
import ProfileNavigation from "@/features/nav/profileNavigation.vue";
import Footer from "@/features/footer/Footer.vue";
</script>

<template>
  <div class="profile">
    <div class="content">
      <div class="container">
        <ProfileNavigation/>
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