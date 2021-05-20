import NursesRepository from "../infra/typeorm/repositories/NursesRepository"

class ListAllNursesService {
  async execute() {
    const nursesRepository = new NursesRepository()

    const nurses = await nursesRepository.listAll()

    return nurses
  }
}

export default ListAllNursesService
