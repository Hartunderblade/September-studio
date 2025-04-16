<script setup>
import BriefTitle from "@/shared/ui/BriefTitle.vue";
import { ref } from 'vue'
import axios from 'axios'
import {useRouter} from "vue-router";

const router = useRouter();

const name = ref('')
const phone = ref('')
const email = ref('')
const contactMethod = ref('')

const companyName = ref('')
const companyInfo = ref('')
const productDescription = ref('')
const website = ref('')
const socialMedia = ref('')

const competitorsAdv = ref('')
const competitorsDisadv = ref('')
const competitorsLinks = ref('')

const targetGender = ref('')
const targetAge = ref('')

const budget = ref('')
const launchDate = ref('')
const additionalInfo = ref('')
const contactAgain = ref('')

const submitBrief = async () => {
  try {
    const token = localStorage.getItem('token')

    const response = await axios.post('http://localhost:3000/brief/design', {
      name: name.value,
      phone: phone.value,
      email: email.value,
      contactMethod: contactMethod.value,
      companyName: companyName.value,
      companyInfo: companyInfo.value,
      productDescription: productDescription.value,
      website: website.value,
      socialMedia: socialMedia.value,
      competitorsAdv: competitorsAdv.value,
      competitorsDisadv: competitorsDisadv.value,
      competitorsLinks: competitorsLinks.value,
      targetGender: targetGender.value,
      targetAge: targetAge.value,
      budget: budget.value,
      launchDate: launchDate.value,
      additionalInfo: additionalInfo.value,
      contactAgain: contactAgain.value,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    router.push('/user/thanks');
  } catch (error) {
    alert(error.response?.data?.message || 'Ошибка при отправке')
  }
}
</script>

<template>
  <div class="brief">
    <div class="one">
      <div class="header">
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
            <input v-model="contactMethod" class="form-items__item" type="text" placeholder="Способ связи" />
          </div>
        </div>

        <div class="form">
          <h3>О ПРОДУКТЕ И КОМПАНИИ</h3>
          <div class="form-items">
            <input v-model="companyName" class="form-items__item" type="text" placeholder="Название компании*" />
            <input v-model="companyInfo" class="form-items__item" type="text" placeholder="Краткая информация о компании*" />
            <input v-model="productDescription" class="form-items__item" type="text" placeholder="Описание продукта или услуги*" />
            <input v-model="website" class="form-items__item" type="text" placeholder="Адрес сайта" />
            <input v-model="socialMedia" class="form-items__item" type="text" placeholder="Социальные сети" />
          </div>
        </div>

        <div class="form">
          <h3>опишите конкурентов</h3>
          <div class="form-items">
            <input v-model="competitorsAdv" class="form-items__item" type="text" placeholder="Преимущества*" />
            <input v-model="competitorsDisadv" class="form-items__item" type="text" placeholder="Недостатки*" />
            <input v-model="competitorsLinks" class="form-items__item" type="text" placeholder="Ссылки сайтов конкурентов" />
          </div>
        </div>

        <div class="form">
          <h3>целевая аудитория</h3>
          <div class="form-items">
            <input v-model="targetGender" class="form-items__item" type="text" placeholder="Пол" />
            <input v-model="targetAge" class="form-items__item" type="text" placeholder="Возраст" />
          </div>
        </div>

        <div class="form">
          <h3>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h3>
          <div class="form-items">
            <input v-model="budget" class="form-items__item" type="text" placeholder="Планируемый бюджет*" />
            <input v-model="launchDate" class="form-items__item" type="text" placeholder="Дата предполагаемого запуска*" />
            <input v-model="additionalInfo" class="form-items__item" type="text" placeholder="Дополнительная информация" />
            <input v-model="contactAgain" class="form-items__item" type="text" placeholder="Способ связи повторно" />
          </div>
        </div>

        <button class="send" @click="submitBrief">ОТПРАВИТЬ</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  font-size: 2rem;
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