import VacinesRepository from "../infra/typeorm/repositories/VacinesRepository"

class ListAllVacinesService {
  async execute() {
    const vacinesRepository = new VacinesRepository()

    const vacines = await vacinesRepository.listAll()

    return vacines
  }
}

export default ListAllVacinesService
