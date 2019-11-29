"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RulesController_1 = __importDefault(require("./controllers/RulesController"));
const DailyRuleController_1 = __importDefault(require("./controllers/DailyRuleController"));
const AvailableTimesController_1 = __importDefault(require("./controllers/AvailableTimesController"));
const router = express_1.Router();
router.get('/regras', RulesController_1.default.index);
router.post('/regra/diariamente', DailyRuleController_1.default.store);
router.delete('/regra/diariamente', DailyRuleController_1.default.delete);
router.post('/regra/horarios-disponiveis', AvailableTimesController_1.default.store);
router.delete('/regra/horarios-disponiveis/:date', AvailableTimesController_1.default.delete);
router.get('/horarios-disponiveis/:date1&:date2', AvailableTimesController_1.default.index);
router.get('/horarios-disponiveis/:date1', AvailableTimesController_1.default.show);
exports.default = router;
//# sourceMappingURL=routes.js.map