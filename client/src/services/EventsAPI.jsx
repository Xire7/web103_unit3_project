const baseUrl = "http://localhost:3000";
const locationMap = {
  0: "Los Angeles Convention Center",
  1: "New York Expo Center",
  2: "Staples Center",
  3: "Chicago Lakeside Center",
};

const getAllEvents = async () => {
  try {
    const response = await fetch(`${baseUrl}/events`);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getEventsById = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/events/current/${id}`);
    const data = await response.json();
    return data[0];
  } catch (err) {
    console.log(err);
  }
};

const getEventsByLocation = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/events/`);
    let data = await response.json();
    console.log(id);
    const newData = data.filter((event) => {
      console.log(event.id, id+1);
      return event.id === id+1;
    });
    console.log(data);
    return newData;
  } catch (err) {
    console.log(err);
  }
};

export default {
  getAllEvents,
  getEventsByLocation,
  getEventsById,
};
