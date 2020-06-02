import express from "express";
import path from "path";
import env from "dotenv";
import routes from "./front/routes";

const app = express();

env.config();

const viewDir = path.resolve(__dirname, "./../public");

app.use(express.static(viewDir));

app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
