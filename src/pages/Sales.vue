<template>
  <div>
    <app-store-grid :data="sales" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppStoreGrid from 'components/AppStoreGrid.vue';

export default {
  components: {
    AppStoreGrid,
  },
  computed: {
    ...mapGetters(['sales']),
  },
};
</script>

<style lang="scss" scoped>
</style>
