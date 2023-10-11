import express from "express";
import {createOrder} from "../controllers/OrderController.js";
import {getAllOrders} from "../controllers/OrderController.js";
import { getOrder } from "../controllers/OrderController.js";
import {updateOrder} from "../controllers/OrderController.js";
import {deleteOrder}  from "../controllers/OrderController.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getAllOrders);
orderRouter.get("/:id", getOrder);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter