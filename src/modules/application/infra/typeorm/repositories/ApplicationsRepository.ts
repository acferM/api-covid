import { getRepository, Repository } from "typeorm"
import Application from "../entities/Application"

interface CreateApplicationDTO {
  date: string
  hour: string
  description: string
  applicator_id: string
  vacine_id: string
  patient_id: string
}

class ApplicationsRepository {
  private ormRepository: Repository<Application>

  constructor() {
    this.ormRepository = getRepository(Application)
  }

  async create(data: CreateApplicationDTO) {
    const application = this.ormRepository.create(data)

    await this.ormRepository.save(application)

    return application
  }

  async findById(id: string): Promise<Application | undefined> {
    const application = await this.ormRepository.findOne(id)

    return application
  }

  async findByDateTime(date: string, hour: string): Promise<Application | undefined> {
    const application = await this.ormRepository.findOne({
      where: { date, hour }
    })

    return application
  }

  async listAll(): Promise<Application[]> {
    return this.ormRepository.find()
  }

  async save(application: Application): Promise<Application> {
    return this.ormRepository.save(application)
  }

  async delete(application: Application): Promise<void> {
    await this.ormRepository.remove(application)
  }
}

export default ApplicationsRepository
