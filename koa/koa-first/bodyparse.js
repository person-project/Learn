const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(async(ctx) => {
  console.log(ctx.url, ctx.method);
  if (ctx.url === '/' && ctx.method === 'GET') {
    const html = `
      <h1>Koa</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName" />
        <p>age</p>
        <input name="age" />
        <p>website</p>
        <input name="website" />
        <button type="submit">submit</button>
      </form>
    `

    ctx.body = html;
  } else if (ctx.url === '/' && ctx.method === 'POST') {
      let postData = ctx.request.body;
      ctx.body = postData;
  } else {
    ctx.body = '<h1>请输入正确的地址</h1>'
  }
})

app.listen(3000, () => {
  console.log('server start at port 3000');
});
