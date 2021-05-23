import { Router } from 'express'
import { vacinesRouter } from '@modules/vacines/infra/http/routes/vacines.routes'
import { nursesRouter } from '@modules/nurse/infra/http/routes/nurses.routes'
import { groupsRouter } from '@modules/group/infra/http/routes/groups.routes'
import { applicationsRouter } from '@modules/application/infra/http/routes/applications.routes'
import { patientsRouter } from '@modules/Pacients/infra/http/routes/patients.routes'

const Routes = Router()

Routes.use('/vacines', vacinesRouter)
Routes.use('/nurses', nursesRouter)
Routes.use('/groups', groupsRouter)
Routes.use('/applications', applicationsRouter)
Routes.use('/patients', patientsRouter)

export { Routes }
