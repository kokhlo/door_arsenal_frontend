<template>
  <div>
    <app-store-grid :data="external" />
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
    ...mapGetters(['external']),
  },
};
</script>

<style lang="scss" scoped>
</style>
