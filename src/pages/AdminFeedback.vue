<script setup>
import ButtonBackMain from "@/shared/ui/ButtonBackMain.vue";
import { ref, onMounted } from 'vue';
import axios from 'axios';

const feedbacks = ref([]);

const fetchFeedbacks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/admin/feedback');
    feedbacks.value = response.data;
  } catch (error) {
    console.error('Ошибка при получении отзывов:', error);
  }
};

onMounted(fetchFeedbacks);
</script>

<template>
  <div class="admin">
    <ButtonBackMain/>
    <h2 class="admin__title">обратная связь</h2>
    <div class="admin-feedback">
      <div v-if="feedbacks.length === 0">Нет отзывов</div>
      <div v-else>
        <div v-for="feedback in feedbacks" :key="feedback.id" style="display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 3rem; border-top: 1px solid #4a62e3; padding-top: 1rem;">
          <div class="item" style="margin-bottom: 1rem;">
            <span>ФИО</span>
            <p style="font-size: 1.4rem; font-weight: 600;">{{ feedback.full_name }}</p>
          </div>
          <div style="margin-bottom: 1rem;" class="item">
            <span>Телефон</span>
            <p style="font-size: 1.4rem; font-weight: 600;">{{ feedback.phone }}</p>
          </div>
          <div style="margin-bottom: 1rem;" class="item">
            <span>Email</span>
            <p style="font-size: 1.4rem; font-weight: 600;">{{ feedback.email }}</p>
          </div>
          <div style="margin-bottom: 1rem;" class="item">
            <span>Бюджет</span>
            <p style="font-size: 1.4rem; font-weight: 600;">{{ feedback.budget }}</p>
          </div>
          <div style="margin-bottom: 1rem;" class="item">
            <span>Описание</span>
            <p style="font-size: 1.4rem; font-weight: 600;">{{ feedback.description }}</p>
          </div>
          <div style="margin-bottom: 1rem;" class="item">
            <span>Дата</span>
            <p style="font-size: 1.4rem; font-weight: 600;">{{ new Date(feedback.created_at).toLocaleString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.admin {
  margin-top: 3.7rem;
  margin-bottom: 2rem;
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