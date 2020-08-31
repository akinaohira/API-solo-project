import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
class Inu {
  @Column()
  id: string

  @Column()
  name: string

  @Column()
  type: string
}

export default Inu;