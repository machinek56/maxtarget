<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">MaxTarget</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link ancors" href="#grow">Статистика</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ancors" href="#methods">Способы продвижения</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ancors" href="#compare">Преимущества</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ancors" href="#results">Наши результаты</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ancors" href="#steps">Как начать</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ancors" href="#application">Оставить заявку</a>
          </li>
          <li class="nav-item">
            <a href="tel:+7(916)970-57-15">+7 (916) 970-57-15</a>
          </li>
        </ul>
      </div>
    </nav>


    <section class="container section banner">
      <div class="row">
        <div class="col">
          <h1 class="banner__title text-center text-uppercase">Начните <span
            class="txt-highlight">получать</span> от <span class="txt-highlight">17</span> новых <span
            class="txt-highlight">заявок</span> из Instagram <span
            class="txt-highlight">ежедневно</span></h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="d-md-none">
            <img src="smm.png" alt="Banner Image" class="img-responsive">
          </div>
          <p class="banner__cta-title">ОСТАВЬТЕ СВОИ ДАННЫЕ И НАШ ЭКСПЕРТ РАССКАЖЕТ ВАМ, как увеличить продажи
            через INSTAGRAM:</p>
          <!--<form id="bannerForm" class="contact-form form banner-form">-->
          <!--<div class="form-group">-->
          <!--<label for="name">Ваше имя: </label>-->
          <!--<input type="text"-->
          <!--v-model="userName"-->
          <!--class="form-control"-->
          <!--:class="{'has-error': $v.userName.$error}"-->
          <!--id="username"-->
          <!--@blur="$v.userName.$touch()"-->
          <!--@focus="$v.userName.$reset()"-->
          <!--placeholder="Как вас зовут?">-->

          <!--<div class="error-message" v-if="$v.userName.$error">-->
          <!--{{userNameErrorMessage}}-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group">-->
          <!--<label for="phone">Ваш телефон</label>-->
          <!--<masked-input type="tel"-->
          <!--name="phone"-->
          <!--id="phone"-->
          <!--class="form-control"-->
          <!--:class="{'has-error' :$v.phoneNumber.$error}"-->
          <!--v-model="phoneNumber"-->
          <!--:mask="['8', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]"-->
          <!--:guide="true"-->
          <!--@blur="$v.phoneNumber.$touch()"-->
          <!--@focus="$v.phoneNumber.$reset()"-->
          <!--placeholder="Телефон"-->
          <!--placeholderChar="_">-->
          <!--</masked-input>-->

          <!--<div class="error-message" v-if="$v.phoneNumber.$error">-->
          <!--{{phoneNumberErrorMessage}}-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group form-check">-->
          <!--<input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="agreement">-->
          <!--<label class="form-check-label" for="exampleCheck1">Согласен на обработку персональных-->
          <!--данных</label>-->

          <!--<div class="error-message">-->
          <!--{{agreementErrorMessage}}-->
          <!--</div>-->
          <!--</div>-->
          <!--<button type="submit"-->
          <!--class="btn btn-yellow"-->
          <!--@click.prevent="submitForm"-->

          <!--&gt;-->
          <!--Получить консультацию-->
          <!--</button>-->
          <!--&lt;!&ndash; <button type="submit" class="btn btn-yellow">Получить консультацию</button> &ndash;&gt;-->
          <!--</form>-->
        </div>
        <div class="d-none d-md-block col-md-7">
          <div class="">
            <img src="smm.png" alt="Banner Image" class="img-responsive">
          </div>
        </div>
      </div>
    </section>

    <section class="container section grow">
      <div class="row">
        <div class="col text-center">
          <h2 class="section__title section__title--underlined" id="grow">САМАЯ БЫСТРОРАСТУЩАЯ СОЦИАЛЬНАЯ СЕТЬ В
            РОССИИ</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 grow__item">
          <div class="grow__top-heading d-flex justify-content-around">
            <p><strong>8 млн</strong><br>человек онлайн</p>
            <p><strong>16 раз</strong><br>в день заходят в Instagram</p>
          </div>
          <div class="grow__content">
            <img src="map.png" class="img-responsive">
          </div>
        </div>
        <div class="col-md-6 grow__item">
          <div class="grow__top-heading d-flex justify-content-around">
            <p><strong>58%</strong><br>женщины</p>
            <p><strong>42%</strong><br>мужчины</p>
          </div>
          <div class="grow__content grow__content--bg-yellow">
            <div class="row">
              <div class="col-4">До 18 лет</div>
              <div class="col-8">
                <div class="progress progress--no-bg">
                  <div class="progress-bar" role="progressbar" style="width: 52%;" aria-valuenow="25"
                       aria-valuemin="0" aria-valuemax="100">20%
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">18-24 года</div>
              <div class="col-8">
                <div class="progress progress--no-bg">
                  <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="25"
                       aria-valuemin="0" aria-valuemax="100">34%
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">25-34 года</div>
              <div class="col-8">
                <div class="progress progress--no-bg">
                  <div class="progress-bar" role="progressbar" style="width: 96%;" aria-valuenow="25"
                       aria-valuemin="0" aria-valuemax="100">33%
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">35-44 года</div>
              <div class="col-8">
                <div class="progress progress--no-bg">
                  <div class="progress-bar" role="progressbar" style="width: 52%;" aria-valuenow="25"
                       aria-valuemin="0" aria-valuemax="100">20%
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">45-54 года</div>
              <div class="col-8">
                <div class="progress progress--no-bg">
                  <div class="progress-bar" role="progressbar" style="width: 24%;" aria-valuenow="25"
                       aria-valuemin="0" aria-valuemax="100">8%
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">55 и старше</div>
              <div class="col-8">
                <div class="progress progress--no-bg">
                  <div class="progress-bar" role="progressbar" style="width: 6%;" aria-valuenow="25"
                       aria-valuemin="0" aria-valuemax="100">1%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container section methods bg-grey">
      <div class="row">
        <div class="col text-center">
          <h2 class="section__title section__title--underlined" id="methods">КАКОЙ СПОСОБ ПРОДВИЖЕНИЯ ПОДОЙДЁТ ИМЕННО
            ВАМ?</h2>
        </div>
      </div>
      <div class="row method">
        <div class="col-sm-6 method__main d-flex flex-column align-items-baseline">
          <div class="d-flex align-items-center">
            <img src="promo_logo1.png" alt="" class="method__logo ">
            <h3 class="method__title">Таргетированная реклама</h3>
          </div>
          <p class="title__desc">Ваша реклама показывается только целевой аудитории, которая определяется по
            критериям географии, возраста, пола и интересов. Вы получаете точные цифры по результатам
            рекламы.</p>
          <button class="btn btn-yellow" @click.prevent="show('modalForm')">Узнать стоимость</button>
        </div>
        <div class="col-sm-6 method__pic-container">
          <img src="promo1.jpg" alt="" class="method__pic w-100 d-none d-sm-block"></div>
      </div>
      <div class="row method">
        <div class="col-sm-6 order-2 method__main d-flex flex-column align-items-baseline">
          <div class="d-flex align-items-center">
            <img src="promo_logo1.png" alt="" class="method__logo ">
            <h3 class="method__title">Реклама у блогеров</h3>
          </div>
          <p class="title__desc">Ваш аккаунт будут продвигать только те блогеры, которые прошли внимательную
            проверку нашей системы статистики – никаких накруток, только живая и активная аудитория увидит
            рекламу.</p>
          <button class="btn btn-yellow" @click.prevent="show('modalForm')">Узнать стоимость</button>
        </div>
        <div class="col-sm-6 method__pic-container"><img src="promo2.jpg" alt=""
                                                         class="method__pic w-100 d-none d-sm-block">
        </div>
      </div>
      <div class="row method">
        <div class="col-sm-6 method__main d-flex flex-column align-items-baseline">
          <div class="d-flex align-items-center">
            <img src="promo_logo1.png" alt="" class="method__logo ">
            <h3 class="method__title">Ведение аккаунта</h3>
          </div>
          <p class="title__desc">Вам больше не нужно ломать голову над новыми публикациями и реакцией
            подписчиков – продуманный до мелочей контент-план и ежедневные публикации в актуальное для вашей
            аудитории время решают проблему.</p>
          <button class="btn btn-yellow" @click.prevent="show('modalForm')">Узнать стоимость</button>
        </div>
        <div class="col-sm-6 method__pic-container"><img src="promo3.jpg" alt=""
                                                         class="method__pic w-100 d-none d-sm-block">
        </div>
      </div>
      <div class="row method">
        <div class="col-sm-6 order-2 method__main d-flex flex-column align-items-baseline">
          <div class="d-flex align-items-center">
            <img src="promo_logo1.png" alt="" class="method__logo ">
            <h3 class="method__title">Instagram «под ключ»</h3>
          </div>

          <p class="title__desc">Вам больше не нужно переживать о том, как живёт бизнес в Instagram. Мы
            полностью закрываем эту проблему, Вам остаётся только считать прибыль.</p>
          <button class="btn btn-yellow" @click.prevent="show('modalForm')">Узнать стоимость</button>
        </div>
        <!--<div class="col-sm-6 method__pic-container">-->
          <!--<img src="promo4.jpg" alt=""-->
                                                         <!--class="method__pic w-100 d-none d-sm-block">-->
        <!--</div>-->
      </div>
    </section>

    <section class="container section compare">
      <div class="row">
        <div class="col text-center">
          <h2 class="section__title" id="compare">ДАЛЕКО НЕ ВСЕ МЕТОДЫ ПРОДВИЖЕНИЯ ЭФФЕКТИВНО РАБОТАЮТ СЕГОДНЯ</h2>
        </div>
      </div>
      <div class="row">
        <div class="col text-center"><img src="people.png" alt="" class="compare__image">
          <p class="compare__method-title">ОФИЦИАЛЬНАЯ ТАРГЕТИРОВАННАЯ РЕКЛАМА INSTAGRAM</p></div>
        <div class="col text-center"><img src="people-way.png" alt="" class="compare__image">
          <p class="compare__method-title">ДРУГИЕ ВИДЫ ПРОДВИЖЕНИЯ</p></div>
      </div>
      <!-- <div class="sm-bock d-none d-sm-block"> -->
      <div class="row">
        <div class="col"><p>20 – 30 тысяч рублей</p></div>
        <div class="col-sm order-first order-sm-0"><p class="compare__method">Бюджет на 30 дней</p></div>
        <div class="col"><p>35 – 50 тысяч рублей</p></div>
      </div>
      <div class="row">
        <div class="col"><p>50 – 100 тысяч пользователей</p></div>
        <div class="col-sm order-first order-sm-0"><p class="compare__method">Охват рекламы</p></div>
        <div class="col"><p>20– 30 тысяч пользователей</p></div>
      </div>
      <div class="row">
        <div class="col"><p>Точное значение</p></div>
        <div class="col-sm order-first order-sm-0"><p class="compare__method">Конверсия</p></div>
        <div class="col"><p>Неизвестно</p></div>
      </div>
      <div class="row">
        <div class="col"><p>Целевая, точные параметры</p></div>
        <div class="col-sm order-first order-sm-0"><p class="compare__method">Аудитория</p></div>
        <div class="col"><p>Различная, нет точных критериев</p></div>
      </div>
      <div class="row">
        <div class="col"><p>Разовая настройка</p></div>
        <div class="col-sm order-first order-sm-0"><p class="compare__method">Запуск рекламы</p></div>
        <div class="col"><p>Регулярно повторяющиеся действия</p></div>
      </div>
      <div class="row">
        <div class="col"><p>Управление всеми показателями в режиме реального времени</p></div>
        <div class="col-sm order-first order-sm-0"><p class="compare__method">Аналитика</p></div>
        <div class="col"><p>Точные данные отсутствуют</p></div>
      </div>
      <div class="row">
        <div class="col"><p>В 5-10 раз дешевле альтернативных источников трафика</p></div>
        <div class="col-sm order-first order-sm-0"><p class="compare__method">Стоимость заявки</p></div>
        <div class="col"><p>Аналогична альтернативным источникам трафика</p></div>
      </div>
      <!-- </div> -->
      <!-- <div class="d-sm-none">123</div> -->

    </section>

    <section class="container section cases">

      <div class="row">
        <div class="col text-center">
          <h2 id="results">Наши результаты</h2>
        </div>
      </div>

      <div class="row">
        <div class="col col-md-6">
          <div class="case__title">

            <div class="case__title-text">
              Медицинский центр @diplomatclinic
            </div>

          </div>

          <div class="case__desc">
            <p>
              Увеличен процент пользователей из целевой аудитории в аккаунте
            </p>

            <p>
              Обеспечено от 25 клиентов в месяц со средним чеком 22 000 рублей
            </p>

            <p>
              Увеличено количество лайков под каждой публикацией с 20 до 500
            </p>

          </div>
        </div>
        <div class="col col-md-6 text-center">

          <div class="case__image">
            <img src="cases/case_2.png" alt="">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col text-center">
          <button type="button"
                  class="btn btn-transparent"
                  @click.prevent="show('modalForm')">
            Мне тоже нужен результат!
          </button>
        </div>
      </div>
    </section>

    <section class="section choose">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2 class="choose__heading">Выбор за вами!</h2>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="choose-grid">
              <img src="hand-promotion.png" alt="" class="img-fluid choose__image">
              <div class="choose__text">
                Ручное продвижение с помощью непроверенных сервисов...
              </div>
              <div class="choose__toggle">
                <base-switch></base-switch>
              </div>

              <h3 class="choose-maxtarget">
                MaxTarget
              </h3>

              <img src="promotion.png" alt="" class="img-fluid choose__image">
            </div>

          </div>
        </div>
      </div>

    </section>

    <section class="section container" id="steps">

      <h2 class="section__title">КАК ПРИВЛЕЧЬ ВНИМАНИЕ ИМЕННО К ВАШЕМУ АККАУНТУ?</h2>

      <div class="steps">
        <tiny-slider :mouse-drag="true" :loop="true" items="1" gutter="20"
                     controls-container="#customize-controls">
          <div class="step">
            <div class="step__header">
              <img src="~@/assets/images/steps/market.svg" alt="" class="step__icon">
              <h3 class="step__title">Аналитика</h3>
            </div>

            <p>
              Проводим комплексный аудит Вашего аккаунта
              и выбираем самые эффективные
              способы продвижения
            </p>
          </div>
          <div class="step">
            <div class="step__header">
              <img src="~@/assets/images/steps/contract.svg" alt="" class="step__icon">
              <h3 class="step__title">Договор</h3>
            </div>

            <p>
              Работаем только по договору
              и фиксируем на бумаге
              все наши обещания
            </p>
          </div>
          <div class="step">
            <div class="step__header">
              <img src="~@/assets/images/steps/profits.svg" alt="" class="step__icon">
              <h3 class="step__title">Продвижение</h3>
            </div>
            <p>
              Начинаем мощное продвижение
              Вашего аккаунта, Вы получаете
              новых подписчиков и клиентов
            </p>
          </div>
          <div class="step">
            <div class="step__header">
              <img src="~@/assets/images/steps/landing-page.svg" alt="" class="step__icon">
              <h3 class="step__title">Оптимизация</h3>
            </div>
            <p>
              Оптимизируем рекламные
              кампании – Вы получаете
              максимальный результат
              от каждого действия
            </p>
          </div>
        </tiny-slider>

        <ul class="controls" id="customize-controls">
          <li class="prev" aria-controls="customize" data-controls="prev">
            <img src="~@/assets/images/next.svg" alt="">
          </li>
          <li class="next" aria-controls="customize" data-controls="next">
            <img src="~@/assets/images/next.svg" alt="">
          </li>
        </ul>
      </div>

    </section>

    <section class="container section application bg-grey" id="application">
      <!--<h4 class="text-center">Остался последний шаг. Внимание! После отправки заявки Ваш аккаунт круто-->
      <!--изменится.</h4>-->
      <base-form @show="show">
      </base-form>
    </section>

    <section class="container section contacts bg-dark" id="contacts">
        <div class="row align-items-center">
            <div class="col-5">
                <a href="tel:+7(916)970-57-15">+7 999 937 79 56</a>
            </div>
            <div class="col d-flex justify-content-between contacts-icons">
                <a href="#"><img class="contacts-icons__icon" src="~@/assets/images/contacts/phone-call.svg" alt=""></a>
                <a href="#"><img class="contacts-icons__icon" src="~@/assets/images/contacts/icons8-whatsapp.svg" alt=""></a>
                <a href="#"><img class="contacts-icons__icon" src="~@/assets/images/contacts/icons8-telegram-app.svg" alt=""></a>        
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col">
                <a href="mailto:max.target.agency@gmail.com">max.target.agency@gmail.com</a>
            </div>
            <div class="col contacts-icons">
                <a href="#"><img class="contacts-icons__icon" src="~@/assets/images/contacts/new-email-outline.svg" alt=""></a>
            </div>
        </div>
    </section>

    <modal name="modalForm" adaptive height="auto">
      <div class="modal-container">
        <base-form @show="show">
        </base-form>
      </div>
    </modal>

    <modal name="privacyPolicy" adaptive height="auto">
      <div class="modal-container">
        <h3>Политика конфиденциальности</h3>
         <p class="privacy-policy">
           Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.
           Все лица, заполнившие сведения, составляющие персональные данные на данном сайте, а также разместившие иную информацию, обозначенными действиями подтверждают своё согласие на обработку персональных данных и их передачу оператору обработки персональных данных.
           Граждане, принимая настоящее Соглашение, выражают свою заинтересованность и полное согласие, что обработка их персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.
         </p>
      </div>
    </modal>

  </div>

</template>

<script>
  import VueTinySlider from 'vue-tiny-slider'
  import BaseSwitch from '@/components/BaseSwitch'
  import BaseForm from '@/components/BaseForm'

  export default {
    name: 'Main',
    components: {
      'tiny-slider': VueTinySlider,
      BaseSwitch,
      BaseForm
    },
    data: () => ({
      phoneNumber: '',
      userName: '',
      agreement: true
    }),
    methods: {
      show (name = 'privacyPolicy') {
        this.$modal.show(name)
      },
      hide (name = 'privacyPolicy') {
        this.$modal.hide(name)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
