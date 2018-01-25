const Koa = require('koa');
const app = new Koa();

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
      let postData = await parsePostData(ctx);
      ctx.body = postData;
  } else {
    ctx.body = '<h1>请输入正确的地址</h1>'
  }
})

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = '';
      ctx.req.on('data', (data) => {
        postData = data;
      });
      ctx.req.on('end', () => {
        resolve(formatterData(postData));
      })
    } catch (e) {
      reject(e)
    }
  })
}

function formatterData(origin) {
  origin = origin.toString();
  if (origin.length > 0) {
    let dataList = [];
    let target = {};
    dataList = origin.split('&');
    for (let i = 0; i < dataList.length; i++) {
      dataListItem = dataList[i].split('=');
      target[dataListItem[0]] = dataListItem[1];
    }
    return target;
  }
}

app.listen(3000, () => {
  console.log('server start at port 3000');
});
