import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import fingerprint from 'express-fingerprint'
import cookieParser from 'cookie-parser'

import { AppModule } from './app.module'

import { ConfigService, LoggerService } from '@services'

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)
  const logger = app.get(LoggerService)

  const port = config.val<number>('APP_PORT')
  const origin = config.val<string>('ORIGIN')
  const cookieSecret = config.val<string>('COOKIE_SECRET')

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  app.use(cookieParser(cookieSecret))

  app.enableCors({
    credentials: true,
    origin,
  })

  const expressInstance = app.getHttpAdapter().getInstance()

  expressInstance.use(fingerprint())

  await app.listen(port).finally(() => {
    logger.log(`Successfully launched on ${port} port!`)
  })
}

bootstrap()
