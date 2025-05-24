import express from "express";
import cors from "cors";
import NoteRoute from "./routes/NoteRoute.js";
import UserRoute from "./routes/UserRoute.js";
import "./models/UserModel.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();


app.use(cors({credentials: true, origin: 'http://127.0.0.1:5500'}));
app.use(cookieParser());
app.use(express.json());
app.use(NoteRoute);
app.use(UserRoute);

app.listen(5000, () => console.log("Server connected"));
