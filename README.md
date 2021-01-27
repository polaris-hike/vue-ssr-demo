## SSR 构建流程
SSR 是服务端渲染。不用 SSR 是传统的客户端渲染。
传统的客户端渲染有两个缺点：1. 无法进行 SEO 优化 2. 首页白屏时间长。 其原因是网页一开始仅是一个 id 为 app 的div标签。
请求完js后再进行渲染。
ssr 则是由服务端直接返回 html。

其基本构建流程为 由服务器返回html字符串。需要前端代码打包出client.bundle.js 用于插入到服务端html中加载网站所需的js，例如点击事件交互等等，
服务端打包出server.bundle.js 用于生成html字符串。最后用户访问服务器的时候，服务器返回vue实例生成的html字符串。

需注意的是，用户访问服务器，需要对每个用户生成不同的实例

