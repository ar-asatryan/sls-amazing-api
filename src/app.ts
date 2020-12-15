import Koa from "koa";
import cors from "@koa/cors";

import myGetCall from "./routes/myRouter";
import myPostCall from "./routes/myRouter2";

import compose from "koa-compose";

const app = new Koa();

app.use(compose([cors(), myGetCall.routes() as any, myPostCall.routes()]));

export default app;
