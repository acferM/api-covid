import { getRepository, Repository } from "typeorm"
import Nurse from "../entities/Nurse"

interface CreateNurseDTO {
  name: string
  coren: string
  formation_year: string
  contact: string
}

class NursesRepository {
  private ormRepository: Repository<Nurse>

  constructor() {
    this.ormRepository = getRepository(Nurse)
  }

  async create(data: CreateNurseDTO) {
    const nurse = this.ormRepository.create(data)

    await this.ormRepository.save(nurse)

    return nurse
  }

  async findByName(name: string): Promise<Nurse | undefined> {
    const nurses = await this.ormRepository.find()

    const nurse = nurses.find(nurse => nurse.name.toLowerCase() === name)

    return nurse
  }
}

export default NursesRepository
