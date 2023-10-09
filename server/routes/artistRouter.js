import express from "express";
import { getAllArtists} from "../controllers/ArtistController.js"; 
import {createArtist } from "../controllers/ArtistController.js";
import { updateArtist } from "../controllers/ArtistController.js"; 
import{deleteArtist} from "../controllers/ArtistController.js";

const artistRouter = express.Router();

artistRouter.get("/", getAllArtists);
artistRouter.post("/", createArtist);
artistRouter.put("/:id", updateArtist);
artistRouter.delete("/:id", deleteArtist);

export default artistRouter