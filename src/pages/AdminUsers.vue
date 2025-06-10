<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

const users = ref([]);

const fetchUsers = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:3000/admin/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    users.value = response.data;
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
  }
};

const blockUser = async (userId) => {
  try {
    const token = localStorage.getItem('token');
    await axios.put(`http://localhost:3000/admin/users/block/${userId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // После успешной блокировки обновляем статус пользователя
    const user = users.value.find(user => user.id === userId);
    if (user) user.is_locked = true;
  } catch (error) {
    console.error('Ошибка при блокировке пользователя:', error);
  }
};

const unblockUser = async (userId) => {
  try {
    const token = localStorage.getItem('token');
    await axios.put(`http://localhost:3000/admin/users/unblock/${userId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // После успешной разблокировки обновляем статус пользователя
    const user = users.value.find(user => user.id === userId);
    if (user) user.is_locked = false;
  } catch (error) {
    console.error('Ошибка при разблокировке пользователя:', error);
  }
};


onMounted(fetchUsers);
</script>

<template>
  <div class="admin">
    <h2 class="admin__title">Все пользователи</h2>
    <div class="content">
      <div class="items">
        <div v-for="user in users" :key="user.id" class="item" style="display: flex; flex-wrap: wrap; gap: 3rem; padding-top: 1rem; margin-top: 1rem; border-top: 1px solid #4a62e3;">
          <div>
            <span>Имя</span>
            <p>{{ user.name }}</p>
          </div>
          <div>
            <span>Контактная информация</span>
            <p>{{ user.email }}</p>
          </div>
          <div>
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
  }
}

.content {
  width: 100%;
}

.item {
  display: flex;
  div {
    span {
      font-weight: 300;
      font-size: 1rem;
      color: #474747;
    }

    p {
      font-weight: 400;
      font-size: 1.4rem;
    }

    button {
      font-weight: 600;
      font-size: 1rem;
      color: #b21b39;
      background-color: #fff;
      border: 1px solid #b21b39;
      border-radius: 1rem;
      padding: 1rem 2rem;
    }
  }
}
</style>