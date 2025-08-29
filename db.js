// db.js
import pkg from "pg";
import "dotenv/config";

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // required for Supabase hosted Postgres
  },
});

// Optional: test connection immediately
pool.connect()
  .then(client => {
    console.log("Connected to database");
    client.release();
  })
  .catch(err => console.error("Database connection error", err.stack));
