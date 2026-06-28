import type { Request, Response } from "express";
import ShortenUrl from "../model/url.model.js";

const shortenUrlController = async (req: Request, res: Response) => {
  const { url } = req.body;
  try {
    if (!url)
      return res
        .status(400)
        .json({ success: false, message: "Please enter an url" });
  } catch (error) {
    console.log(error);
  }
};

export default shortenUrlController;
