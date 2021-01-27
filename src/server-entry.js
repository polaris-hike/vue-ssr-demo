// 服务端入口
import createApp from './app';

export default ({url}) => {
  return new Promise((resolve, reject) => {
      const {app, router} = createApp();
      router.push(url);
      router.onReady(() => {
        const matchComponents = router.getMatchedComponents();
        if (matchComponents.length === 0) { // 没有匹配到前端路由
          return reject({code: 404});
        } else {
          return resolve(app);
        }
      });
    }
  );
}