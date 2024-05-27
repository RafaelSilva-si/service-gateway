import dotenv from "dotenv";

dotenv.config();

const envs = {
  PORT: process.env.PORT,
  USER_SERVICE_URL: process.env.USER_SERVICE_URL,
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
  EVENTS_SERVICE_URL: process.env.EVENTS_SERVICE_URL,
};

export default envs;
