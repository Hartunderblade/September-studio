<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from "axios";

const route = useRoute();
const { id, type } = route.params;  // Извлекаем параметры id и type из params
const title = route.query.title;  // title передаем через query

const brief = ref(null);
const briefTitle = title || 'Бриф';  // Название брифа

const briefFieldLabels = {
  title: 'Название брифа',
  description: 'Описание',
  // добавь другие поля по мере необходимости
};

// Получаем данные по type и id
onMounted(async () => {
  const token = localStorage.getItem('token');
  try {
    // Проверяем, что type и id корректны
    if (!type || !id) {
      console.error('Ошибка: Неверно переданы параметры type или id');
      return;
    }

    const response = await axios.get(`http://localhost:3000/order/${type}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    brief.value = response.data;
  } catch (error) {
    console.error('Ошибка загрузки брифа:', error);
  }
});
</script>


<template>
  <div class="brief">
    <h2>{{ title }}</h2>
    <div v-if="brief">
      <div v-for="(value, key) in brief" :key="key" class="brief__item">
        <strong>{{ briefFieldLabels[key] || key }}:</strong>
        <p>{{ value }}</p>
      </div>

      <div>
        <h2>{{ briefTitle }}</h2>
        <div class="brief-view">
          <h2>Информация о брифе</h2>
          <div v-for="(value, key) in brief" :key="key">
            <strong>{{ key }}:</strong> {{ value }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Загрузка...
    </div>
  </div>
</template>
