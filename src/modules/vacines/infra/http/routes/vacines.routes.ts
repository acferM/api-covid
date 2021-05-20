import { Router } from 'express'
import VacinesController from '../controller/VacinesController'

const vacinesRouter = Router()

const vacinesController = new VacinesController

vacinesRouter.post('/', vacinesController.create)

vacinesRouter.get('/', vacinesController.index)

vacinesRouter.put('/:id', vacinesController.update)

vacinesRouter.delete('/:id', vacinesController.delete)

export { vacinesRouter }
