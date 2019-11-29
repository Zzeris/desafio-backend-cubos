"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Format {
    Hours(startTime, endTime) {
        const start = (/^\d\d\:\d\d$/.test(startTime));
        const end = (/^\d\d\:\d\d$/.test(endTime));
        if (!start)
            return 'Horário início invalido *00:00.';
        if (!end)
            return 'Horário final invalido *00:00.';
        if (startTime > endTime)
            return 'Horário início não pode ser maior que horário final.';
        if (startTime === endTime)
            return 'Horário início não pode ser igual horário final.';
    }
}
exports.default = new Format();
//# sourceMappingURL=formatHours.js.map