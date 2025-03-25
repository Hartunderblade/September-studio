<script setup>
import ButtonBackMain from "@/shared/ui/ButtonBackMain.vue";
</script>

<template>
  <div class="admin">
    <ButtonBackMain/>
    <h2 class="admin__title">обратная связь</h2>
  </div>

</template>

<style scoped lang="scss">
.admin {
  margin-top: 3.7rem;
  &__title {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 3rem;
  }
}

.content {
  width: 100%;
}
</style>