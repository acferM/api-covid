import CreateGroupService from "@modules/group/services/CreateGroupService";
import DeleteGroupService from "@modules/group/services/DeleteGroupService";
import ListAllGroupsService from "@modules/group/services/ListAllGroupsService";
import UpdateGroupService from "@modules/group/services/UpdateGroupService";
import { Request, Response } from "express";

class GroupsController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { denomination, min_age, max_age } = request.body

      const createGroup = new CreateGroupService()

      const group = await createGroup.execute({ denomination, min_age, max_age })

      return response.json(group)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const listAllGroups = new ListAllGroupsService()

      const groups = await listAllGroups.execute()

      return response.json(groups)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { denomination, min_age, max_age } = request.body
      const { id } = request.params

      const updateGroup = new UpdateGroupService()

      const group = await updateGroup.execute({ id, denomination, min_age, max_age })

      return response.json(group)
    } catch (err) {
      return response.status(404).json({ error: err.message })
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params

      const deleteGroup = new DeleteGroupService()

      await deleteGroup.execute(id)

      return response.status(204).send()
    } catch (err) {
      return response.status(404).json({ error: err.message })
    }
  }
}

export default GroupsController
