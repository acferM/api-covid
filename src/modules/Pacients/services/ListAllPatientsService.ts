import Patient from "../infra/typeorm/entities/Patient"
import PatientsRepository from "../infra/typeorm/repositories/PatientsRepository"

class ListAllPatientsService {
  async execute(): Promise<Patient[]> {
    const patientsRepository = new PatientsRepository()

    const patients = await patientsRepository.listAll()

    return patients
  }
}

export default ListAllPatientsService
