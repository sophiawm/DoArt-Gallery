import express from "express";
import { createProduct} from "../controllers/ProductController.js"
import {getAllProducts} from "../controllers/ProductController.js";
import { getProduct } from "../controllers/ProductController.js";
import {updateProduct} from "../controllers/ProductController.js";
import {deleteProduct}  from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter 