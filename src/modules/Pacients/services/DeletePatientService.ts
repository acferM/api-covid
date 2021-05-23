import PatientsRepository from "../infra/typeorm/repositories/PatientsRepository"

class DeletePatientService {
  async execute(id: string): Promise<void> {
    const patientsRepository = new PatientsRepository()

    const patient = await patientsRepository.findById(id)

    if (!patient) {
      throw new Error('Patient not found')
    }

    await patientsRepository.delete(patient)
  }
}

export default DeletePatientService
