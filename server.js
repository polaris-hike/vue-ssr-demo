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
        render.renderToString((err,html)=>{
            if(err) reject(err);
            resolve(html);
        })
    })
    //const html= await render.renderToString()
})

app.use(static(path.resolve(__dirname,'dist')));
app.use(router.routes());

app.listen('8000',function () {
    console.log('server start http://localhost:8000');
})
