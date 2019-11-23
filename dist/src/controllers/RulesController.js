"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("../../data.json"));
class RulesController {
    index(req, res) {
        return res.json(data_json_1.default);
    }
}
exports.default = new RulesController;
//# sourceMappingURL=RulesController.js.map