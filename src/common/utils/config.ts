import { ConfigModuleOptions } from '@nestjs/config'
import Joi from 'joi'

export const validationSchema = Joi.object({
  APP_PORT: Joi.number().required(),
  COOKIE_SECRET: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  PG_USER: Joi.string().required(),
  PG_PASS: Joi.string().required(),
  PG_HOST: Joi.string().required(),
  PG_DB: Joi.string().required(),
  PG_PORT: Joi.number().required(),
  JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
  JWT_ACCESS_TOKEN_EXPIRATION: Joi.number().required(),
  JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
  JWT_REFRESH_TOKEN_EXPIRATION: Joi.number().required(),
  ORIGIN: Joi.string().required(),
})

export const options: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
  validationSchema,
}
