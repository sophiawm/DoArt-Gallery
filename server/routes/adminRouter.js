import express from "express";
import {createAdmin} from "../controllers/AdminController.js";
import {getAllAdmins} from "../controllers/AdminController.js";
import { getAdmin } from "../controllers/AdminController.js";
import {updateAdmin} from "../controllers/AdminController.js";
import {deleteAdmin}  from "../controllers/AdminController.js";

const adminRouter = express.Router();


adminRouter.post("/", createAdmin);
adminRouter.get("/", getAllAdmins);
adminRouter.get("/:id", getAdmin);
adminRouter.put("/:id", updateAdmin);
adminRouter.delete("/:id", deleteAdmin);

export default adminRouter