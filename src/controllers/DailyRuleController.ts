import { Request, Response } from 'express'

import state from '../config/state'
import format from '../config/formatHours'

class DailyRuleController {
    public store (req: Request, res: Response) {
        const { horaInicio, horaFim } = req.body

        const result = format.Hours(horaInicio, horaFim)

        if (result) return res.send(result)

        const content = state.load()

        content.diariamente = req.body

        state.save(content)

        return res.send('Horário diário cadastrado com sucesso.')
    }

    public delete (req: Request, res: Response) {
        const content = state.load()

        content.diariamente = {}

        state.save(content)

        return res.send('Horário diário excluido com sucesso.')
    }
}

export default new DailyRuleController()