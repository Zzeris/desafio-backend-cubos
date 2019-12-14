"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __importDefault(require("../config/state"));
const formatHours_1 = __importDefault(require("../config/formatHours"));
class WeeklyRuleController {
    store(req, res) {
        const { horaInicio, horaFim } = req.body;
        const result = formatHours_1.default.Hours(horaInicio, horaFim);
        if (result)
            return res.send(result);
        const content = state_1.default.load();
        content.semanalmente = req.body;
        state_1.default.save(content);
        return res.send('Horário semanal cadastrado com sucesso.');
    }
    delete(req, res) {
        const content = state_1.default.load();
        content.semanalmente = {};
        state_1.default.save(content);
        return res.send('Horário semanal excluido com sucesso.');
    }
}
exports.default = new WeeklyRuleController();
//# sourceMappingURL=WeeklyRuleController.js.map