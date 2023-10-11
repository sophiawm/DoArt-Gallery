import express from "express";
import { createCustomer } from "../controllers/CustomerController.js";
import {getAllCustomers} from "../controllers/CustomerController.js";
import { getCustomer } from "../controllers/CustomerController.js";
import { updateCustomer } from "../controllers/CustomerController.js";
import { deleteCustomer }  from "../controllers/CustomerController.js";

const customerRouter = express.Router();

customerRouter.post("/", createCustomer);
customerRouter.get("/", getAllCustomers);
customerRouter.get("/:id", getCustomer);
customerRouter.put("/:id", updateCustomer);
customerRouter.delete("/:id", deleteCustomer);

export default customerRouter