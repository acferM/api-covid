import ApplicationsRepository from "../infra/typeorm/repositories/ApplicationsRepository"

class DeleteApplicationService {
  async execute(id: string): Promise<void> {
    const applicationsRepository = new ApplicationsRepository()

    const application = await applicationsRepository.findById(id)

    if (!application) {
      throw new Error('Application not found')
    }

    await applicationsRepository.delete(application)
  }
}

export default DeleteApplicationService
