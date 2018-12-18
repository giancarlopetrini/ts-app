import * as dotenv from "dotenv";

dotenv.config();

export const env = {
  JWT_SECRET: process.env.JWT_SECRET || 'change_this_secret!',
  JWT_EXPIRATION: '1h',
  PSQL_URL: 'localhost',
  PSQL_USER: 'testuser',
  PSQL_PASS: 'testpass',
}