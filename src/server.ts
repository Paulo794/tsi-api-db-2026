import  express from "express";
import "./db";
import generoRouter from "./routes/generos";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/generos", generoRouter);

app.listen(port,() =>{
    console.log('Servidor executado em localhost:${Port}')
});