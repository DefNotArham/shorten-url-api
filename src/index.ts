import express from "express";
import dotenv from "dotenv";

import connectDb from "./db/connectDb.js";
import urlRoutes from "./routes/url.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/url", urlRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDb();
});
