"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __importDefault(require("../config/state"));
const formatHours_1 = __importDefault(require("../config/formatHours"));
class DailyRuleController {
    store(req, res) {
        const { horaInicio, horaFim } = req.body;
        const result = formatHours_1.default.Hours(horaInicio, horaFim);
        if (result)
            return res.send(result);
        const content = state_1.default.load();
        content.diariamente = req.body;
        state_1.default.save(content);
        return res.send('Horário diário cadastrado com sucesso.');
    }
    delete(req, res) {
        const content = state_1.default.load();
        content.diariamente = {};
        state_1.default.save(content);
        return res.send('Horário diário excluido com sucesso.');
    }
}
exports.default = new DailyRuleController();
//# sourceMappingURL=DailyRuleController.js.map