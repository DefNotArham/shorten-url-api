import express from "express";
import shortenUrlController from "../controllers/shorten-url.controller.js";
import redirectShortenUrlController from "../controllers/redirect-shorten-url.controller.js";
const router = express.Router();
router.post("/shorten-url", shortenUrlController);
router.get("/:shortCode", redirectShortenUrlController);
export default router;
