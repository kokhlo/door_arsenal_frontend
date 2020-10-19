import Vue from 'vue';

Vue.filter('dollar', (value) => `$${parseFloat(value).toFixed(2)}`);
Vue.filter('ruble', (value) => `₽${parseFloat(value).toFixed(2)}`);
