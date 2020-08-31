import { getRepository, DeleteResult,Repository } from "typeorm";
import Inu from '../entities';
import { IManager } from "../manager"

class InuManager implements IManager {
  protected inuRepository: Repository<Inu>;

  constructor() {
    this.inuRepository = getRepository(Inu);
  }

// get dog
async getInu(Inuname: string): Promise<Inu>{
  const inu = await this.inuRepository.findOne({type:Inuname });
  return inu
}


// update Inu inforation 
async updateInu(InuName: string, updates: Partial<Inu>): Promise<Inu> {
  await this.inuRepository.update(InuName, updates);
  let user = await this.inuRepository.findOne({id: InuName });
  return user
}


// delete inu information 
async removeInu(name: string):Promise<DeleteResult> {
  const inu = await this.inuRepository.findOne({name: name});
  const DeleteResult = await this.inuRepository.delete(inu);
  return DeleteResult
}

export  InuManager
// create dog
// const newInu = new Inu();
// newInu.name = name;
// newInu.type = type;
// return inuRopository.save(newInu);
