import { pool } from "../config/database.js";

const locationMap = {
  "chasecenter" : "Chase Center",
  "levistadium": "Levi Stadium",
  "sapcenter": "SAP Center",
  "staplescenter": "Staples Center"
}

const getLocations = async (req, res) => {
  try {
    console.log("hello?")

    const results = await pool.query("SELECT * FROM locations order by id asc");
    console.log(results.rows);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getLocation = async (req, res) => {
  try {
    console.log("hello?")

    const selectQuery = "SELECT * FROM locations WHERE id=$1";
    const locationName = req.params.id;
    const results = await pool.query(selectQuery, [locationName]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default {
  getLocation,
  getLocations,
};
