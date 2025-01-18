import './style.css'

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'
import store from './store';

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(createPinia());
app.use(store);
app.mount('#app');