import ShortenUrl from "../model/url.model.js";
const redirectShortenUrlController = async (req, res) => {
    const { shortCode } = req.params;
    try {
        const url = await ShortenUrl.findOne({ shortCode });
        if (!url)
            return res.status(404).json({
                success: false,
                message: "URL not found",
            });
        url.clicks += 1;
        await url.save();
        return res.redirect(url.originalUrl);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
export default redirectShortenUrlController;
