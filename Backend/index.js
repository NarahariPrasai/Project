import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./router/app.route.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use("/api", router);

const port = 5000;
app.listen(port, ()=>
    console.log(`server: http://localhost:${port}`)
);

