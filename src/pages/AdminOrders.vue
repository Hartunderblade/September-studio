<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter();

const orders = ref([]);
const isLoading = ref(false);

// Функция для получения всех заказов
const fetchOrders = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get('http://localhost:3000/admin/orders', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    orders.value = response.data;
  } catch (error) {
    console.error('Ошибка при получении заказов:', error);
  } finally {
    isLoading.value = false;
  }
};

// Функция для изменения статуса заказа
const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const response = await axios.patch(`http://localhost:3000/admin/orders/${orderId}`, {
      status: newStatus
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    // Обновляем статус заказа в массиве после успешного обновления на сервере
    const updatedOrder = response.data;
    const index = orders.value.findIndex(order => order.id === orderId);
    if (index !== -1) {
      orders.value[index] = updatedOrder; // Обновляем статус
    }
  } catch (error) {
    console.error('Ошибка при обновлении статуса:', error);
  }
};

const openBrief = (order) => {
  console.log('Передаваемые данные:', order);
  router.push({
    name: 'brief-view',
    params: { id: order.id, type: order.brief_type },  // Передаем type через params
    query: { title: order.title }  // title передаем через query
  });
};


onMounted(fetchOrders);
</script>

<template>
  <div class="admin">
    <h2 class="admin__title">Все заявки</h2>
    <div class="content">
      <div v-if="isLoading">Загрузка...</div>
      <div v-else class="items">
        <div v-for="order in orders" :key="order.id" class="item">
          <div>
            <p style="max-width: 240px; font-weight: 500; font-size: 26px; color: #1e1e1e;">{{ order.title }}</p>
            <p style="font-weight: 500; font-size: 18px; margin-top: 0.6rem;">{{ order.user_email }} {{ order.user_name }}</p>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <!-- Выбор статуса через select -->
            <select
                style="font-weight: 600; font-size: 1rem; color: #1b33b2; background: #fff; border: 1px solid #1b33b2; border-radius: 1rem; padding: 12px 1rem"
                v-model="order.status"
                @change="updateOrderStatus(order.id, order.status)">
              <option value="Новое">Новое</option>
              <option value="Завершено">Завершено</option>
              <option value="Отменено">Отменено</option>
            </select>
            <button  @click="openBrief(order)" style="font-weight: 600; font-size: 1rem; color: #ba42ff; background: #ffffff; border: 1px solid #ba42ff; border-radius: 1rem; padding: 12px 32px;">Посмотреть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.admin {
  margin-top: 3.7rem;
  width: 100%;
  height: 100%;
  &__title {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
  }
}

.content {
  width: 100%;
}

.items {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.item {
  max-width: 360px;
  height: 290px;
  width: 100%;
  border: 1px solid #1b33b2;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>