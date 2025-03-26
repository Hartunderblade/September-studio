<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import ProfileTitleModal from "@/shared/ui/ProfileTitleModal.vue";
import {useRouter} from "vue-router";

const router = useRouter();

const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(["close"]);

</script>

<template>
  <div v-if="show" class="modal-owerlay" @click.self="emit('close')">
    <div class="modal">
      <ProfileTitleModal  title="Выберите и заполните бриф" description="Заполнение брифа позволит определить цели и задачи сайта, рассчитать
      сроки и стоимость разработки, а так же сократит значительное количество вопросов
      и поможет перейти к более детальному обсуждению" />
      <button @click="emit('close')" class="modal__close"><img src="@/assets/icons/close-modal.svg" alt="Закрыть"></button>
      <div class="modal-buttons">
        <button @click="router.push(`/user/briefOne`)">бриф на дизайн сайта<img src="@/assets/icons/arrow-modal.png"></button>
        <button @click="router.push(`/user/briefTwo`)">бриф на лого и фирменный стиль<img src="@/assets/icons/arrow-modal.png"></button>
        <button @click="router.push(`/user/BriefThree`)">Бриф на доработку сайта<img src="@/assets/icons/arrow-modal.png"></button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-owerlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(30, 30, 30, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal {
  position: relative;
  background-color: #ffffff;
  padding: 4rem;
  max-width: 1163px;
  width: 100%;
  border-radius: 1rem;

  &-buttons {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    button {
      font-weight: 300;
      font-size: 28px;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #1b33b2;
      padding-bottom: 0.8rem;
      cursor: pointer;
    }
  }

  &__close {
    position: absolute;
    right: 4rem;
    top: 4rem;
  }
}

@media (max-width: 780px) {
  .modal {
    position: relative;
    background-color: #ffffff;
    padding: 4rem;
    max-width: 1163px;
    width: 100%;
    border-radius: 1rem;

    &-buttons {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
      button {
        font-weight: 300;
        font-size: 28px;
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid #1b33b2;
        padding-bottom: 0.8rem;
        cursor: pointer;
      }
    }

    &__close {
      position: absolute;
      right: 4rem;
      top: 4rem;
    }
  }
}

@media (max-width: 320px) {
  .modal {
    padding: 2rem;
    max-width: 296px;

    &-buttons {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
      button {
        font-size: 1rem;
        text-align: start;

        img {
          width: 2rem;
        }
      }
    }

    &__close {
      position: absolute;
      right: 2rem;
      top: 1rem;
    }
  }
}
</style>