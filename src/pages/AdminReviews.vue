<script setup>
import ButtonBackMain from "@/shared/ui/ButtonBackMain.vue";
</script>

<template>
  <div class="admin">
    <ButtonBackMain/>
    <h2 class="admin__title">Все отзывы</h2>
    <div class="content">
      <div class="reviews">
        <div class="review">
          <p class="review__name">
            Юрий маркин
          </p>
          <p class="review__description">
            Недавно я обратился в студию September для редизайна своего сайта, который посвящен
            транспортным перевозкам. Мы долго искали команду, которая могла бы не только обновить
            внешний вид сайта, но и улучшить его функциональность. Мы решили внедрить стиль bento grid,
            который, как мне казалось, будет идеальным решением для организации информации о наших
            услугах и маршрутах.
          </p>
          <button class="review__button-delite">
            Удалить
          </button>
        </div>
        <div class="review">
          <p class="review__name">
            Юрий маркин
          </p>
          <p class="review__description">
            Недавно я обратился в студию September для редизайна своего сайта, который посвящен
            транспортным перевозкам. Мы долго искали команду, которая могла бы не только обновить
            внешний вид сайта, но и улучшить его функциональность. Мы решили внедрить стиль bento grid,
            который, как мне казалось, будет идеальным решением для организации информации о наших
            услугах и маршрутах.
          </p>
          <button class="review__button-delite">
            Удалить
          </button>
        </div>
        <div class="review">
          <p class="review__name">
            Юрий маркин
          </p>
          <p class="review__description">
            Недавно я обратился в студию September для редизайна своего сайта, который посвящен
            транспортным перевозкам. Мы долго искали команду, которая могла бы не только обновить
            внешний вид сайта, но и улучшить его функциональность. Мы решили внедрить стиль bento grid,
            который, как мне казалось, будет идеальным решением для организации информации о наших
            услугах и маршрутах.
          </p>
          <button class="review__button-delite">
            Удалить
          </button>
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
    margin-top: 3rem;
  }
}

.content {
  //width: 100%;
}

.reviews {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;
  width: 100%;
}

.review {
  border: 1px solid rgba(27, 51, 178, 0.4);
  border-radius: 1rem;
  padding: 1rem;
  max-width: 889px;
  width: 100%;
  background-color: #fff;

  &__name {
    font-weight: 600;
    font-size: 18px;
    text-transform: capitalize;
    color: #1b33b2;
    margin-bottom: 1rem;
  }

  &__description {
    font-weight: 300;
    font-size: 1rem;
    width: 100%;
  }

  &__button-delite {
    border: 1px solid #b21b39;
    border-radius: 16px;
    padding: 10px 16px;
    background-color: #fff;
    font-weight: 600;
    font-size: 18px;
    color: #b21b39;
    margin-top: 22px;

    &:hover {
      background-color: #b21b39;
      color: #ffffff;
      transition: 0.6s;
    }
  }
}
</style>