import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository, Like } from 'typeorm'

import { Error } from '@common/interfaces/error'

import Team from './teams.entity'

import { ChangeActivateTeamDto } from './dto/changeActivateTeam.dto'
import { AddTeamDto } from './dto/addTeam.dto'
import { ChangeTeamDto } from './dto/changeTeam.dto'

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  async add(team: AddTeamDto): Promise<Team | Error> {
    const teamByName = await this.findOne(team.name)
    const teamByAlias = await this.findOne(team.alias)

    if (teamByName || teamByAlias) {
      return new Error('Already exists')
    }

    const newTeam = this.teamsRepository.create(team)

    await this.teamsRepository.save(newTeam)

    return newTeam
  }

  async changeActivate(dto: ChangeActivateTeamDto): Promise<Team | Error> {
    const team = await this.teamsRepository.findOne({
      where: [
        {
          name: dto.name?.trim(),
        },
        {
          alias: dto.alias?.trim(),
        },
      ],
    })

    if (!team) {
      return new Error('Not found')
    }

    await this.teamsRepository.update(team.id, {
      activated: dto.status === undefined ? !team.activated : dto.status,
    })

    return (await this.teamsRepository.findOne({
      where: { id: team.id },
    })) as Team
  }

  async edit(dto: ChangeTeamDto): Promise<Team | Error> {
    const team = await this.teamsRepository.findOne({
      where: [
        {
          name: dto.name?.trim(),
        },
        {
          alias: dto.alias?.trim(),
        },
      ],
    })

    if (!team) {
      return new Error('Not found')
    }

    if (dto.name) await this.teamsRepository.update(team.id, { name: dto.name })

    if (dto.alias)
      await this.teamsRepository.update(team.id, { alias: dto.alias })

    return (await this.teamsRepository.findOne({
      where: { id: team.id },
    })) as Team
  }

  async findOne(query: string): Promise<Team | null> {
    return await this.teamsRepository.findOne({
      where: [
        { name: Like(`%${query.trim()}%`) },
        { alias: Like(`%${query.trim()}%`) },
      ],
    })
  }

  async getById(id: number): Promise<Team | null> {
    return await this.teamsRepository.findOne({ where: { id } })
  }
}
