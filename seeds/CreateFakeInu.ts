import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Inu from '../entities'

export default class CreateInu implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
      await connection
      .createQueryBuilder()
      .insert()
      .into(Inu)
      .values([
       {id: "1", name : "Edy", type: "Toy Poodle"}
    ])
    .execute();
  }
}