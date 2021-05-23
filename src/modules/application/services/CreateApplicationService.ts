import PatientsRepository from "@modules/Pacients/infra/typeorm/repositories/PatientsRepository"
import Application from "../infra/typeorm/entities/Application"
import ApplicationsRepository from "../infra/typeorm/repositories/ApplicationsRepository"

interface IRequest {
  date: string
  hour: string
  description: string
  applicator_id: string
  vacine_id: string
  patient_id: string
}

class CreateApplicationService {
  async execute({
    date,
    hour,
    description,
    applicator_id,
    vacine_id,
    patient_id
  }: IRequest): Promise<Application> {
    const applicationRepository = new ApplicationsRepository()
    const patientsRepository = new PatientsRepository()

    const applicationExists = await applicationRepository.findByDateTime(date, hour)

    if (applicationExists) {
      throw new Error('This date and hour is already occupied')
    }

    const patient = await patientsRepository.findById(patient_id)

    if (!patient) {
      throw new Error('Patient not found')
    }

    const application = await applicationRepository.create({
      date,
      hour,
      description,
      applicator_id,
      vacine_id,
      patient_id
    })

    patient.applications.push(application)

    await patientsRepository.save(patient)

    return application
  }
}

export default CreateApplicationService
