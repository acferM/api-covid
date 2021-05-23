import Group from "../infra/typeorm/entities/Group"
import GroupsRepository from "../infra/typeorm/repositories/GroupsRepository"

class ListAllGroupsService {
  async execute(): Promise<Group[]> {
    const groupsRepository = new GroupsRepository()

    const groups = await groupsRepository.listAll()

    return groups
  }
}

export default ListAllGroupsService
