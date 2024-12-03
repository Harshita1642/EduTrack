import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config({ path: './.env' })

const app = express();
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }))//for data coming from express files
app.use(express.urlencoded({ extended: true, limit: "16kb" }));//for data coming from Url
app.use(express.static("public")) //to store some assets publically
app.use(cookieParser());//used to access cookies of the browser

export { app };