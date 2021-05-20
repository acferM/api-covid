import CreateNurseService from "@modules/nurse/services/CreateNurseService";
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
}

export default NursesController
