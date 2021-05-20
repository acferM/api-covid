import VacinesRepository from "../infra/typeorm/repositories/VacinesRepository";

interface IRequest {
  name: string
  manufacturer: string
  time_between_applications: string
  applications_amount: number
}

class CreateVacineService {
  async execute({
    name,
    manufacturer,
    applications_amount,
    time_between_applications
  }: IRequest) {
    const vacinesRepository = new VacinesRepository()

    const vacineExists = await vacinesRepository.findByName(name.toLowerCase())

    if (vacineExists) {
      throw new Error('Vacine already exists')
    }

    const vacine = await vacinesRepository.create({
      name,
      manufacturer,
      applications_amount,
      time_between_applications
    })

    return vacine
  }
}

export default CreateVacineService
