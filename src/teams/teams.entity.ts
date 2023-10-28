import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({
  name: 'teams',
})
export class Team {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public name: string

  @Column()
  public alias: string

  @Column({ default: false })
  public activated: boolean
}

export default Team
