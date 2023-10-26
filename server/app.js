import express from "express"
import cors from 'cors'
import fs from 'node:fs'
import db from "./database/db.js"
import bcrypt from 'bcrypt'
//import verifyToken from './jwtMiddleware'
import artistRouter from "./routes/artistRouter.js"
import productRouter from "./routes/productRouter.js"
import adminRouter from "./routes/adminRouter.js"
import customerRouter from "./routes/customerRouter.js"
import orderRouter from "./routes/orderRouter.js"
import dotenv from 'dotenv'
dotenv.config();
const secretKey = process.env.SECRET_KEY;

export const app = express()
app.get('/', (_req, res) =>{
    res.send('Hello Seller of Wild and Wonderful Art')
})


//app.use(fs())
app.use(cors())
app.use(express.json())
app.use('/artists', artistRouter)
app.use('/products', productRouter)
app.use('/admins' , adminRouter)
app.use('/customers', customerRouter)
app.use('/orders', orderRouter)


try{
	await db.authenticate()
		console.log('conected to database')
	}catch (error){
		console.log(`error:' ${error}`)
	}


export const server = app.listen(8080,() =>{
console.log('Listening on port:', server.address().port)
} )