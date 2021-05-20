import GroupsRepository from "../infra/typeorm/repositories/GroupsRepository"

class ListAllGroupsService {
  async execute() {
    const groupsRepository = new GroupsRepository()

    const groups = await groupsRepository.listAll()

    return groups
  }
}

export default ListAllGroupsService
