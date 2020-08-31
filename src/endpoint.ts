import { getRepository, DeleteResult,Repository, createConnection } from "typeorm";
import Inu from '../entities/entities';
import express from 'express'
const app = express()
app.use(express.json())


// get a dog info
app.get('/inu/:name',async(req,res) => {
  let name = req.params.name;
  let result = await getInu(name)
  res.send(result)
})
async function getInu(Inuname: string): Promise<Inu> {
  const inu = await getRepository(Inu).findOne({name:Inuname });
  return inu
}

// update Inu inforation 
app.patch('/inu/:name', async(req,res) => {
  let name = req.params.name;
  let update  = req.body
  let result = await updateInu(name,update)
  res.send(result)
})
async function updateInu(InuName: string, updates: Partial<Inu>): Promise<Inu> {
  await getRepository(Inu).update({name: InuName}, updates);
  let inu = await getRepository(Inu).findOne({name: updates.name || InuName});
  return inu
}


// delete inu information 
app.delete('/inu/:name',async(req,res) => {
  let name = req.params.name
  let result = await removeInu(name)
  res.send(result)
})

async  function removeInu(name: string):Promise<string> {
  const inu = await getRepository(Inu).findOne({name: name});
  await getRepository(Inu).delete(inu);
  return `See you soon ${name}`
}


// create dog
app.post('/inu',async(req,res) => {
  if(req.body.name === undefined || req.body.type === undefined){
    res.send(400)
  }
  let newdog = req.body;
  let result = await bornNewdog(newdog)
  res.send(result)
})

async function bornNewdog(params: {name:string, type:string}):Promise<Inu>{
  const newInu = new Inu();
  newInu.name = params.name;
  newInu.type = params.type;
  return getRepository(Inu).save(newInu);
}

// first connect to database and liting POST
createConnection().then(()=> {
  app.listen(3000,()=> {
    console.log(`App listening on localhost:${3000}`)
  })
})