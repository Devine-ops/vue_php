import { createApp } from 'vue';
import App from './App.vue';
import store from '../src/components/store';  // Certifique-se de importar corretamente a store

createApp(App)
  .use(store)  // Registrar o Vuex
  .mount('#app');

