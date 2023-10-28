import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { TeamsService } from './teams.service'
import { Team } from './teams.entity'
import { TeamsController } from './teams.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamsService],
  controllers: [TeamsController],
})
export class TeamsModule {}
