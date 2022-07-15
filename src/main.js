import 'axios';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';

createApp(App)
.mixin(mixins)
.use(store)
.use(router)
.mount('#app');

window.Kakao.init('27186ef162a5047fa37b2c49b39f9105');