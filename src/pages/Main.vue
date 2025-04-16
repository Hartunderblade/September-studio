<script setup>
import '@/assets/styles/mainPage.scss';
import Header from "@/features/mainBlocks/Heder.vue"
import {RouterView} from "vue-router";
import Footer from "@/features/footer/Footer.vue";
import About from "@/features/mainBlocks/About.vue";
import Projects from "@/features/mainBlocks/Projects.vue";
import Why from "@/features/mainBlocks/Why.vue";
import Services from "@/features/mainBlocks/Services.vue";
import Stages from "@/features/mainBlocks/Stages.vue";
import StepsCopy from "@/features/mainBlocks/Steps-copy.vue";
import Questions from "@/features/mainBlocks/Questions.vue";
import Reviews from "@/features/mainBlocks/Reviews.vue";
import Contacts from "@/features/mainBlocks/Contacts.vue";
import TalkProject from "@/features/mainBlocks/TalkProject.vue";
</script>

<template>
  <div class="main">
    <div class="content">
      <div class="container">
        <Header/>
        <div style="display: flex; flex-direction: column; row-gap: 140px ">
          <About/>
          <Projects/>
          <Why/>
          <Services/>
<!--          <Stages/>-->
          <StepsCopy/>
          <Reviews/>
          <Questions/>
          <TalkProject/>
          <Contacts/>
<!--          <RouterView/>-->
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
