import Group from "../infra/typeorm/entities/Group"
import GroupsRepository from "../infra/typeorm/repositories/GroupsRepository"

interface IRequest {
  id: string
  denomination: string
  min_age: number
  max_age: number
}

class UpdateGroupService {
  async execute({ id, denomination, min_age, max_age }: IRequest): Promise<Group> {
    const groupsRepository = new GroupsRepository()

    const group = await groupsRepository.findById(id)

    if (!group) {
      throw new Error('Group not found')
    }

    group.denomination = denomination
    group.min_age = min_age
    group.max_age = max_age

    const updatedGroup = await groupsRepository.save(group)

    return updatedGroup
  }
}

export default UpdateGroupService
