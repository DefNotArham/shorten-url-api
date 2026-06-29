import mongoose from "mongoose";
const shortenUrlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortCode: { type: String, required: true, unique: true },
    clicks: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
const ShortenUrl = mongoose.model("ShortenUrl", shortenUrlSchema);
export default ShortenUrl;
