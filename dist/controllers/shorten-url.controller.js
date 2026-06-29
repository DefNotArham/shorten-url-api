import ShortenUrl from "../model/url.model.js";
import isValidUrl from "../utils/isValidUrl.js";
import { nanoid } from "nanoid";
const shortenUrlController = async (req, res) => {
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
        let shortCode = nanoid(6);
        while (await ShortenUrl.findOne({ shortCode })) {
            shortCode = nanoid(6);
        }
        await ShortenUrl.create({
            originalUrl: url,
            shortCode,
        });
        const shortUrl = `${req.protocol}://${req.get("host")}/url/${shortCode}`;
        res.status(201).json({ success: true, shortUrl });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
export default shortenUrlController;
