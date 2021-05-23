import { getRepository, Repository } from "typeorm"
import Patient from "../entities/Patient"

interface CreatePatientDTO {
  name: string
  birthday: string
  individual_characteristics: string
  group_id: string
}

class PatientsRepository {
  private ormRepository: Repository<Patient>

  constructor() {
    this.ormRepository = getRepository(Patient)
  }

  async create(data: CreatePatientDTO) {
    const patient = this.ormRepository.create({
      ...data,
      applications: []
    })

    await this.ormRepository.save(patient)

    return patient
  }

  async findById(id: string): Promise<Patient | undefined> {
    const patient = await this.ormRepository.findOne(id)

    return patient
  }

  async listAll(): Promise<Patient[]> {
    return this.ormRepository.find()
  }

  async save(patient: Patient): Promise<Patient> {
    return this.ormRepository.save(patient)
  }

  async delete(patient: Patient): Promise<void> {
    await this.ormRepository.remove(patient)
  }
}

export default PatientsRepository
