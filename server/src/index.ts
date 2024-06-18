// username: f20220434
// password: wEDab1jCw5OuYzBz

import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import financialRecordModel from "./schema/financial-record";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://f20220434:wEDab1jCw5OuYzBz@fintrackwebapp.opcvomr.mongodb.net/";

mongoose.connect(mongoURI).then(() => console.log("MONGODB CONNECTION ESTABLISHED!!")).catch((err) => console.error("MONGODB CONNECTION FAILED: ", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server runningon port ${port}`);
});