import { pool } from "./database.js";
import eventData from "../data/data.js";
import locationData from "../data/locdata.js";

const createtwitchEventsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS twitchevents;
  
      CREATE TABLE IF NOT EXISTS twitchevents (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          date TEXT NOT NULL,
          time TEXT NOT NULL,
          location TEXT NOT NULL,
          image TEXT NOT NULL
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("twitchevents table has been created successfully");
  } catch (err) {
    console.error("⚠️ error creating twitchsevents table", err);
  }
};

const createLocationsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS locations;
  
      CREATE TABLE IF NOT EXISTS locations (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          address TEXT,
          image TEXT NOT NULL
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("locations table created successfully");
  } catch (err) {
    console.error("error creating locations table", err);
  }
};

const seedEventTable = async () => {
  await createtwitchEventsTable();
  eventData.forEach((element)=>{
      const insertQuery = {
          text: "INSERT INTO twitchevents (id, name, date, time, location, image) VALUES ($1, $2, $3, $4, $5, $6)",
      };
      const values = [
          element.id,
          element.name,
          element.date,
          element.time,
          element.location,
          element.image
      ];
      pool.query(insertQuery, values, (err, res) => {
          if (err) {
              console.log(err.stack) 
          } else {
              console.log(`${element.name} added successfully`)
          }
      });
  })
}

const seedLocationTable = async () => {
  await createLocationsTable();
  locationData.forEach((element)=>{
      const insertQuery = {
          text: "INSERT INTO locations (id, name, address, image) VALUES ($1, $2, $3, $4)",
      };
      const values = [
          element.id,
          element.name,
          element.address,
          element.image
      ];
      pool.query(insertQuery, values, (err, res) => {
          if (err) {
              console.log(err.stack) 
          } else {
              console.log(`${element.name} added successfully`)
          }
      });
  })
}
console.log("poop");
seedEventTable();
seedLocationTable();