<template>
  <q-page class="flex flex-center">
    <app-textlockup />
    <app-sales-boxes />
    <app-textlockup>
      <template v-slot:img>
        <q-img src="../statics/bag.jpg" alt="bag" />
      </template>
      <template v-slot:new>50%</template>
      <template v-slot:sale>Storewide Sale</template>
      <template v-slot:collection>Summer</template>
      <template v-slot:details>All accessories</template>
    </app-textlockup>
    <app-featured-products />
  </q-page>
</template>

<script>
import AppTextlockup from 'components/AppTextlockup.vue';
import AppSalesBoxes from 'components/AppSalesBoxes.vue';
import AppFeaturedProducts from 'components/AppFeaturedProducts.vue';

export default {
  name: 'PageIndex',
  components: {
    AppTextlockup,
    AppSalesBoxes,
    AppFeaturedProducts,
  },
};
</script>

<style>
.test {
  margin: 3vh;
}

main {
  width: 75vw;
}
</style>
