import React, { useState, useEffect } from "react";
import "../css/Event.css";

const Event = (props) => {
  const [remaining, setRemaining] = useState([]);

  useEffect(() => {
    const configureRemaining = () => {
      const today = new Date();
      const eventDate = new Date(props.date);
      const diffInMs = eventDate - today;
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      setRemaining(diffInDays);
    };
    configureRemaining();
  }, []);

    const determine = (id) => {
      if (id === 1) {
        return "Tyler1Con";
      } else if (id === 2) {
        return "TarzanedCon"
      } else if (id === 3) {
        return "PokimaneCon"
      } else if (id === 4) {
        return "xQcCon"
      }
    }
  return (
    <article className="event-information">
      <img src={props.image} />

      <div className="event-information-overlay">
        <div className="text">
          <h3>{props.name}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {props.date}{" "}
            <br /> {props.name}
          </p>
          <p>{determine(props.id)}</p>
          <p id={`remaining-${props.id}`}>{props.location}</p>
        </div>
      </div>
    </article>
  );
};

export default Event;
