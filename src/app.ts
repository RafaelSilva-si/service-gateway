import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import envs from "./config/global";

const app = express();

const userServiceProxy = createProxyMiddleware({
  target: envs.USER_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    "^/user": "",
  },
});

const authServiceProxy = createProxyMiddleware({
  target: envs.AUTH_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    "^/auth": "",
  },
});

app.use("/user", userServiceProxy);
app.use("/auth", authServiceProxy);

const PORT = envs.PORT;
app.listen(PORT, () => {
  console.log(`API Gateway rodando na porta ${PORT}`);
});
