<template>
  <section class="boxes">
    <div v-for="(box, i) in boxes" :key="box.heading" :class="`box${i}`">
      <img :src="box.icon" alt="service icon" />
      <h4>{{ box.heading }}</h4>
      <p>{{ box.details }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boxes: [
        {
          icon: 'icon-package.svg',
          heading: 'Бесплатная доставка',
          details: 'Доставка в течении 14 дней',
        },
        {
          icon: 'icon-cal.svg',
          heading: 'Оперативная установка',
          details: 'Большинство дверей есть в наличии, не нужно ждать',
        },
        {
          icon: 'icon-service.svg',
          heading: 'Вызовите мастера',
          details: 'Бесплатный вызов замерщика',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.boxes {
  margin: 70px 0;
  div {
    border: 1px solid #ddd;
    min-height: 355px;
    justify-self: center;
    align-self: center;
    text-align: center;
  }
  .box1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .box2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .box3 {
    grid-area: 1 / 3 / 2 / 4;
  }
}

h4 {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0 0 10px 0;
}

@media screen and (min-width: 700px) {
  .boxes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    div {
      padding: 40px 50px;
    }
  }
}

@media screen and (max-width: 699px) {
  .boxes {
    width: 83vw;
    margin-left: 5vw;
    div {
      padding: 10px 20px;
      margin-bottom: 10px;
    }
  }
}
</style>
