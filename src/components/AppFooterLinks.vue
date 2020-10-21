<template>
  <section>
    <nav>
      <ul>
        <li><router-link exact to="/aboutUs">О компании</router-link></li>
        <li><router-link exact to="/guarantee">Гарантия</router-link></li>
        <li><router-link exact to="/addresses">Адреса магазинов</router-link></li>
        <li><router-link exact to="#">Свяжитесь с нами</router-link></li>
        <li><router-link exact to="#">Стать дилером</router-link></li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li><router-link exact to="#">Twitter</router-link></li>
        <li><router-link exact to="#">Вконтакте</router-link></li>
        <li><router-link exact to="#">Instagram</router-link></li>
        <li><router-link exact to="#">Одноклассники</router-link></li>
      </ul>
    </nav>
    <nav>
      <ul>
        <h6>Подпишитесь на новостную рассылку:</h6>
        <q-input outlined label="Введите ваш email" v-model="emailSubscription" type="text" />
      </ul>
    </nav>
    <feedback-dialog v-model="showFeedbackForm"></feedback-dialog>
  </section>
</template>

<script>
import FeedbackDialog from 'components/FeedbackDialog.vue';

export default {
  name: 'app-footer-links',
  data() {
    return {
      emailSubscription: '',
      showFeedbackForm: true,
    };
  },
  components: {
    FeedbackDialog,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
section {
  width: 80%;
  margin-left: 10%;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

ul {
  list-style: none;
  padding-left: 0;
}

input {
  width: 100%;
}

@media screen and (min-width: 850px) {
  section {
    padding: 40px !important;
  }
}
</style>
