"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class State {
    save(content) {
        const dataString = JSON.stringify(content);
        fs_1.default.writeFileSync(path_1.default.resolve(__dirname, '..', '..', 'data.json'), dataString);
    }
    load() {
        const fileBuffer = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '..', '..', 'data.json'), 'utf-8');
        const dataJson = JSON.parse(fileBuffer);
        return dataJson;
    }
}
exports.default = new State();
//# sourceMappingURL=state.js.map