import { Router } from 'express'
import NursesController from '../controllers/NursesController'

const nursesRouter = Router()

const nursesController = new NursesController()

nursesRouter.post('/', nursesController.create)

nursesRouter.get('/', nursesController.index)

nursesRouter.put('/:id', nursesController.update)

nursesRouter.delete('/:id', nursesController.delete)

export { nursesRouter }
