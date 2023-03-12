import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "primevue/resources/themes/lara-light-indigo/theme.css";    
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import AutoComplete from 'primevue/autocomplete';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';


import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.use(ToastService);

app.component('InputText', InputText)
app.component('Button', Button)
app.component('Toast', Toast)
app.component('AutoComplete', AutoComplete)
app.component('Calendar', Calendar)
app.component('Dropdown', Dropdown)
app.mount('#app')
