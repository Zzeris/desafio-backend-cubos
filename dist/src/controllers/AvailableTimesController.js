"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = __importDefault(require("../config/state"));
const formatHours_1 = __importDefault(require("../config/formatHours"));
class DailyRuleController {
    index(req, res) {
        const { date1, date2 } = req.params;
        const dateOne = date1.split('-').reverse();
        const dateTwo = date2.split('-').reverse();
        const start = new Date(`${dateOne[0]}-${dateOne[1]}-${dateOne[2]}`);
        const end = new Date(`${dateTwo[0]}-${dateTwo[1]}-${dateTwo[2]}`);
        const content = state_1.default.load();
        let result = content.diaEspecifico.filter((element) => {
            let date = new Date(element.dia.split('-').reverse());
            return date >= start && date <= end;
        });
        if (result.length === 0)
            result = 'Não hà atendimento neste intervalo de datas informadas, tente outro.';
        return res.json(result);
    }
    show(req, res) {
        const { date1 } = req.params;
        const content = state_1.default.load();
        let result = content.diaEspecifico.filter((element) => element.dia === date1);
        if (result.length === 0)
            result = 'Não hà atendimento nesta data, tente outra.';
        return res.json(result);
    }
    store(req, res) {
        const { dia, intervalos } = req.body;
        let intervalAux = '';
        for (let i = 0; i < intervalos.length; i++) {
            const resultFormat = formatHours_1.default.Hours(intervalos[i].horaInicio, intervalos[i].horaFim);
            if (resultFormat)
                return res.send(`${resultFormat} No intervalo ${i + 1}.`);
            if (intervalAux !== '') {
                if (intervalAux === intervalos[i].horaInicio)
                    return res.send(`Hora início no intervalo ${i + 1} não pode ser igual a hora final no intervalo ${i}`);
                if (intervalAux > intervalos[i].horaInicio)
                    return res.send(`Hora início no intervalo ${i + 1} não pode ser menor que a hora final no intervalo ${i}`);
                intervalAux = '';
            }
            if (intervalAux === '')
                intervalAux = intervalos[i].horaFim;
        }
        const content = state_1.default.load();
        const resultItem = content.diaEspecifico.filter((element) => element.dia === dia);
        if (resultItem.length > 0)
            return res.send(`Dia ${dia} já cadastrado.`);
        content.diaEspecifico.push(req.body);
        state_1.default.save(content);
        return res.send(`Dia ${dia} cadastrado com sucesso.`);
    }
    delete(req, res) {
        const { date } = req.params;
        const content = state_1.default.load();
        const result = content.diaEspecifico.filter((element) => element.dia === date);
        if (result.length === 0)
            return res.send('Dia inválido.');
        content.diaEspecifico.splice(content.diaEspecifico.indexOf(result[0]), 1);
        state_1.default.save(content);
        return res.send(`Dia ${date} excluido com sucesso.`);
    }
}
exports.default = new DailyRuleController();
//# sourceMappingURL=AvailableTimesController.js.map