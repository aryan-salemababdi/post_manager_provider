import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";

const app: Express = express();
const port: number = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: false }));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});