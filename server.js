const Koa = require('koa');
const Router = require('koa-router')
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');

const app = new Koa();
const router = new Router();

const vm = new Vue({
  data:{
    name:'wxw'
  },
  template:'<div>hello {{name}}</div>'
})
const template = fs.readFileSync(path.resolve(__dirname,'template.html'),'utf8');


router.get('/',async (ctx)=>{
  ctx.body = await VueServerRenderer.createRenderer({template}).renderToString(vm)
})

app.use(router.routes());

app.listen('8000',function () {
  console.log('server start http://localhost:/8000');

})
