import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import revol



//Axios
import axios from 'axios';
import VueAxios from 'vue-axios';


createApp(App)
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .mount('#app')
