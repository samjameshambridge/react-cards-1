"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./front/routes"));
const app = express_1.default();
dotenv_1.default.config();
const viewDir = path_1.default.resolve(__dirname, "./../public");
app.use(express_1.default.static(viewDir));
app.use("/", routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
