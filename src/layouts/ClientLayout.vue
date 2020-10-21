<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title @click="$router.push('/')" v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <span class="q-ml-sm"><strong>Дверной</strong> Арсенал</span>
        </q-toolbar-title>

        <q-space />

        <q-input class="GNL__toolbar-input"
          outlined
          dense
          v-model="search"
          color="bg-grey-7 shadow-1"
          placeholder="Поиск по цвету, модели, производителю"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
          <template v-slot:append>
            <q-btn
              flat
              dense
              round
              aria-label="Menu"
              icon="arrow_drop_down"
            >
              <q-menu anchor="bottom right" self="top right">
                <div class="q-pa-md" style="width: 400px">
                  <div class="text-body2 text-grey q-mb-md">
                    Сделайте ваш запрос более точными
                  </div>

                  <div class="row items-center">
                    <div class="col-3 text-subtitle2 text-grey">
                      Точной фразе
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="exactPhrase" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Содержит слова
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="hasWords" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Не содержит
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="excludeWords" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Сайт
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="byWebsite" />
                    </div>

                    <div class="col-12 q-pt-lg row justify-end">
                      <q-btn flat
                        dense
                        no-caps
                        color="grey-7"
                        size="md"
                        style="min-width: 68px;"
                        label="Искать"
                        v-close-popup
                      />
                      <q-btn flat dense no-caps
                        color="grey-7"
                        size="md"
                        style="min-width: 68px;"
                        @click="onClear"
                        label="Очистить"
                        v-close-popup
                      />
                    </div>
                  </div>
                </div>
              </q-menu>
            </q-btn>
          </template>
        </q-input>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.sm" round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Настройки</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" exact to="/cart" icon="shopping_cart">
            <q-badge color="red" text-color="white" v-if="cartCount > 0" floating>
              {{ cartCount }}
            </q-badge>
            <q-tooltip>Корзина</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Аккаунт</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links1"
            :key="link.text"
            clickable
            :to="link.anchor"
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item class="GNL__drawer-item"
            v-ripple v-for="link in links2" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item class="GNL__drawer-item"
            v-ripple v-for="link in links3" :key="link.text" clickable>
            <q-item-section>
              <q-item-label>{{ link.text }}
                <q-icon v-if="link.icon" :name="link.icon" />
              </q-item-label>
            </q-item-section>
          </q-item>

          <div class="q-mt-md">
            <div class="flex flex-center q-gutter-xs">
              <a class="GNL__drawer-footer-link"
                href="javascript:void(0)" aria-label="Privacy">Контакты</a>
              <span> · </span>
              <a class="GNL__drawer-footer-link"
                href="javascript:void(0)" aria-label="Terms">Партнёрство</a>
              <span> · </span>
              <a class="GNL__drawer-footer-link"
                href="javascript:void(0)" aria-label="About">О нас</a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div>
        <app-nav v-if="!false" />
        <main>
          <router-view />
        </main>
        <app-footer />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import AppFooter from 'components/AppFooter.vue';
import AppNav from 'components/AppNav.vue';
import { fasGlobeAmericas, fasFlask } from '@quasar/extras/fontawesome-v5';
import { mapGetters } from 'vuex';

export default {
  name: 'GoogleNewsLayout',
  components: {
    AppFooter,
    AppNav,
  },
  computed: {
    ...mapGetters(['cartCount']),
  },
  data() {
    return {
      leftDrawerOpen: false,
      search: '',
      showAdvanced: false,
      showDateOptions: false,
      exactPhrase: '',
      hasWords: '',
      excludeWords: '',
      byWebsite: '',
      byDate: 'Any time',
      links1: [
        { icon: 'web', text: 'Распродажа', anchor: '/sales' },
        { icon: 'person', text: 'Межкомнатные двери', anchor: '/internal' },
        { icon: 'star_border', text: 'Входные двери', anchor: '/external' },
        { icon: 'search', text: 'Фурнитура', anchor: '/furniture' },
        { icon: 'search', text: 'Мои заказы', anchor: '/orders' },
      ],
      links2: [
        { icon: 'flag', text: 'Все двери', anchor: '/all' },
        { icon: 'flag', text: 'Программа лояльности', anchor: '#' },
        { icon: fasGlobeAmericas, text: 'Как выбрать дверь', anchor: '#' },
        { icon: 'place', text: 'Бесплатная консультация', anchor: '#' },
        { icon: fasFlask, text: 'Гарантия', anchor: '/guarantee' },
      ],
      links3: [
        { icon: '', text: 'Language & region', anchor: '#' },
        { icon: '', text: 'Личный кабинет', anchor: '#' },
        { icon: 'open_in_new', text: 'Get the Android app', anchor: '#' },
        { icon: 'open_in_new', text: 'Get the iOS app', anchor: '#' },
        { icon: '', text: 'Обратная связь', anchor: '#' },
        { icon: 'open_in_new', text: 'Помощь', anchor: '#' },
      ],
    };
  },
  methods: {
    onClear() {
      this.exactPhrase = '';
      this.hasWords = '';
      this.excludeWords = '';
      this.byWebsite = '';
      this.byDate = 'Any time';
    },
    changeDate(option) {
      this.byDate = option;
      this.showDateOptions = false;
    },
  },
};
</script>

<style lang="sass">
.GNL
  &__toolbar
    height: 64px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000

</style>
