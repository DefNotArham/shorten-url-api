import type { Request, Response } from "express";

import ShortenUrl from "../model/url.model.js";
import isValidUrl from "../utils/isValidUrl.js";

const shortenUrlController = async (req: Request, res: Response) => {
  const { url } = req.body;
  try {
    if (!url || typeof url !== "string")
      return res
        .status(400)
        .json({ success: false, message: "Please enter an url" });

    if (!isValidUrl(url))
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid url" });

    const shortenUrl = await ShortenUrl.create({
      originalUrl: url,
    });
  } catch (error) {
    console.log(error);
  }
};

export default shortenUrlController;
