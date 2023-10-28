import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator'

export class AddTeamDto {
  @IsString()
  @MinLength(8)
  name: string

  @IsString()
  @MinLength(3)
  alias: string

  @IsOptional()
  @IsBoolean()
  activated?: boolean
}
