<script setup>
import BriefTitle from "@/shared/ui/BriefTitle.vue";
import { ref } from 'vue'
import axios from 'axios'
import {useRouter} from "vue-router";
import ButtonGoBack from "@/shared/ui/ButtonGoBack.vue";

const router = useRouter();

const name = ref('');
const phone = ref('');
const email = ref('');

const url = ref('');
const description = ref('');
const deadline = ref('');
const budget = ref('');

const submitBrief = async () => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(
        "http://localhost:3000/brief/edit",
        {
          name: name.value,
          phone: phone.value,
          email: email.value,
          url: url.value,
          description: description.value,
          deadline: deadline.value,
          budget: budget.value,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`
          },
        }
    );
    router.push("/user/thanks");
  } catch (err) {
    console.error(err);
    alert("Ошибка при отправке брифа");
  }
};

</script>

<template>
  <div class="brief">
    <div class="one">
      <div class="header">
        <ButtonGoBack/>
        <BriefTitle
            titleTop="бриф на полную"
            titleBottom="доработку сайта"
            description="Благодарим, что нашли время заполнить бриф. Этот бриф поможет проанализировать сайт и помочь качественно выполнить работу"
        />
      </div>
      <div class="content">
        <div class="form">
          <h3>КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
          <div class="form-items">
            <input v-model="name" class="form-items__item" type="text" placeholder="Имя">
            <input v-model="phone" class="form-items__item" type="tel" placeholder="+7 (999) 999-99-99">
            <input v-model="email" class="form-items__item" type="email" placeholder="Почта">
          </div>
        </div>

        <div class="form">
          <h3>ИНФОРМАЦИЯ О САЙТЕ И ДОРАБОТКЕ</h3>
          <div class="form-items">
            <input v-model="url" class="form-items__item" type="text" placeholder="Укажите полный адрес вашего сайта*: https://site.ru">
            <input v-model="description" class="form-items__item" type="text" placeholder="Опишите, что необходимо доработать в вашем проекте?*">
            <input v-model="deadline" class="form-items__item" type="text" placeholder="Планируемый дедлайн">
            <input v-model="budget" class="form-items__item" type="text" placeholder="Планируемый или рассчитанный бюджет*">
          </div>
        </div>

        <div class="form">
          <div class="form-items">
            <label class="form-items__checkbox">
              <input type="checkbox" required />
              <a href="/public/Политика конфиденциальности.pdf" target="_blank">Согласен c политикой конфиденциальности</a>
            </label>
          </div>
        </div>

        <button class="send" @click="submitBrief">ОТПРАВИТЬ</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.brief {
  margin-bottom: 2rem;
}
.content {
  margin-top: 96px;
  margin-left: 376px;
}


.form {
  margin-top: 4rem;
  h3 {
    font-weight: 500;
    font-size: 26px;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }

  &-items {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    &__item {
      border-bottom: 1px solid #1b33b2;
      padding: 1rem 0;
      max-width: 1112px;
      width: 100%;
      background: #fff;
      font-size: 1.2rem;
    }

    &__checkbox {
      display: flex;
      align-items: center;
      column-gap: 1rem;

      input {
        border: 1px solid #1b33b2;
        width: 24px;
        height: 24px;
        border-radius: 6px;
      }

      a {
        font-size: 1.2rem;
        font-weight: 400;
        text-decoration: underline;
        text-decoration-skip-ink: none;
        color: #1B33B2;
      }
    }
  }
}

.send {
  border: 2px solid #1b33b2;
  border-radius: 6px;
  padding: 40px 0;
  max-width: 1112px;
  width: 100%;
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #1b33b2;
  margin-top: 4rem;
  background-color: #ffffff;

  &:hover {
    background-color: #1b33b2;
    color: #ffffff;
    transition: 0.3s;
  }
}

@media (max-width: 320px) {
  .content {
    margin-top: 0;
    margin-left: 0;
    padding: 10px;
  }
  .form {
    margin-top: 2rem;
    h3 {
      font-size: 20px;
      margin-bottom: 26px;
    }

    &-items {
      display: flex;
      flex-direction: column;
      row-gap: 2rem;

      &__item {
        border-bottom: 1px solid #1b33b2;
        padding: 8px 0;
        max-width: 1112px;
        width: 100%;
        background: #fff;
        font-size: 12px;
      }

      &__checkbox {
        display: flex;
        align-items: center;
        column-gap: 0.3rem;

        input {
          width: 14px;
          height: 14px;
          border-radius: 3px;
        }

        a {
          font-size: 12px;
          text-align: start;
        }
      }
    }
  }
  .send {
    border-radius: 6px;
    padding: 1rem 0;
    font-size: 18px;
    margin-top: 26px;
  }
}

@media (max-width: 780px) {
  .content {
    margin-top: 0;
    margin-left: 0;
    padding: 10px;
  }
}
</style>