import express from 'express'
import cors from 'cors'

import '@shared/infra/typeorm'

import { Routes } from './routes'

const app = express()

app.use(cors())

app.use(express.json())

app.use(Routes)

app.listen(3333, () => console.log('🚀 server started on port 3333!'))