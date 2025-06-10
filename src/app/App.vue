<script setup>
import { RouterView } from 'vue-router';
import Footer from "@/features/footer/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <RouterView />
    </div>
    <div class="footer">
<!--      <Footer/>-->
    </div>
  </div>

</template>

<style scoped lang="scss">
//.wrapper {
//  display: flex;
//  flex-direction: column;
//  min-height: 100vh;
//}

.content {
  flex: 1;
}
</style>
