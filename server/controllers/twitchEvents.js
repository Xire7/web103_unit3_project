import { pool } from "../config/database.js";

const gettwitchEvents = async (req, res) => {
  try {
    console.log("hello?")

    const results = await pool.query(
      "SELECT * FROM twitchevents ORDER BY id ASC"
    );
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const gettwitchEventByLocation = async (req, res) => {
  try {
    console.log("hello?")
    const selectQuery = "SELECT * FROM twitchevents WHERE location=$1";
    console.log(req.params);
    const locationId = req.params.id;
    const results = await pool.query(selectQuery, [locationId]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const gettwitchEventById = async (req, res) => {
  console.log("POOOOP");
  try {
    console.log("hello?")
    const selectQuery = "SELECT * FROM twitchevents WHERE id=$1";
    const id = req.params.id;
    const results = await pool.query(selectQuery, [id]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  gettwitchEvents,
  gettwitchEventByLocation,
  gettwitchEventById
};
