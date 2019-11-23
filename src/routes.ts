import { Router } from 'express'

import RulesController from './controllers/RulesController'

const router: Router = Router()

router.get('/regras', RulesController.index)

export default router