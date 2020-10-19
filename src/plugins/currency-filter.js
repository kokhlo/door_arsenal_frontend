import Vue from 'vue';

Vue.filter('dollar', (value) =>
  // Using a template literal here, that's why there are two dollar signs.
  // The first is an actual dollar.
  `$${parseFloat(value).toFixed(2)}`);
