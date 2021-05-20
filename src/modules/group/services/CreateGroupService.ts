import Group from "../infra/typeorm/entities/Group"
import GroupsRepository from "../infra/typeorm/repositories/GroupsRepository"

interface IRequest {
  denomination: string
  min_age: number
  max_age: number
}

class CreateGroupService {
  async execute({
    denomination,
    min_age,
    max_age
  }: IRequest): Promise<Group> {
    const groupsRepository = new GroupsRepository()

    const groupExists = await groupsRepository.findByName(denomination)

    if (groupExists) {
      throw new Error('Group already exists')
    }

    const group = await groupsRepository.create({
      denomination,
      min_age,
      max_age
    })

    return group
  }
}

export default CreateGroupService
