import Nurse from "../infra/typeorm/entities/Nurse"
import NursesRepository from "../infra/typeorm/repositories/NursesRepository"

interface IRequest {
  name: string
  coren: string
  formation_year: string
  contact: string
}

class CreateNurseService {
  async execute({
    name,
    coren,
    formation_year,
    contact
  }: IRequest): Promise<Nurse> {
    const nursesRepository = new NursesRepository()

    const nurseExists = await nursesRepository.findByName(name)

    if (nurseExists) {
      throw new Error('Nurse already exists')
    }

    const nurse = await nursesRepository.create({
      name,
      coren,
      formation_year,
      contact
    })

    return nurse
  }
}

export default CreateNurseService
