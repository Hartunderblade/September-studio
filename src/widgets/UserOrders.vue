<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import ButtonAddOrder from "@/widgets/ButtonAddOrder.vue";
import CreateOrderModal from "@/features/modals/CreateOrder.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isModalOpen = ref(false);
const orders = ref([]);
const filter = ref('Все');

const statusClass = (status) => {
  return {
    'Новое': 'status-new',
    'В работе': 'status-work',
    'Завершено': 'status-completed',
    'Отменено': 'status-canceled'
  }[status] || '';
};

const filteredOrders = computed(() => {
  if (filter.value === 'Все') return orders.value;
  return orders.value.filter(order => order.status === filter.value);
});

const fetchOrders = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:3000/order/orders', {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      }
    });
    orders.value = response.data;
    console.log('>>> Получено имя:', response.data); // например
    console.log('>>> Получено имя:', response.data.name); // например
  } catch (err) {
    console.error('Ошибка при загрузке заказов:', err);
  }
};



onMounted(() => {
  fetchOrders();
});
</script>

<template>
  <div class="content">
    <nav>
      <button type="submit" @click="filter = 'Все'" :class="{ active: filter === 'Все' }" >Все</button>
      <button type="submit" @click="filter = 'Новое'" :class="{ active: filter === 'Новое' }">Новое</button>
      <button type="submit" @click="filter = 'В работе'" :class="{ active: filter === 'В работе' }">В работе</button>
      <button type="submit" @click="filter = 'Завершено'" :class="{ active: filter === 'Завершено' }">Завершено</button>
      <button type="submit" @click="filter = 'Отменено'" :class="{ active: filter === 'Отменено' }">Отменено</button>
    </nav>
    <div class="orders">
      <ButtonAddOrder @click="isModalOpen = true" />

      <div v-for="order in filteredOrders" :key="order.id" class="order">
        <div class="order-item">
          <p class="order-item__title">
            {{
              {
                identity: 'Бриф на лого и фирменный стиль',
                design: 'Бриф на дизайн сайта без разработки',
                edit: 'Бриф на полную доработку сайта'
              }[order.brief_type]
            }}
          </p>
          <span class="order-item__description">Бриф</span>
        </div>
        <div class="order-item status">
          <p :class="['order-item__status', statusClass(order.status)]">
            {{ order.status }}
          </p>
          <button
              @click="router.push({ name: 'BriefView', params: { type: order.brief_type, id: order.brief_id }, query: { title: order.title } })"
              type="button"
              class="order-item__open"
          >
            Посмотреть
          </button>
        </div>
      </div>
    </div>
    <CreateOrderModal :show="isModalOpen" @close="isModalOpen = false"/>
  </div>
</template>

<style scoped lang="scss">
.status-new {
  background-color: #e7f0ff;
  color: #1b33b2;
  border: 1px solid #1b33b2;
}

.status-work {
  background-color: #fff6e5;
  color: #c97c00;
  border: 1px solid #c97c00;
}

.status-completed {
  background-color: #e6ffed;
  color: #2e8b57;
  border: 1px solid #2e8b57;
}

.status-canceled {
  background-color: #ffeaea;
  color: #cc0000;
  border: 1px solid #cc0000;
}

.order-item__status {
  font-weight: 500;
  font-size: 1rem;
  border-radius: 1rem;
  padding: 0.8rem 1.6rem;
  display: inline-block;      /* Чтобы занимал размер по содержимому */
  user-select: none;          /* Чтобы нельзя было выделять, если нужно */
}

.content {
  padding: 2rem 1rem;
  border: 1px solid rgba(27, 51, 178, 0.2);
  box-shadow: 9px 4px 20px 0 rgba(63, 63, 63, 0.12);
  border-radius: 1rem;
  margin-top: 3rem;
  background-color: #ffffff;
}

  nav {
    border-bottom: 1px solid #a5a5a5;
    max-width: 1982px;
    margin-bottom: 2rem;
    display: flex;
    column-gap: 2rem;

    button {
      font-weight: 500;
      font-size: 18px;
      cursor: pointer;

      padding: 0px 0px 6px 0px;
      width: 110px;
    }
  }
  nav button.active {
    border-bottom: 1px solid #1b33b2;
  }


  .orders {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .order {
    border: 1px solid #1b33b2;
    border-radius: 1rem;
    padding: 1rem;
    width: 312px;
    height: 257px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-item {

      &__title {
        font-weight: 500;
        font-size: 22px;
        color: #1e1e1e;
      }

      &__description {
        font-weight: 300;
        font-size: 12px;
        color: rgb(27 51 178);
      }

      &__open {
        color: #4a62e3;
        border-bottom: 1px solid #4a62e3;
        cursor: pointer;
      }
    }
  }

  .status {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }

  @media (max-width: 780px) {
    .order {
      width: 100%;
    }

    nav {
      border-bottom: 1px solid #a5a5a5;
      max-width: 1982px;
      margin-bottom: 1.4rem;
      column-gap: 1rem;

      button {
        font-size: 1rem;
        width: 5rem;
      }
    }
  }

@media (max-width: 320px) {
  .content {
    padding: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    margin-top: 2rem;
  }

  nav {
    border-bottom: 1px solid #a5a5a5;
    max-width: 1982px;
    margin-bottom: 1.4rem;
    column-gap: 1rem;

    button {
      font-size: 0.8rem;
      width: 5rem;
    }
  }

  .order {
    border-radius: 10px;
    padding: 10px;
    width: 312px;
    height: 257px;
    background-color: #ffffff;
    text-align: start;

    &-item {

      &__title {
        font-weight: 500;
        font-size: 22px;
        color: #1e1e1e;
      }

      &__description {
        font-weight: 300;
        font-size: 12px;
        color: rgb(27 51 178);
      }

      &__open {
        color: #4a62e3;
        border-bottom: 1px solid #4a62e3;
        cursor: pointer;
      }
    }
  }

}
</style>