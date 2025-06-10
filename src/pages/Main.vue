<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import '@/assets/styles/mainPage.scss';
import Header from "@/features/mainBlocks/Heder.vue"
import Footer from "@/features/footer/Footer.vue";
import About from "@/features/mainBlocks/About.vue";
import Projects from "@/features/mainBlocks/Projects.vue";
import Why from "@/features/mainBlocks/Why.vue";
import Services from "@/features/mainBlocks/Services.vue";
import StepsCopy from "@/features/mainBlocks/Steps-copy.vue";
import Questions from "@/features/mainBlocks/Questions.vue";
import Contacts from "@/features/mainBlocks/Contacts.vue";
import TalkProject from "@/features/mainBlocks/TalkProject.vue";
import ModalCookie from "@/shared/messages/ModalCookie.vue";
import ScrollToTop from "@/shared/ScrollToTop.vue";

const route = useRoute();

onMounted(() => {
  const anchor = route.query.anchor;
  if (anchor) {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
</script>

<template>
  <div class="main">
    <div class="content">
      <div class="container">
        <Header/>
        <div style="display: flex; flex-direction: column; row-gap: 8rem; ">
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="why"><Why /></section>
          <section id="services"><Services /></section>
          <section id="steps"><StepsCopy /></section>
          <section id="questions"><Questions /></section>
          <section id="brief"><TalkProject /></section>
          <section id="contacts"><Contacts /></section>
          <ModalCookie/>
        </div>
      </div>
    </div>
    <Footer/>
    <ScrollToTop />
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
