import express, {response} from 'express';
import pool from '../db.js';

const router = express.Router();

// GET all perfumes
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM perfume'); // your table
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/perfumes/niche', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM perfume WHERE type = 'niche'");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});


export default router;
