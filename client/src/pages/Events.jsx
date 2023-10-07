import { useEffect, useState } from "react";
import "../css/Event.css";
import EventsAPI from "../services/EventsAPI";
import Event from "../components/Event";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [location, setLocation] = useState("all");

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await EventsAPI.getAllEvents();
      setEvents(response);
    };
    fetchEvents();
  }, []);

  function handleChange(event) {
    setLocation(event.target.value);
  }

  console.log(events);

  return (
    <div className="location-events">
      <div className="event-selector">
        <select onChange={(event) => handleChange(event)}>
          <option value="all">Check streamers out at...</option>
          <option value="laconventioncenter">LA Convention Center</option>
          <option value="newyorkexpocenter">New York Expo Center</option>
          <option value="staplescenter">Staples Center</option>
          <option value="chicagolakesidecenter">Chicago Lakeside Center</option>
        </select>
      </div>
      <main>
        {events
          .filter((event) => {
            if (location == "all") {
              return event;
            }
            if (event.location == location) {
              return event;
            }
          })
          .map((event) => (
            <Event
              key={event.id}
              name={event.name}
              id={event.id}
              location={event.location}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))}
      </main>
    </div>
  );
}
