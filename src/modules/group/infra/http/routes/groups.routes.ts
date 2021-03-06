import { Router } from 'express'
import GroupsController from '../controllers/GroupsController'

const groupsRouter = Router()

const groupsController = new GroupsController()

groupsRouter.post('/', groupsController.create)

groupsRouter.get('/', groupsController.index)

groupsRouter.put('/:id', groupsController.update)

groupsRouter.delete('/:id', groupsController.delete)

export { groupsRouter }
