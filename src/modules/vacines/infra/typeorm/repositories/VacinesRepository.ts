import { getRepository, Repository } from "typeorm"
import Vacine from "../entities/Vacine"

interface CreateVacineDTO {
  name: string
  manufacturer: string
  time_between_applications: string
  applications_amount: number
}

class VacinesRepository {
  private ormRepository: Repository<Vacine>

  constructor() {
    this.ormRepository = getRepository(Vacine)
  }

  async create(data: CreateVacineDTO): Promise<Vacine> {
    const vacine = this.ormRepository.create(data)

    await this.ormRepository.save(vacine)

    return vacine
  }

  async findById(id: string): Promise<Vacine | undefined> {
    return this.ormRepository.findOne(id)
  }

  async findByName(name: string): Promise<Vacine | undefined> {
    const vacines = await this.ormRepository.find()

    const vacine = vacines.find(vacine => vacine.name.toLowerCase() === name)

    return vacine
  }

  async listAll(): Promise<Vacine[]> {
    return this.ormRepository.find()
  }

  async save(vacine: Vacine) {
    return this.ormRepository.save(vacine)
  }

  async delete(vacine: Vacine): Promise<void> {
    await this.ormRepository.remove(vacine)
  }
}

export default VacinesRepository
