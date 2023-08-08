// index.tsx
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import viewDigitalData from "./routes/viewDigitalData.js";
const app = express();
// Enable CORS for all routes
app.use(cors(process.env.LocalUrl));
dotenv.config();
app.get("/", (req, res) => {
    res.send("Hello, World");
});
// API endpoint to read data from CSV file and send in response
app.get("/data", viewDigitalData);
// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map