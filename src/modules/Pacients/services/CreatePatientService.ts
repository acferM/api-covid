import GroupsRepository from "@modules/group/infra/typeorm/repositories/GroupsRepository"
import Patient from "../infra/typeorm/entities/Patient"
import PatientsRepository from "../infra/typeorm/repositories/PatientsRepository"

interface IRequest {
  name: string
  birthday: string
  individual_characteristics: string
  group_id: string
}

class CreatePatientService {
  async execute({
    name,
    birthday,
    individual_characteristics,
    group_id
  }: IRequest): Promise<Patient> {
    const patientsRepository = new PatientsRepository()
    const groupsRepository = new GroupsRepository()

    const groupExists = await groupsRepository.findById(group_id)

    if (!groupExists) {
      throw new Error('Group not found')
    }

    const patient = await patientsRepository.create({
      name,
      birthday,
      individual_characteristics,
      group_id
    })

    return patient
  }
}

export default CreatePatientService
