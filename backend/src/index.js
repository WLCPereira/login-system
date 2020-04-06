import express from "express";
import cors from "cors";
import { config } from "dotenv";
import Routes from "./routes";

config();
const app = express();
app.use(express.json());

app.use(cors());
app.use(Routes);

app.listen(8080);
