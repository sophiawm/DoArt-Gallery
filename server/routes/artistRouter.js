import express from "express";
import { getAllArtists , createArtist , updateArtist , deleteArtist } from "../controllers/artistController.js";

const artistRouter = express.Router();

artistRouter.get("/", getAllArtists);
artistRouter.post("/", createArtist);
artistRouter.put("/:id", updateArtist);
artistRouter.delete("/:id", deleteArtist);

export default artistRouter