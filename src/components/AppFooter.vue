<template>
  <footer>
    <section class="callout">
      <h2>"Поразительное качество в сочетании с приемлимыми ценами, вот что такое Дверной Арсенал."</h2>
      <p>Дмитрий Аксёнов, основатель</p>
    </section>
    <app-footer-links />
    <div class="sarahstuff">
      <p>
        © «Арсенал Дверей», 2012—2020. Тула, Металлистов, дом 90 Телефон: +7 (999) 780-72-83, E-mail: clients@dverok.shop
      </p>
    </div>
  </footer>
</template>

<script>
import AppFooterLinks from 'components/AppFooterLinks.vue';

export default {
  components: {
    AppFooterLinks,
  },
};
</script>

<style lang="scss" scoped>
.callout {
  width: 100%;
  height: 280px;
  background: url("../statics/callout.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h2 {
    padding: 0 30px;
    text-align: center;
  }
}

.sarahstuff {
  background: black;
  width: 100%;
  padding: 10px 30px;
  color: white;
  text-align: center;
}

a,
a:visited,
a:active {
  color: #c4c3ec;
  font-weight: bold;
}
</style>
