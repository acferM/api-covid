import NursesRepository from "../infra/typeorm/repositories/NursesRepository"

class DeleteNurseService {
  async execute(id: string): Promise<void> {
    const nursesRepository = new NursesRepository()

    const nurse = await nursesRepository.findById(id)

    if (!nurse) {
      throw new Error('Nurse not found')
    }

    await nursesRepository.delete(nurse)
  }
}

export default DeleteNurseService
