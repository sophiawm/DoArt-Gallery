import express from "express";
import { getAllArtists} from "../controllers/ArtistController.js"; 
import { getArtist } from "../controllers/ArtistController.js";
import {createArtist } from "../controllers/ArtistController.js";
import { updateArtist } from "../controllers/ArtistController.js"; 
import{ deleteArtist } from "../controllers/ArtistController.js";
import { getArtistProducts } from "../controllers/ArtistController.js";

const artistRouter = express.Router();

artistRouter.get("/", getAllArtists);
artistRouter.post("/", createArtist);
artistRouter.get("/:id", getArtist);
artistRouter.put("/:id", updateArtist);
artistRouter.delete("/:id", deleteArtist);
artistRouter.get("/:id/products", getArtistProducts);


export default artistRouter

