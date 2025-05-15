import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/config.js";

dotenv.config();

const port = process.env.PORT;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
});
