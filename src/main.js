import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // Update import
import App from './App.vue';
import store from './store';
import AuthHandler from './components/AuthHandler.vue';
import ImageList from './components/ImageList.vue';
import UploadForm from './components/UloadForm.vue';

const app = createApp(App);
app.use(store);

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/oauth2/callback',
      component: AuthHandler,
    },
    {
      path: '/upload',
      component: UploadForm,
    },
    {
      path: '/',
      component: ImageList,
    },
  ],
});

app.use(router);
app.mount('#app');
