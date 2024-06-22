import express, { Express, Request, Response } from 'express';
import cors from "cors";
import "dotenv/config";
import createRouter from "./routes/index";

const app: Express = express();
const port: number = 3001;
const router = createRouter();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true
}));


app.use("/api", router);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});