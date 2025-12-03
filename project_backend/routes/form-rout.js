import express from "express";
import pool from "../db.js";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), "uploads", "perfumes"));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, unique + ext);
    }
});

const upload = multer({ storage });

router.post("/add", upload.single("image"), async (req, res) => {
    try {
        const {
            name,
            brand_name,
            sillage_value,
            longevity_value,
            type,
            top_notes,
            middle_notes,
            base_notes,
            description
        } = req.body;

        const image_path = req.file ? req.file.filename : null;

        const query = `
            INSERT INTO perfume
            (name, brand_name, sillage_value, longevity_value, type, top_notes, middle_notes, base_notes, description, image_path)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
                RETURNING *;
        `;

        const values = [
            name,
            brand_name,
            sillage_value,
            longevity_value,
            type,
            top_notes,
            middle_notes,
            base_notes,
            description,
            image_path,
        ];

        const result = await pool.query(query, values);

        res.json({
            message: "Perfume saved successfully",
            perfume: result.rows[0]
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save perfume" });
    }
});

export default router;
