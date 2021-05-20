import Nurse from "../infra/typeorm/entities/Nurse"
import NursesRepository from "../infra/typeorm/repositories/NursesRepository"

interface IRequest {
  id: string
  name: string
  coren: string
  formation_year: string
  contact: string
}

class UpdateNurseService {
  async execute({ id, contact, name, coren, formation_year }: IRequest): Promise<Nurse> {
    const nursesRepository = new NursesRepository()

    const nurse = await nursesRepository.findById(id)

    if (!nurse) {
      throw new Error('Nurse not found')
    }

    nurse.contact = contact
    nurse.name = name
    nurse.coren = coren
    nurse.formation_year = formation_year

    const updatedNurse = await nursesRepository.save(nurse)

    return updatedNurse
  }
}

export default UpdateNurseService
