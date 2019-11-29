import { Request, Response } from 'express'

import state from '../config/state'
import format from '../config/formatHours'

class WeeklyRuleController {
    public store (req: Request, res: Response) {
        const { horaInicio, horaFim } = req.body

        const result = format.Hours(horaInicio, horaFim)

        if (result) return res.send(result)

        const content = state.load()

        content.semanalmente = req.body

        state.save(content)

        return res.send('Horário semanal cadastrado com sucesso.')
    }

    public delete (req: Request, res: Response) {
        const content = state.load()

        content.semanalmente = {}

        state.save(content)

        return res.send('Horário semanal excluido com sucesso.')
    }
}

export default new WeeklyRuleController()