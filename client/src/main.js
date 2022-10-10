import { createApp } from 'vue';
import components from '@/components/UI';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app
  .use(router)
  .mount('#app');
