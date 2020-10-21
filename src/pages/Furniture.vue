<template>
  <div>
    <app-store-grid :data="furniture" />
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
    ...mapGetters(['furniture']),
  },
};
</script>

<style lang="scss" scoped>
</style>
