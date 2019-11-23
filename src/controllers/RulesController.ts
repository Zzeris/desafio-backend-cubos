import { Request, Response } from 'express'

import data from '../../data.json'

class RulesController {
    public index (req: Request, res: Response) {
        return res.json(data)
    }
}

export default new RulesController