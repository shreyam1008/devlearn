import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Common/Card";
import "./Later.css";

const Later = () => {
  const peoples = [{ name: "shryam", location: "babarmahal" }];

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
    console.log("from submitted with values", name, location);
  };

  return (
    <div className="container">
      <form onSubmit={handleForm}>
        <label htmlFor="name">Enter Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="location">Enter Location:</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />

        <button type="submit">Submit this</button>
      </form>
      {peoples.map((people) => (
        <Card key={people.name} name={people.name} address={people.location} />
      ))}
      <Link to="/test">
        <div>Link</div>
      </Link>
    </div>
  );
};

export default Later;
