import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
class Inu {
  @PrimaryGeneratedColumn()
  public id: string

  @Column()
  public name: string

  @Column()
  public type: string
}

export default Inu;