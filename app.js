const Framework = require('./framework');
const app = new Framework();

app.use(async (ctx, next) => {
  console.log(123);
  await next();
});
app.use((ctx) => {
  ctx.body = 123;
});

app.listen(8888);