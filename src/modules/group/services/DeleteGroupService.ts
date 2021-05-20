import GroupsRepository from "../infra/typeorm/repositories/GroupsRepository"

class DeleteGroupService {
  async execute(id: string): Promise<void> {
    const groupsRepository = new GroupsRepository()

    const group = await groupsRepository.findById(id)

    if (!group) {
      throw new Error('Group not found')
    }

    await groupsRepository.delete(group)
  }
}

export default DeleteGroupService
