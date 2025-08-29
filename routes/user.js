import express from "express";
import { pool } from "../db.js"; // import the centralized pool
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const query = `
        SELECT *
        FROM users
        `;
        const { rows } = await pool.query(query);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

export default router;