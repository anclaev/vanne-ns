import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { CommonModule } from '@common/common.module'

import { options } from '@utils/config'

@Module({
  imports: [ConfigModule.forRoot(options), CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
