<template>
  <div>
    <q-dialog v-model="value" persistent>
        <q-card style="min-width: 350px">
          <form @submit.prevent.stop="onSubmit" class="q-pa-md">
            <q-toolbar>
              <q-avatar icon="shopping_cart"/>
              <q-toolbar-title><span class="text-weight-bold">Арсенал</span> Дверей</q-toolbar-title>
              <q-btn flat round dense icon="close" v-close-popup />
            </q-toolbar>
            <q-card-section>
              <div class="text-h6">Как вас зовут:</div>
              <q-input dense v-model="payload.name" autofocus outlined />
            </q-card-section>

            <q-card-section>
              <div class="text-h6">Телефон:</div>
              <q-input dense v-model="payload.phone" outlined />
            </q-card-section>

            <q-card-section>
              <div class="text-h6">Email:</div>
              <q-input dense v-model="payload.email" outlined />
            </q-card-section>

            <q-card-actions align="center" class="text-primary">
              <q-btn flat label="Отмена" v-close-popup />
              <q-btn flat label="Свяжитесь со мной" v-close-popup />
            </q-card-actions>
          </form>
        </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'feedback-dialog',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      payload: {
        name: '',
        phone: '',
        email: '',
      },
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
