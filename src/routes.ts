import { Router } from 'express'

import RulesController from './controllers/RulesController'
import DailyRuleController from './controllers/DailyRuleController'

const router: Router = Router()

router.get('/regras', RulesController.index)

router.post('/regra/diariamente', DailyRuleController.store)
router.delete('/regra/diariamente', DailyRuleController.delete)

export default router