import express from "express";
import { getAllArtists} from "../controllers/artistController.js"; 
import {createArtist } from "../controllers/artistController.js";
import { updateArtist } from "../controllers/artistController.js"; 
import{deleteArtist} from "../controllers/artistController.js";

const artistRouter = express.Router();

artistRouter.get("/", getAllArtists);
artistRouter.post("/", createArtist);
artistRouter.put("/:id", updateArtist);
artistRouter.delete("/:id", deleteArtist);

export default artistRouter