import Vue from 'vue';
import './index.less';
import './getMsg';
import routes from './route';
import VueRouter from 'vue-router';
import App from '@/pages/app';

Vue.use(VueRouter);

const router = new VueRouter(routes);

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => <app/>
})
