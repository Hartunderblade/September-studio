<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter();

const orders = ref([]);
const isLoading = ref(false);

const statusClass = (status) => {
  return {
    'Новое': 'status-new',
    'В работе': 'status-work',
    'Завершено': 'status-completed',
    'Отменено': 'status-canceled'
  }[status] || '';
};

const fetchAllOrders = async () => {
  isLoading.value = true;
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3000/order/all", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    });
    orders.value = response.data;
  } catch (err) {
    console.error("Ошибка загрузки заказов:", err);
  } finally {
    isLoading.value = false;
  }
};

const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const token = localStorage.getItem("token");
    await axios.put(
        `http://localhost:3000/order/status/${orderId}`,
        { status: newStatus },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
    );
    await fetchAllOrders(); // обновляем заказы
  } catch (err) {
    console.error("Ошибка обновления статуса:", err);
    alert("Не удалось обновить статус");
  }
};

const openBrief = (order) => {
  router.push({
    name: 'ordersView',
    params: {
      type: order.brief_type,  // например: 'identity'
      id: order.brief_id       // обязательно! это id из таблицы brief_*
    },
    query: {
      title: order.title       // это просто название (по желанию)
    }
  });
};

onMounted(() => {
  fetchAllOrders();
});
</script>

<template>
  <div class="admin">
    <h2 class="admin__title">Все заявки</h2>
    <div class="content">
      <div v-if="isLoading">Загрузка...</div>
      <div v-else class="items">
        <div v-for="order in orders" :key="order.id" class="item">
          <div>
            <p class="title">
              {{
                {
                  identity: 'Бриф на лого и фирменный стиль',
                  design: 'Бриф на дизайн сайта без разработки',
                  edit: 'Бриф на полную доработку сайта'
                }[order.brief_type]
              }}
            </p>
            <p style="font-weight: 500; font-size: 18px; margin-top: 0.6rem;">{{ order.user_email }} {{ order.user_name }}</p>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <!-- Выбор статуса через select -->
            <select
                :class="['status-select', statusClass(order.status)]"
                style="font-weight: 600; font-size: 1rem; border-radius: 1rem; padding: 12px 1rem"
                v-model="order.status"
                @change="updateOrderStatus(order.id, order.status)">
              <option value="Новое">Новое</option>
              <option value="В работе">В работе</option>
              <option value="Завершено">Завершено</option>
              <option value="Отменено">Отменено</option>
            </select>
            <button
                @click="openBrief(order)"
                style="font-weight: 500; font-size: 1rem; color: rgb(27, 51, 178);">
              Посмотреть
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">

.status-select {
  font-weight: 600;
  font-size: 1rem;
  border-radius: 1rem;
  padding: 12px 1rem;
  border: 1px solid;
}

.status-new {
  background-color: #e7f0ff;
  color: #1b33b2;
  border-color: #1b33b2;
}

.status-work {
  background-color: #fff6e5;
  color: #c97c00;
  border-color: #c97c00;
}

.status-completed {
  background-color: #e6ffed;
  color: #2e8b57;
  border-color: #2e8b57;
}

.status-canceled {
  background-color: #ffeaea;
  color: #cc0000;
  border-color: #cc0000;
}



.title {
  font-weight: 500;
  font-size: 22px;
  color: #1e1e1e;
}
.admin {
  margin-top: 3.7rem;
  margin-bottom: 2rem;
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
  background-color: #ffffff;
}

</style>