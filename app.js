import express from "express";
import { conn } from "./connection.js";
import { userRouter } from "./rotas/user.rotas.js";

const app = express();

await conn.connect();
app.use(express.json());
app.use("/user", userRouter);
app.listen(3030, console.log("server on"));
