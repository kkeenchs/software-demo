import express from "express";
import { supabase } from "../supabaseClient.js";
const router = express.Router();

router.get("/:userID", async (req, res) => {
  const { userID } = req.params;

  const { data, error } = await supabase
    .from("user_trips")
    .select("*")
	.eq("current_user_id", userID)

  if (error) return res.status(500).json({ error: error.message });

  // map to desired output format
  const result = data.map(trip => ({
    trip_id: trip.trip_id,
    title: trip.title,
    joined_people: Number(trip.joined_people),
    start_date: trip.start_date,
    end_date: trip.end_date,
    poster_image_link: trip.poster_image_link
  }));

  res.json(result);
});

export default router;