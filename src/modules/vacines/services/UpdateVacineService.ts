import Vacine from "../infra/typeorm/entities/Vacine"
import VacinesRepository from "../infra/typeorm/repositories/VacinesRepository"

interface IRequest {
  id: string
  name: string
  manufacturer: string
  time_between_applications: string
  applications_amount: number
}

class UpdateVacineService {
  async execute({
    id,
    name,
    manufacturer,
    applications_amount,
    time_between_applications
  }: IRequest): Promise<Vacine> {
    const vacinesRepository = new VacinesRepository()

    const vacine = await vacinesRepository.findById(id)

    if (!vacine) {
      throw new Error('Vacine not found')
    }

    vacine.name = name
    vacine.manufacturer = manufacturer
    vacine.applications_amount = applications_amount
    vacine.time_between_applications = time_between_applications

    const updatedVacine = await vacinesRepository.save(vacine)

    return updatedVacine
  }
}

export default UpdateVacineService
