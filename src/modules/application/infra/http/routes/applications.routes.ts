import { Router } from 'express'
import ApplicationsController from '../controllers/ApplicationsController'

const applicationsRouter = Router()
const applicationsController = new ApplicationsController()

applicationsRouter.post('/', applicationsController.create)

applicationsRouter.get('/', applicationsController.index)

applicationsRouter.put('/:id', applicationsController.update)

applicationsRouter.delete('/:id', applicationsController.delete)

export { applicationsRouter }
