<script setup>
import {RouterLink, useRouter} from "vue-router";
import { ref, nextTick } from "vue";

const router = useRouter();
const isMenuOpen = ref(false);

function navigateToAnchor(anchor) {
  isMenuOpen.value = false;
  if (router.currentRoute.value.path !== '/') {
    router.push({ path: '/', query: { anchor } });
  } else {
    scrollToAnchor(anchor);
  }
}

function scrollToAnchor(anchor) {
  nextTick(() => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <a href="#">september@web.ru</a>
      </div>
      <div class="footer-middle">
        <div class="footer-left">
          <div class="footer-title">
            <p class="footer-title__tel">+7 (123) 456-78-90</p>
            <p class="footer-title__address">Россия, г. Астрахань,
              Восточная ул., д. 4</p>
          </div>
          <div class="footer-lable">
            <p>Ⓒ 2024 September</p>
            <div class="footer-social">
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 9.26C18 14.1 14.04 18.02 9.16 18.02C7.62 18.02 6.16 17.62 4.88 16.92L0 18.5L1.6 13.8C0.8 12.48 0.34 10.92 0.34 9.28C0.32 4.42 4.28 0.5 9.16 0.5C14.04 0.5 18 4.42 18 9.26ZM9.16 1.9C5.06 1.9 1.74 5.2 1.74 9.26C1.74 10.88 2.26 12.36 3.16 13.58L2.24 16.32L5.1 15.42C6.28 16.2 7.68 16.64 9.18 16.64C13.26 16.64 16.6 13.34 16.6 9.26C16.6 5.18 13.26 1.9 9.16 1.9ZM13.62 11.28C13.56 11.2 13.42 11.14 13.2 11.02C12.98 10.92 11.92 10.4 11.72 10.32C11.52 10.24 11.38 10.22 11.24 10.42C11.1 10.64 10.68 11.12 10.56 11.26C10.44 11.4 10.3 11.42 10.1 11.32C9.88 11.22 9.18 10.98 8.36 10.26C7.72 9.7 7.28 8.98 7.16 8.78C7.04 8.56 7.14 8.44 7.26 8.34C7.36 8.24 7.48 8.08 7.58 7.96C7.68 7.84 7.72 7.74 7.8 7.6C7.88 7.46 7.84 7.34 7.78 7.22C7.72 7.12 7.3 6.06 7.12 5.62C6.94 5.2 6.76 5.26 6.64 5.26C6.52 5.26 6.36 5.24 6.22 5.24C6.08 5.24 5.84 5.3 5.64 5.5C5.44 5.72 4.88 6.24 4.88 7.3C4.88 8.36 5.66 9.38 5.76 9.52C5.86 9.66 7.26 11.9 9.46 12.76C11.66 13.62 11.66 13.34 12.06 13.3C12.46 13.26 13.34 12.78 13.52 12.28C13.68 11.8 13.68 11.38 13.62 11.28Z" fill="#A5A5A5" />
              </svg>
              <img src="@/assets/icons/youtube.svg" alt="Youtube" />
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3671 2.40039L0.633789 8.73372L5.70046 11.2671L13.3005 6.20039L8.23379 12.5337L15.8338 17.6004L18.3671 2.40039Z" stroke="#A5A5A5" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-links">
            <div class="footer-link">
              <span>Компания</span>
              <div class="items">
                <a class="item" @click.prevent="navigateToAnchor('about')">О нас</a>
                <a class="item" @click.prevent="navigateToAnchor('who')">Преимущества</a>
                <a class="item" @click.prevent="navigateToAnchor('projects')">Реализованные проекты</a>
                <a class="item" @click.prevent="navigateToAnchor('questions')">Отзывы</a>
                <a class="item" @click.prevent="navigateToAnchor('services')">Прайс</a>
              </div>
            </div>
            <div class="footer-link right">
              <span>Услуги</span>
              <div class="items">
                <a class="item">Редизайн</a>
                <a class="item">Лендинг</a>
                <a class="item">Корпоративный сайт</a>
              </div>
            </div>
          </div>
          <p>Сайт разработала Корчунова Дарья</p>
        </div>
      </div>
      <div class="footer-bottom">
        <img src="@/assets/images/logo-2.png">
      </div>
    </div>

  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #1e1e1e;
  color: #fff;
  margin-top: 10rem;
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid #626262;

  a {
    font-weight: 300;
    font-size: 20px;
    text-transform: lowercase;
    color: #a5a5a5;
  }

  button {
    font-weight: 500;
    font-size: 26px;
    color: #fff;
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
}

.footer-title {
  max-width: 770px;
  &__tel {
    font-weight: 500;
    font-size: 64px;
    text-transform: uppercase;
  }

  &__address {
    font-weight: 400;
    font-size: 64px;
    line-height: 104%;
    color: #a5a5a5;
  }
}

.footer-lable {
  display: flex;
  align-items: center;
  margin-top: 225px;

  p {
    font-weight: 500;
    font-size: 22px;
    padding-right: 20px;
  }
}

.footer-social {
  border-left: 1px solid #a5a5a5;
  padding-left: 20px;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  img {
    width: 18px;
    height: 18px;
  }
}

.footer-middle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 48px;
  border-bottom: 1px solid #626262;
  margin-top: 48px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  column-gap: 132px;
  margin-bottom: 180px;
}

.footer-link {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  span {
    font-weight: 300;
    font-size: 22px;
    color: #a5a5a5;
  }

  a {
    font-weight: 300;
    font-size: 22px;
    color: #fff;
  }
}

.right {
  max-width: 200px;
  //width: 100%;
}

.items {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.item {
  width: 100%;
}

.footer-bottom {
  img {
    margin-top: 2rem;
    width: 100%;
  }
}


@media (max-width: 780px) {
  .footer {
    margin-top: 4rem;
  }

  .footer-middle {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    border-bottom: 1px solid #626262;
    margin-top: 1rem;
  }

  .footer-top {
    padding: 12px 0;

    a {
      font-size: 10px;
    }

    button {
      font-size: 12px;
    }
  }

  .footer-title {
    max-width: 270px;
    &__tel {
      font-size: 20px;
    }

    &__address {
      font-size: 20px;
      margin-top: 1rem;
    }
  }

  .footer-lable {
    display: flex;
    align-items: center;
    margin-top: 2rem;

    p {
      font-weight: 500;
      font-size: 12px;
      padding-right: 1rem;
    }
  }
}

.footer-link {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 2rem;
  span {
    font-size: 1rem;
  }

  a {
    font-size: 1rem;
  }
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  column-gap: 132px;
  margin-bottom: 2rem;
}
</style>
<script setup lang="ts">
</script>