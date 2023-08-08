import express from "express";
import fs from "fs";
import csvParser from "csv-parser";
const router = express.Router();
router.get("/data", (req, res) => {
    const data = {
        id: [],
        keywords: [],
        dates: [],
        country: [],
        vl_value: [],
        gt_category: [],
    };
    fs.createReadStream("downloaded_sample_file.csv")
        .pipe(csvParser())
        .on("data", (row) => {
        data.id.push(row.id);
        data.keywords.push(row.keyword);
        data.dates.push(row.date);
        data.country.push(row.country);
        data.vl_value.push(row.vl_value);
        data.gt_category.push(row.gt_category);
    })
        .on("end", () => {
        res.json({
            totalItems: data.id.length,
            data,
        });
    })
        .on("error", (err) => {
        // Handle any errors during CSV parsing or reading
        console.error("Error reading CSV:", err);
        res.status(500).json({ error: "Failed to read CSV data" });
    });
});
export default router;
//# sourceMappingURL=viewDigitalData.js.map