import { createApp } from 'vue';
import App from './App.vue';
import pinia from './store';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(pinia).mount('#app');


// import { createApp } from 'vue';
// import PrimeVue from 'primevue/config';
// import Aura from '@primevue/themes/aura';

// const app = createApp(App);
// app.use(PrimeVue, {
//     theme: {
//         preset: Aura
//     }
// });