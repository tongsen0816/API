let Koa = require('koa');
let cors = require('koa-cors');
let app = new Koa();
let bodyParser = require('koa-bodyparser');
let router = require('koa-router')({});
let path = require('path');
let routerHandler = require('./Routes/index');
let config = require('./Configs/index')

let ErrorHandler = require('./Tools/ErrorHandler');

let process = require('process');






app.use(async (ctx, next) => {
  try {
    await next();
    if (ctx.response.status == 404) {
      return;
    }
  } catch (err) {
    console.log('error --->')
    console.log(err)
    if (err.message == 'CODE_NO_RIGHT_ERROR') {
      return;
    }
    let handlerRs = ErrorHandler.handle(err.message);
    if (!handlerRs) {
      ctx.body = {
        code: -1,
        message: err.name,
        data: err.message
      }
      return;
    }
    ctx.body = {
      code: handlerRs.code,
      message: handlerRs.message,
    }
  }
});

let ResConstant = require('./Tools/ResConstant');
app.use(async function (ctx, next) {
  ctx.returnValue = function (constantkey, data = {}) {
    if (!ResConstant[constantkey]) {
      throw new Error(ResConstant.CODE_SYSTEM_ERROR.key);
    }
    ctx.body = {
      code: ResConstant[constantkey].code,
      message: ResConstant[constantkey].message,
      data: data
    }
  }
  await next();
})

app.use(bodyParser());

let HttpValidate = require('./Tools/HttpValidate');
app.use(async function (ctx, next) {
  ctx.httpValidate = new HttpValidate(ctx);
  await next()
})

//路由处理
routerHandler(router);
app.use(cors());



app
  .use(router.routes())
  .use(router.allowedMethods());

app.on('error', function (error, ctx) { })

const send = require('koa-send');


if (module.parent) {
  module.exports = app;
} else {
  app.listen(9520);
}

