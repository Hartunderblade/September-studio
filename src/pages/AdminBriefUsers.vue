<script setup>
import {computed, onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const brief = ref(null);
const token = localStorage.getItem('token');

const briefTitle = computed(() => {
  return {
    identity: 'Бриф на лого и фирменный стиль',
    design: 'Бриф на дизайн сайта без разработки',
    edit: 'Бриф на полную доработку сайта'
  }[route.params.type] || 'Бриф';
});

const briefFieldLabels = {
  company_name: 'Название компании',
  user_id: 'Номер заказа',
  name: 'Имя:',
  phone: 'Телефон:',
  email: 'Почта:',
  contact: 'Способ связи:',
  competitors_adv: 'Преимущества конкурентов:',
  disadv: 'Недостатки конкурентов:',
  competitors_links: 'Ссылки конкурентов:',
  gender: 'Пол аудитории:',
  age: 'Возраст аудитории:',
  interests: 'Интересы:',
  needs: 'Потребности:',
  motivators: 'Мотиваторы:',
  blockers: 'Что останавливает:',
  usage: 'Где будет использоваться логотип:',
  format: 'Формат логотипа:',
  association: 'Ассоциации:',
  colors: 'Цвета:',
  info: 'Информация о компании:',
  company: 'Название компании:',
  id: '№:',
  website: 'Имя заказчика:',
  competitors: 'Информация о проекте:',
  url: 'Ссылка на сайт:',
  social: 'Социальные сети:',
  budget: 'Бюджет:',
  date: 'Дата запуска:',
  additional: 'Дополнительная информация:',
  status: 'Статус:',
  links: 'Ссылка на сайт:',
  description: 'Описание:',
  deadline: 'Срок:',
  created_at: 'Заполнено'
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr; // если невалидная дата

  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

onMounted(async () => {
  const { type, id } = route.params;

  try {
    const response = await axios.get(`http://localhost:3000/order/${type}/${id}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      },
    });

    brief.value = response.data;
  } catch (error) {
    console.error('Ошибка при загрузке брифа:', error);
  }
});
</script>


<template>
  <div class="brief">
    <div style="margin-top: 3rem;" class="header">
      <h2>{{ briefTitle }}</h2>
      <p>Информация о заказе</p>
    </div>
    <div class="form" v-if="brief">
      <div v-for="(value, key) in brief" :key="key" class="form-items">
        <img src="@/assets/images/main-star.svg">
        <p style="width: 20%; font-weight: 600; font-size: 1.4rem;">{{ briefFieldLabels[key] || key }}</p>
        <p style="font-size: 1.6rem;">{{ key === 'created_at' ? formatDate(value) : value }}</p>
      </div>
    </div>
    <div v-else>
      Загрузка...
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-weight: 600;
  font-size: 3rem;
  text-transform: uppercase;
}
.form {
  &-items {
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #4a62e3;
    display: flex;
    column-gap: 3rem;
    align-items: start;
    text-align: start;

    img {
      width: 2rem;
      height: 2rem;
    }
  }
}

.form-content {
  display: flex;
  //flex-wrap: wrap;
  column-gap: 3rem;
}

@media (max-width: 320px) {
  h2 {
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    text-align: center;
  }

  .form {
    &-items {
      margin-top: 2rem;
      padding-top: 1rem;
      text-align: start;

      flex-direction: column;
      row-gap: 1rem;


      border-top: none;
      border-bottom: 1px solid #4a62e3;

      img {
        width: 1rem;
        height: 1rem;
      }
    }
  }
}

@media (max-width: 780px) {
  h2 {
    font-weight: 600;
    font-size: 22px;
    text-transform: uppercase;
    text-align: center;
  }
  .form {
    &-items {
      margin-top: 2rem;
      padding-top: 1rem;
      text-align: start;

      flex-direction: column;
      row-gap: 1rem;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
