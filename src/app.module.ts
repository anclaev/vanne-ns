import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { CommonModule } from '@common/common.module'

import { options } from '@utils/config'
import { DbModule } from './db/db.module'
import { TeamsModule } from './teams/teams.module'

@Module({
  imports: [
    ConfigModule.forRoot(options),
    CommonModule,
    // DbModule
    // TeamsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
