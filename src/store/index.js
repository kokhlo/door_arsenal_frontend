/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-expressions */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import data from '../statics/storedata.json';

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
    },
    state: {
      cartUIStatus: 'idle',
      storedata: data,
      cart: [],
      clientSecret: '',
    },
    getters: {
      featuredProducts: (state) => state.storedata.slice(12, 15),
      internal: (state) => state.storedata.filter((el) => el.category === 'Internal'),
      external: (state) => state.storedata.filter((el) => el.category === 'External'),
      furniture: (state) => state.storedata.filter((el) => el.category === 'Furniture'),
      sales: (state) => state.storedata.filter((el) => el.sale === true),
      cartCount: (state) => {
        if (!state.cart.length) return 0;
        return state.cart.reduce((ac, next) => ac + next.quantity, 0);
      },
      cartTotal: (state) => {
        if (!state.cart.length) return 0;
        return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0);
      },
      cartItems: (state) => {
        if (!state.cart.length) return [];
        return state.cart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        }));
      },
      clientSecret: (state) => state.clientSecret,
    },
    mutations: {
      updateCartUI: (state, payload) => {
        state.cartUIStatus = payload;
      },
      clearCart: (state) => {
        // this clears the cart
        state.cart = [];
        state.cartUIStatus = 'idle';
      },
      addToCart: (state, payload) => {
        const itemfound = state.cart.find((el) => el.id === payload.id);
        itemfound ? itemfound.quantity = payload.quantity + itemfound.quantity : state.cart.push(payload);
      },
      setClientSecret: (state, payload) => {
        state.clientSecret = payload;
      },
      addOneToCart: (state, payload) => {
        const itemfound = state.cart.find((el) => el.id === payload.id);
        itemfound ? itemfound.quantity += itemfound.quantity : state.cart.push(payload);
      },
      removeOneFromCart: (state, payload) => {
        const index = state.cart.findIndex((el) => el.id === payload.id);
        state.cart[index].quantity
          ? state.cart[index].quantity -= state.cart[index].quantity
          : state.cart.splice(index, 1);
      },
      removeAllFromCart: (state, payload) => {
        state.cart = state.cart.filter((el) => el.id !== payload.id);
      },
    },
    actions: {
      async createPaymentIntent({ getters, commit }) {
        try {
          // Create a PaymentIntent with the information about the order
          const result = await axios.post(
            'https://ecommerce-netlify.netlify.app/.netlify/functions/create-payment-intent',
            {
              items: getters.cartItems,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );

          if (result.data.clientSecret) {
            // Store a reference to the client secret created by the PaymentIntent
            // This secret will be used to finalize the payment from the client
            commit('setClientSecret', result.data.clientSecret);
          }
        } catch (e) {
          console.log('error', e);
        }
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return Store;
}
