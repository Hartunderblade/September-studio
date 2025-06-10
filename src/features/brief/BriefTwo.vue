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
const contact = ref('');

const company = ref('');
const info = ref('');
const description = ref('');
const website = ref('');
const social = ref('');

const competitors = ref('');
const disadv = ref('');
const links = ref('');

const gender = ref('');
const age = ref('');

const budget = ref('');
const date = ref('');
const additional = ref('');

const submitBrief = async () => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(
        'http://localhost:3000/brief/design', {
          name: name.value,
          phone: phone.value,
          email: email.value,
          contact: contact.value,
          company: company.value,
          info: info.value,
          description: description.value,
          website: website.value,
          social: social.value,
          competitors: competitors.value,
          disadv: disadv.value,
          links: links.value,
          gender: gender.value,
          age: age.value,
          budget: budget.value,
          date: date.value,
          additional: additional.value,
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
            titleTop="бриф на дизайн"
            titleBottom="сайта без разработки"
            description="Благодарим, что нашли время заполнить бриф. Помните, максимально подробно заполненный бриф помогает вам получить сайт, который соответствует вашим ожиданиям."
        />
      </div>
      <div class="content">
        <div class="form">
          <h3>КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
          <div class="form-items">
            <input v-model="name" class="form-items__item" type="text" placeholder="Имя" />
            <input v-model="phone" class="form-items__item" type="tel" placeholder="+7 (999) 999-99-99" />
            <input v-model="email" class="form-items__item" type="email" placeholder="Почта" />
            <input v-model="contact" class="form-items__item" type="text" placeholder="Способ связи" />
          </div>
        </div>

        <div class="form">
          <h3>О ПРОДУКТЕ И КОМПАНИИ</h3>
          <div class="form-items">
            <input v-model="company" class="form-items__item" type="text" placeholder="Название компании*" required />
            <input v-model="info" class="form-items__item" type="text" placeholder="Краткая информация о компании*" required />
            <input v-model="description" class="form-items__item" type="text" placeholder="Описание продукта или услуги*" required />
            <input v-model="website" class="form-items__item" type="url" placeholder="Адрес сайта"  />
            <input v-model="social" class="form-items__item" type="text" placeholder="Социальные сети" />
          </div>
        </div>

        <div class="form">
          <h3>опишите конкурентов</h3>
          <div class="form-items">
            <input v-model="competitors" class="form-items__item" type="text" placeholder="Преимущества*" required />
            <input v-model="disadv" class="form-items__item" type="text" placeholder="Недостатки*" required />
            <input v-model="links" class="form-items__item" type="text" placeholder="Ссылки сайтов конкурентов" />
          </div>
        </div>

        <div class="form">
          <h3>целевая аудитория</h3>
          <div class="form-items">
            <input v-model="gender" class="form-items__item" type="text" placeholder="Пол" />
            <input v-model="age" class="form-items__item" type="number" placeholder="Возраст" />
          </div>
        </div>

        <div class="form">
          <h3>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h3>
          <div class="form-items">
            <input v-model="budget" class="form-items__item" type="number" placeholder="Планируемый бюджет*" required />
            <input v-model="date" class="form-items__item" type="text" placeholder="Дата предполагаемого запуска*" required />
            <input v-model="additional" class="form-items__item" type="text" placeholder="Дополнительная информация" />
          </div>
        </div>

        <div class="form__checkbox">
          <input type="checkbox" class="form__checkbox-input" required>
          <p>Согласен с <a href="/public/Политика конфиденциальности.pdf" target="_blank">политикой конфиденциальности</a></p>
        </div>
        <div class="form__checkbox">
          <input type="checkbox" class="form__checkbox-input" required>
          <p>Я согласен на обработку<a href="/public/Обработка персональных данных.pdf" target="_blank"> персональных данных</a></p>
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

.button-main {
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  color: #1b33b2;

  display: flex;
  align-items: center;
  column-gap: 0.6rem;

  margin-top: 96px;
}

.content {
  margin-top: 96px;
  margin-left: 376px;
}

.form__checkbox {
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: 1rem;

  p {
    font-weight: 300;
    font-size: 1rem;

    a {
      font-weight: 400;
      color: #1b33b2;
    }
  }
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