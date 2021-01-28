// 服务端入口
import createApp from './app';

export default (context) => {
  const {url} = context;
  return new Promise((resolve, reject) => {
      const {app, router,store} = createApp();
      router.push(url);
      router.onReady(() => {
        const matchComponents = router.getMatchedComponents();// 路由匹配到的所有组件

        if (matchComponents.length === 0) { // 没有匹配到前端路由
          return reject({code: 404});
        } else {
          Promise.all(matchComponents.map(component => {
            if(component.asyncData){
              return component.asyncData(store)
            }
          })).then(()=>{
            context.state = store.state;
            return resolve(app);
          })
        }
      });
    }
  );
}