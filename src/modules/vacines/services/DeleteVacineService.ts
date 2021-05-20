import VacinesRepository from "../infra/typeorm/repositories/VacinesRepository"

class DeleteVacineService {
  async execute(id: string): Promise<void> {
    const vacinesRepository = new VacinesRepository()

    const vacine = await vacinesRepository.findById(id)

    if (!vacine) {
      throw new Error('Vacine not found')
    }

    await vacinesRepository.delete(vacine)
  }
}

export default DeleteVacineService
