<script setup>

</script>

<template>
  <div class="admin">
    <h2 class="admin__title">Все пользователи</h2>
    <div class="content">
      <div class="items">
        <div class="item">
          <div>
            <span>Имя</span>
            <p>Имя Имя</p>
          </div>
          <div>
            <span>Контактная информация</span>
            <p>ivan@gmail.com</p>
            <p>+71234567890</p>
          </div>
          <div>
            <button>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.admin {
  margin-top: 3.7rem;
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