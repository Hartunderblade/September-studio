<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__contacts">
        <a href="tel:+71234567890" class="footer__phone">+7 (123) 456-78-90</a>
        <address class="footer__address">
          Россия, г. Астрахань,<br>
          Восточная ул., д. 4
        </address>
      </div>

      <div class="footer__nav">
        <div class="footer__nav-column">
          <h3 class="footer__nav-title">Компания</h3>
          <ul class="footer__nav-list">
            <li><a href="#" class="footer__nav-link">О нас</a></li>
            <li><a href="#" class="footer__nav-link">Преимущества</a></li>
            <li><a href="#" class="footer__nav-link">Реализованные проекты</a></li>
            <li><a href="#" class="footer__nav-link">Отзывы</a></li>
            <li><a href="#" class="footer__nav-link">Прайс</a></li>
          </ul>
        </div>

        <div class="footer__nav-column">
          <h3 class="footer__nav-title">Услуги</h3>
          <ul class="footer__nav-list">
            <li><a href="#" class="footer__nav-link">Радизайн</a></li>
            <li><a href="#" class="footer__nav-link">Лендинг</a></li>
            <li><a href="#" class="footer__nav-link">Корпоративный сайт</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p class="footer__copyright">© 2024 September</p>
      <p class="footer__developer">Сайт разработала Корчунова Дарья</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #fff;
  padding: 60px 0 30px;
  color: #1E1E1E;
  font-family: 'Arial', sans-serif;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.footer__contacts {
  flex: 1;
  min-width: 250px;
}

.footer__phone {
  display: block;
  font-size: 24px;
  font-weight: 600;
  color: #1E1E1E;
  text-decoration: none;
  margin-bottom: 20px;
  transition: color 0.3s;
}

.footer__phone:hover {
  color: #1B33B2;
}

.footer__address {
  font-style: normal;
  line-height: 1.6;
}

.footer__nav {
  display: flex;
  gap: 80px;
  flex: 2;
}

.footer__nav-column {
  min-width: 150px;
}

.footer__nav-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #1E1E1E;
}

.footer__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__nav-link {
  display: block;
  color: #1E1E1E;
  text-decoration: none;
  margin-bottom: 12px;
  transition: color 0.3s;
}

.footer__nav-link:hover {
  color: #1B33B2;
}

.footer__bottom {
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(30, 30, 30, 0.1);
  padding-top: 20px;
}

.footer__copyright,
.footer__developer {
  font-size: 14px;
  color: rgba(30, 30, 30, 0.5);
}

/* Адаптация для 780px */
@media (max-width: 780px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer__container {
    flex-direction: column;
    gap: 30px;
  }

  .footer__nav {
    flex-wrap: wrap;
    gap: 40px;
  }

  .footer__phone {
    font-size: 20px;
  }

  .footer__bottom {
    margin-top: 40px;
    flex-direction: column;
    gap: 10px;
  }
}

/* Адаптация для 320px */
@media (max-width: 320px) {
  .footer {
    padding: 30px 0 15px;
  }

  .footer__phone {
    font-size: 18px;
  }

  .footer__nav {
    flex-direction: column;
    gap: 30px;
  }

  .footer__nav-title {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .footer__nav-link {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .footer__bottom {
    margin-top: 30px;
  }

  .footer__copyright,
  .footer__developer {
    font-size: 12px;
  }
}
</style>