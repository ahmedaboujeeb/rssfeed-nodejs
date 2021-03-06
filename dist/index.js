"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rssfeedRouter_1 = __importDefault(require("./api/routes/rssfeedRouter"));
const app = (0, express_1.default)();
app.use("/api", rssfeedRouter_1.default);
const port = 5000;
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map