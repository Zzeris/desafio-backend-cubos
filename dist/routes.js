"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (_, res) => {
    res.send('ola mundo');
});
exports.default = router;
//# sourceMappingURL=routes.js.map