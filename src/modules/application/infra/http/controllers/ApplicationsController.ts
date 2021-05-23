import CreateApplicationService from "@modules/application/services/CreateApplicationService";
import DeleteApplicationService from "@modules/application/services/DeleteApplicationService";
import ListAllApplicationsService from "@modules/application/services/ListAllApplicationsService";
import UpdateApplicationService from "@modules/application/services/UpdateApplicationService";
import { Request, Response } from "express";

class ApplicationsController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
        date,
        hour,
        description,
        vacine_id,
        applicator_id,
        patient_id
      } = request.body

      const createApplication = new CreateApplicationService()

      const application = await createApplication.execute({
        date,
        hour,
        description,
        vacine_id,
        applicator_id,
        patient_id
      })

      return response.json(application)
    } catch (err) {
      return response.json({ error: err.message })
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const listAllApplications = new ListAllApplicationsService()

      const applications = await listAllApplications.execute()

      return response.json(applications)
    } catch (err) {
      return response.json({ error: err.message })
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { date, hour, description, vacine_id, applicator_id } = request.body
      const { id } = request.params

      const updateApplication = new UpdateApplicationService()

      const application = await updateApplication.execute({ id, date, hour, description, vacine_id, applicator_id })

      return response.json(application)
    } catch (err) {
      return response.json({ error: err.message })
    }
  }


  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const deleteApplication = new DeleteApplicationService()

      await deleteApplication.execute(id)

      return response.status(204).send()
    } catch (err) {
      return response.json({ error: err.message })
    }
  }
}

export default ApplicationsController
