import { Router } from 'express'

import RulesController from './controllers/RulesController'
import DailyRuleController from './controllers/DailyRuleController'
import AvailableTimesController from './controllers/AvailableTimesController'

const router: Router = Router()

router.get('/regras', RulesController.index)

router.post('/regra/diariamente', DailyRuleController.store)
router.delete('/regra/diariamente', DailyRuleController.delete)

router.post('/regra/horarios-disponiveis', AvailableTimesController.store)
router.delete('/regra/horarios-disponiveis/:date', AvailableTimesController.delete)

router.get('/horarios-disponiveis/:date1&:date2', AvailableTimesController.index)
router.get('/horarios-disponiveis/:date1', AvailableTimesController.show)

export default router