const Framework = require('./framework');
const app = new Framework();

app.use(async (ctx, next) => {
  await next();
});
app.use((ctx) => {
  ctx.body = 123;
});

app.listen(8888);