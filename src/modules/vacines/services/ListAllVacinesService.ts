import Vacine from "../infra/typeorm/entities/Vacine"
import VacinesRepository from "../infra/typeorm/repositories/VacinesRepository"

class ListAllVacinesService {
  async execute(): Promise<Vacine[]> {
    const vacinesRepository = new VacinesRepository()

    const vacines = await vacinesRepository.listAll()

    return vacines
  }
}

export default ListAllVacinesService
