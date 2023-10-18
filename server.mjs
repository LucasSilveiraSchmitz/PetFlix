import express from "express";
import bodyParser from "body-parser";
import rotas from "./routes/rotaVideo.mjs";
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors())


app.use("/", rotas);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});