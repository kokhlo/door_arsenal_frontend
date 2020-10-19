<template>
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <q-carousel
      animated
      v-model="slide"
      infinite height="360px"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" class="q-pa-none">
        <q-scroll-area class="fit">
          <q-card class="my-card">
            <img :src="require('src/assets/coding.jpeg')">
            <q-card-section>
              <div class="text-h6">Work with something that you like, like…</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-actions align="left">
              <q-btn label="Share" dense color="primary" text-color="blue" outline/>
              <q-btn label="Learn More" dense color="primary" text-color="blue" outline/>
            </q-card-actions>
          </q-card>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="q-pa-none">
        <q-scroll-area class="fit">
          <q-card class="my-card">
            <img :src="require('src/assets/lookgood.jpeg')">
            <q-card-section>
              <div class="text-h6">Keep your schedule in the right time</div>
              <div class="text-subtitle2">
                Aenean facilisis vitae purus facilisis semper.
              </div>
            </q-card-section>
            <q-card-actions align="left">
              <q-btn label="Share" dense color="primary" text-color="blue" outline/>
              <q-btn label="Learn More" dense color="primary" text-color="blue" outline/>
            </q-card-actions>
          </q-card>
        </q-scroll-area>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="q-pa-none">
        <q-scroll-area class="fit">
          <q-card class="my-card">
            <img :src="require('src/assets/travel.jpeg')">
            <q-card-section>
              <div class="text-h6">Travel everytime that you have a chance</div>
              <div class="text-subtitle2">Curabitur egestas consequat lorem, vel fermentum augue porta id.
              </div>
            </q-card-section>
            <q-card-actions align="left">
              <q-btn label="Share" dense color="primary" text-color="blue" outline/>
              <q-btn label="Learn More" dense color="primary" text-color="blue" outline/>
            </q-card-actions>
          </q-card>
        </q-scroll-area>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      slide: 1,
    };
  },
};
</script>
