import express, {response} from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM perfume');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/niche', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM perfume WHERE type = 'niche'");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.get('/designer', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM perfume WHERE type = 'designer'");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

router.get('/arabian', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM perfume WHERE type = 'arabian'");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});
export default router;
