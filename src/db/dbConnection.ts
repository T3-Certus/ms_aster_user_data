import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
  process.env.POSTGRESQL_DB!,
  process.env.POSTGRESQL_DB_USER!,
  process.env.POSTGRESQL_DB_PASSWORD,
  {
    host: process.env.POSTGRESQL_DB_HOST,
    schema: process.env.POSTGRESQL_DB_SCHEMA,
    dialect: 'postgres',
    logging: console.log,
  }
);
