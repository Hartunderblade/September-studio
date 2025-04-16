<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import BriefTitle from "@/shared/ui/BriefTitle.vue";

const route = useRoute();
const briefTitle = route.query.title || 'Бриф';


const brief = ref(null);

const fieldNames = {
  name: 'Имя:',
  phone: 'Телефон:',
  email: 'Почта:',
  contact_method: 'Способ связи:',
  competitors_adv: 'Преимущества конкурентов:',
  competitors_disadv: 'Недостатки конкурентов:',
  competitors_links: 'Ссылки конкурентов:',
  target_gender: 'Пол аудитории:',
  target_age: 'Возраст аудитории:',
  target_interests: 'Интересы:',
  target_needs: 'Потребности:',
  target_motivators: 'Мотиваторы:',
  target_blockers: 'Что останавливает:',
  usage: 'Где будет использоваться логотип:',
  format: 'Формат логотипа:',
  association: 'Ассоциации:',
  colors: 'Цвета:',
  company_info: 'Информация о компании:',
  company_name: 'Название компании:',
  id: '№:',
  user_id: 'Имя заказчика:',
  product_info: 'Информация о проекте:',
  website: 'Ссылка на сайт:',
  socials: 'Социальные сети:',
  budget: 'Бюджет:',
  launch_date: 'Дата запуска:',
  additional_info: 'Дополнительная информация:',
  status: 'Статус:',
  site_url: 'Ссылка на сайт:',
  revision_description: 'Описание:',
  deadline: 'Срок:'
};

onMounted(async () => {
  const token = localStorage.getItem('token');
  const { type, id } = route.params;
  try {
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
  <div v-if="brief" class="brief" style="margin-bottom: 3rem;">
    <div class="one">
      <div style="margin-top: 3rem;" class="header">
        <h2 style="font-weight: 600; font-size: 3rem; text-transform: uppercase; ">{{ briefTitle }}</h2>
        <p>Информация о заказе</p>
      </div>
      <div class="content">
        <div class="form">
          <div v-for="(value, key) in brief" :key="key" class="form-items" style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #4a62e3; display: flex; column-gap: 3rem;">
            <img style="width: 2rem; height: 2rem;" src="@/assets/images/main-star.svg">
<!--            <p style="font-size: 1.6rem;">{{ value }}</p>-->
            <p style="max-width: 180px; width: 100%; font-weight: 600; font-size: 1.4rem;">{{ fieldNames[key] || key }}</p>
            <p style="font-size: 1.6rem;">{{ value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
