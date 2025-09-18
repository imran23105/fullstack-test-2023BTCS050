import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors';
import formRoutes from './App/Routes/form.js'
dotenv.config();

 const app=express();
        app.use(express.json())
        app.use(cors());
        app.use('/api/form',formRoutes)
        mongoose.connect(process.env.Mongoose_URL)
        .then(()=>{
            console.log("db connect")
            app.listen(process.env.PORT,()=>{
            console.log(`server is running in the port:${process.env.PORT}`)
            })
        app.get('/',(req,res)=>{
            res.send("hello")
        })
        })

        .catch((err)=>{
            console.log("error",err)
})