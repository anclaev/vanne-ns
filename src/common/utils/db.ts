import { ConfigService } from '../services/config.service'
import { IDBConfig } from '../interfaces/config'

export const dbConfig = (config: ConfigService): IDBConfig => ({
  db: config.val('PG_DB'),
  host: config.val('PG_HOST'),
  user: config.val('PG_USER'),
  pass: config.val('PG_PASS'),
  port: config.val('PG_PORT'),
})
