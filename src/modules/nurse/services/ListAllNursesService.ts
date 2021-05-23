import Nurse from "../infra/typeorm/entities/Nurse"
import NursesRepository from "../infra/typeorm/repositories/NursesRepository"

class ListAllNursesService {
  async execute(): Promise<Nurse[]> {
    const nursesRepository = new NursesRepository()

    const nurses = await nursesRepository.listAll()

    return nurses
  }
}

export default ListAllNursesService
