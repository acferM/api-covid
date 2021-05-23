import { Router } from 'express'
import PatientsController from '../controllers/PatientsController'

const patientsRouter = Router()
const patientsController = new PatientsController()

patientsRouter.post('/', patientsController.create)

patientsRouter.get('/', patientsController.index)

patientsRouter.put('/:id', patientsController.update)

patientsRouter.delete('/:id', patientsController.delete)

export { patientsRouter }
