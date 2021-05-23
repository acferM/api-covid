import Application from "../infra/typeorm/entities/Application"
import ApplicationsRepository from "../infra/typeorm/repositories/ApplicationsRepository"

interface IRequest {
  id: string
  date: string
  hour: string
  description: string
  vacine_id: string
  applicator_id: string
}

class UpdateApplicationService {
  async execute({
    id,
    date,
    hour,
    description,
    vacine_id,
    applicator_id
  }: IRequest): Promise<Application> {
    const applicationsRepository = new ApplicationsRepository()

    const application = await applicationsRepository.findById(id)

    if (!application) {
      throw new Error('application not found')
    }

    application.date = date
    application.hour = hour
    application.description = description
    application.applicator_id = applicator_id
    application.vacine_id = vacine_id

    const updatedApplication = await applicationsRepository.save(application)

    return updatedApplication
  }
}

export default UpdateApplicationService
