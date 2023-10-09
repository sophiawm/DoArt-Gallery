import express from "express";
import cors from 'cors'
import db from "./server/database/db.js"
import artistRouter from "./server/routes/artistRouter.js";
import productRouter from "./server/routes/productRouter.js";
import adminRouter from "./server/routes/adminRouter.js";
import customerRouter from "./server/routes/customerRouter.js"
import orderRouter from "./server/routes/orderRouter.js"

export const app = express()
app.get('/', (_req, res) =>{
    res.send('Hello Seller of Wild and Wonderful Art')
})

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

//👀 importante este paso para poder parar el servidor dentro de los test
export const server = app.listen(0,() =>{
console.log('Listening on port:', server.address().port)
} )