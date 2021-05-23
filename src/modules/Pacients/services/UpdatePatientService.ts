import Patient from "../infra/typeorm/entities/Patient"
import PatientsRepository from "../infra/typeorm/repositories/PatientsRepository"

interface IRequest {
  id: string
  name: string
  birthday: string
  individual_characteristics: string
  group_id: string
}

class UpdatePatientService {
  async execute({
    id,
    name,
    birthday,
    individual_characteristics,
    group_id
  }: IRequest): Promise<Patient> {
    const patientsRepository = new PatientsRepository()

    const patient = await patientsRepository.findById(id)

    if (!patient) {
      throw new Error('patient not found')
    }

    patient.name = name
    patient.birthday = birthday
    patient.individual_characteristics = individual_characteristics
    patient.group_id = group_id

    const updatedPatient = await patientsRepository.save(patient)

    return updatedPatient
  }
}

export default UpdatePatientService
