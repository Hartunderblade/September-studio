<script setup>
import { ref, computed } from 'vue';
import ButtonAddOrder from "@/widgets/ButtonAddOrder.vue";
import CreateOrderModal from "@/features/modals/CreateOrder.vue";

const isModalOpen = ref(false);

const orders = ref([
  { id: 1, title: 'Бриф на лого и фирменный стиль', status: 'Новое' },
  { id: 2, title: 'Бриф на лого и фирменный стиль', status: 'Завершено' },
  { id: 3, title: 'Бриф на лого и фирменный стиль', status: 'Отменено' }
]);

const filter = ref('Все');

const filteredOrders = computed(() => {
  if (filter.value === 'Все') return orders.value;
  return orders.value.filter(order => order.status === filter.value);
});

const statusClass = (status) => {
  return {
    'Новое': 'status-new',
    'Завершено': 'status-completed',
    'Отменено': 'status-canceled'
  }[status] || '';
};

</script>

<template>
  <div class="content">
    <nav>
      <button type="submit" @click="filter = 'Все'" :class="{ active: filter === 'Все' }" >Все</button>
      <button type="submit" @click="filter = 'Новое'" :class="{ active: filter === 'Новое' }">Новое</button>
      <button type="submit" @click="filter = 'Завершено'" :class="{ active: filter === 'Завершено' }">Завершено</button>
      <button type="submit" @click="filter = 'Отменено'" :class="{ active: filter === 'Отменено' }">Отменено</button>
    </nav>
    <div class="orders">
      <ButtonAddOrder @click="isModalOpen = true" />
      <div v-for="order in filteredOrders" :key="order.id" class="order">
        <div class="order-item">
          <p class="order-item__title">{{ order.title }}</p>
          <span class="order-item__description">Бриф</span>
        </div>
        <div class="order-item status">
          <button :class="statusClass(order.status)" class="order-item__status">{{ order.status }}</button>
          <button type="submit" class="order-item__open">Перейти</button>
        </div>
      </div>
    </div>
    <CreateOrderModal :show="isModalOpen" @close="isModalOpen = false"/>
  </div>
</template>

<style scoped lang="scss">

.content {
  padding: 2rem 1rem;
  border: 1px solid rgba(27, 51, 178, 0.2);
  box-shadow: 9px 4px 20px 0 rgba(63, 63, 63, 0.12);
  border-radius: 1rem;
  margin-top: 3rem;
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

      &__status {
        font-weight: 500;
        font-size: 1rem;
        color: #1b33b2;
        border: 1px solid #1b33b2;
        border-radius: 1rem;
        padding: 0.4rem 1.6rem;
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

  .status-new {
    background-color: rgba(27, 178, 37, 0.12);
    border: 1px solid #1bb225;
    border-radius: 16px;
    padding: 12px 32px;
    font-weight: 600;
    font-size: 16px;
    color: #1bb225;
  }

  .status-completed {
    background-color: rgba(27, 51, 178, 0.12);
    border: 1px solid #1b33b2;
    border-radius: 16px;
    padding: 12px 32px;
    font-weight: 600;
    font-size: 16px;
    color: #1b33b2;
  }

  .status-canceled {
    color: #b21b39;
    background-color: rgba(178, 27, 57, 0.12);
    border: 1px solid #b21b39;
    border-radius: 1rem;
    padding: 12px 32px;
    font-weight: 600;
    font-size: 1rem;
  }
</style>