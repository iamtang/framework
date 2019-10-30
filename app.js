const Framework = require('./framework');
const app = new Framework();


app.use((ctx) => {
  console.log(ctx.query);
});
app.listen(8005);