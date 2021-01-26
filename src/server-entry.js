// 服务端入口
import createApp from './app'

export default ()=>{
  const {app} = createApp();
  return app // 每次访问产生一个新的实例
}