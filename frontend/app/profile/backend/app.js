import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
import { config } from 'dotenv';
import passport from 'passport';
import cookieSession from 'cookie-session';
import cors from 'cors';

config();

const app = express();

app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog",blogRouter)
app.use(cookieSession({
    name:"session",
    keys:["cyberwolve"],
    maxAge:24*60*60*1000,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:"http://localhost:5000",
    methods: "GET,POST,PUT,DELETE",
    credentials:true,
}));

const port = process.env.PORT||8080;
app.listen(port, () => console.log(`Listening on port ${port}`))

mongoose.connect(process.env.MONGODB_URI)
.then(()=>app.listen(5000))
.then(()=>console.log("Connected to database and listening to localhost 5000"))
.catch((err)=>{
    console.log("Could not connect to Database")
});

