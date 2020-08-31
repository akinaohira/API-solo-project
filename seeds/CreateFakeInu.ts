import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Inu from '../entities/entities'

export default class CreateInu implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
      await connection
      .createQueryBuilder()
      .insert()
      .into(Inu)
      .values([
       {name : "snowBall", type: "Bichon frise"},
       {name : "Saburou", type: "Shibainu"}
    ])
    .execute();
  }
}