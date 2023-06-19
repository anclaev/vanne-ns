export interface IConfig {
  APP_PORT: number
  COOKIE_SECRET: string
  ORIGIN: string
  REDIS_HOST: string
  PG_USER: string
  PG_PASS: string
  PG_HOST: string
  PG_DB: string
  PG_PORT: number
  JWT_ACCESS_TOKEN_SECRET: string
  JWT_ACCESS_TOKEN_EXPIRATION: number
  JWT_REFRESH_TOKEN_SECRET: string
  JWT_REFRESH_TOKEN_EXPIRATION: number
}

export interface IDBConfig {
  host: string
  port: number
  user: string
  pass: string
  db: string
}
