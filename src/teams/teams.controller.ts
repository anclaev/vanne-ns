import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common'

import { TeamsService } from './teams.service'
import Team from './teams.entity'

import { Error } from '@common/interfaces/error'

import { AddTeamDto } from './dto/addTeam.dto'

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post('add')
  async add(@Body() dto: AddTeamDto): Promise<Team> {
    const newTeam = await this.teamsService.add(dto)

    if (newTeam instanceof Error) {
      throw new HttpException(newTeam.message, HttpStatus.BAD_REQUEST)
    }

    return newTeam
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Team> {
    const team = await this.teamsService.getById(id)

    if (!team) throw new NotFoundException()

    return team as Team
  }
}
