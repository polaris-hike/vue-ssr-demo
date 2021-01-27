import Vue from 'vue';
import App from './App.vue';
import createRouter from './router.js';

/*new Vue({
  render:h=>h(App) // createElement
}).$mount('#app')*/

// 服务端渲染需要每次产生一个新的实例 为什么呢？ 保证每个用户访问都可以拿到一个自己的实例
export default () => {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App) // createElement
  });
  return {app,router};
}