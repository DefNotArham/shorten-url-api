import express from "express";

import shortenUrlController from "../controllers/shorten-url.controller.js";

const router = express.Router();

router.post("/shorten-url", shortenUrlController);

export default router;
