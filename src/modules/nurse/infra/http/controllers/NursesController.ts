import CreateNurseService from "@modules/nurse/services/CreateNurseService";
import DeleteNurseService from "@modules/nurse/services/DeleteNurseService";
import ListAllNursesService from "@modules/nurse/services/ListAllNursesService";
import UpdateNurseService from "@modules/nurse/services/UpdateNurseService";
import { Request, Response } from "express";

class NursesController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, coren, formation_year, contact } = request.body

      const createNurse = new CreateNurseService()

      const nurse = await createNurse.execute({ name, coren, formation_year, contact })

      return response.json(nurse)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const listAllNurses = new ListAllNursesService()

      const nurses = await listAllNurses.execute()

      return response.json(nurses)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { name, coren, formation_year, contact } = request.body
      const { id } = request.params

      const updateNurse = new UpdateNurseService()

      const nurse = await updateNurse.execute({ id, name, coren, formation_year, contact })

      return response.json(nurse)
    } catch (err) {
      return response.status(404).json({ error: err.message })
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const deleteNurse = new DeleteNurseService()

      await deleteNurse.execute(id)

      return response.status(204).send()
    } catch (err) {
      return response.status(404).json({ error: err.message })
    }
  }
}

export default NursesController
