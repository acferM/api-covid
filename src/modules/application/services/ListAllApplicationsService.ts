import Application from "../infra/typeorm/entities/Application"
import ApplicationsRepository from "../infra/typeorm/repositories/ApplicationsRepository"

class ListAllApplicationsService {
  async execute(): Promise<Application[]> {
    const applicationsRepository = new ApplicationsRepository()

    const applications = await applicationsRepository.listAll()

    return applications
  }
}

export default ListAllApplicationsService
