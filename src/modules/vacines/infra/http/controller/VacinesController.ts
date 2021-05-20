import CreateVacineService from "@modules/vacines/services/CreateVacineService";
import DeleteVacineService from "@modules/vacines/services/DeleteVacineService";
import ListAllVacinesService from "@modules/vacines/services/ListAllVacinesService";
import UpdateVacineService from "@modules/vacines/services/UpdateVacineService";
import { Request, Response } from "express";

class VacinesController {
  async create(request: Request, response: Response) {
    try {
      const { name, manufacturer, time_between_applications, applications_amount } = request.body


      const createVacine = new CreateVacineService()

      const vacine = await createVacine.execute({
        name,
        manufacturer,
        time_between_applications,
        applications_amount
      })

      return response.status(201).json(vacine)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }

  async index(request: Request, response: Response) {
    try {
      const listAllVacines = new ListAllVacinesService()

      const vacines = await listAllVacines.execute()

      return response.json(vacines)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { name, manufacturer, time_between_applications, applications_amount } = request.body
      const { id } = request.params

      const updateVacine = new UpdateVacineService()

      const vacine = await updateVacine.execute({
        id,
        name,
        manufacturer,
        time_between_applications,
        applications_amount
      })

      return response.json(vacine)
    } catch (err) {
      console.log(err)

      return response.status(404).json({ error: err.message })
    }
  }


  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params

      const deleteVacine = new DeleteVacineService()

      await deleteVacine.execute(id)

      return response.status(204).send()
    } catch (err) {
      return response.status(404).json({ error: err.message })
    }
  }
}

export default VacinesController
