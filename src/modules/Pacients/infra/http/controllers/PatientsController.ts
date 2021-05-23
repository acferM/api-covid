import CreatePatientService from "@modules/Pacients/services/CreatePatientService";
import DeletePatientService from "@modules/Pacients/services/DeletePatientService";
import ListAllPatientsService from "@modules/Pacients/services/ListAllPatientsService";
import UpdatePatientService from "@modules/Pacients/services/UpdatePatientService";
import { Request, Response } from "express";

class PatientsController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        birthday,
        individual_characteristics,
        group_id
      } = request.body

      const createPatient = new CreatePatientService()

      const patient = await createPatient.execute({
        name,
        birthday,
        individual_characteristics,
        group_id
      })

      return response.json(patient)
    } catch (err) {
      return response.status(404).json({ error: err.message })
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const listAllPatients = new ListAllPatientsService()

      const patients = await listAllPatients.execute()

      return response.json(patients)
    } catch (err) {
      return response.json({ error: err.message })
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        birthday,
        individual_characteristics,
        group_id
      } = request.body
      const { id } = request.params

      const updatePatient = new UpdatePatientService()

      const patient = await updatePatient.execute({
        id,
        name,
        birthday,
        individual_characteristics,
        group_id
      })

      return response.json(patient)
    } catch (err) {
      return response.status(404).json({ error: err.message })
    }
  }


  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const deletePatient = new DeletePatientService()

      await deletePatient.execute(id)

      return response.status(204).send()
    } catch (err) {
      return response.json({ error: err.message })
    }
  }
}

export default PatientsController
