const Koa = require('koa');
const static = require('koa-static');
const Router = require('koa-router');
const VueServerRenderer = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');
const serverBundle = fs.readFileSync(path.resolve(__dirname,'dist/server.bundle.js'),'utf8');
const template = fs.readFileSync(path.resolve(__dirname,'dist/server.html'),'utf8');

const app = new Koa();
const router = new Router();

const render = VueServerRenderer.createBundleRenderer(serverBundle,{
    template
})

router.get('/',async (ctx)=>{
    ctx.body = await new Promise((resolve,reject)=>{
        render.renderToString({url:ctx.url},(err,html)=>{
            if(err) reject(err);
            resolve(html);
        })
    })
})
// 用户访问服务器 一个不存在的路径时 ，返回给首页，通过前端js渲染，会重新根据路径渲染对应的组件
router.get('/(.*)',async (ctx)=>{
    ctx.body = await new Promise((resolve,reject)=>{
        render.renderToString({url:ctx.url},(err,html)=>{
            if(err && err.code === 404) resolve(`not found`);
            resolve(html);
        })
    })
})

// 客户端访问路径时会先去dist文件下查找
app.use(static(path.resolve(__dirname,'dist')));
app.use(router.routes());



app.listen('8000',function () {
    console.log('server start http://localhost:8000');
})
