import { getRepository, Repository } from "typeorm"
import Group from "../entities/Group"

interface CreateGroupDTO {
  denomination: string
  min_age: number
  max_age: number
}

class GroupsRepository {
  private ormRepository: Repository<Group>

  constructor() {
    this.ormRepository = getRepository(Group)
  }

  async create(data: CreateGroupDTO) {
    const group = this.ormRepository.create(data)

    await this.ormRepository.save(group)

    return group
  }

  async findById(id: string): Promise<Group | undefined> {
    const group = await this.ormRepository.findOne(id)

    return group
  }

  async findByName(name: string): Promise<Group | undefined> {
    const groups = await this.ormRepository.find()

    const group = groups.find(group => group.denomination.toLowerCase() === name)

    return group
  }

  async listAll(): Promise<Group[]> {
    return this.ormRepository.find()
  }

  async save(group: Group): Promise<Group> {
    return this.ormRepository.save(group)
  }

  async delete(group: Group): Promise<void> {
    await this.ormRepository.remove(group)
  }
}

export default GroupsRepository
