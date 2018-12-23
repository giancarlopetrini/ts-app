import * as dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET || 'change_this_secret!',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
}