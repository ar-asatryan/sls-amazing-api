const Router = require("koa-router");

const router = new Router();

const myPostCall = router.post("/second", async (ctx: any) => {
  ctx.body = { message: "Lambda POST - for test <<UPDATED>>" };
});

export default myPostCall;
