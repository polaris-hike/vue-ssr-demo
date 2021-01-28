import Vue from 'vue';
import App from './App.vue';
import createRouter from './router.js';
import createStore from './store';

// 服务端渲染需要每次产生一个新的实例 为什么呢？ 保证每个用户访问都可以拿到一个自己的实例
export default () => {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: h => h(App) // createElement
  });
  return {app,router,store};
}