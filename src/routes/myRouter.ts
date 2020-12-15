const Router = require("koa-router");

const router = new Router();

const myGetCall = router.get("/first", async (ctx: any) => {
  ctx.body = { message: "Lambda GET - for test" };
});

export default myGetCall;
