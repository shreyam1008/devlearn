import React, { useState } from "react";
import Card from "../Common/Card";
// import Input from "./Input";
import "./Later.css";

const Later = () => {
  // const peoples = [
  //   {name: "shreyamn", location: "babarmahal"},
  // ]

  const [peoples, setPeoples] = useState([
    { name: "shreyam", location: "babarmahal" },
  ]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log("The Form has been Handled", [
      ...peoples,
      { name: name, location: location },
    ]);
    // [...peoples, {name:name, location: location}]
    setPeoples((previousValue) => [
      ...previousValue,
      { name: name, location: location },
    ]);
  };

  const handleDeleteButton = (name) => {
    console.log(":delte button", name);
    const numbers = ["1", "2", "3", "4"];
    console.log(numbers.filter((num) => num % 2 !== 0));
    const newPeopleList = peoples.filter((people) => people.name !== name);
    setPeoples(newPeopleList);
    console.log("new list", newPeopleList);
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={handleForm}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Eg. Ram Bahadur"
          />
          <br />
          <label htmlFor="location">Location: </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Eg.Kathmandu"
          />
          <button type="submit">ADD</button>
        </form>
      </div>
      {peoples.map((people) => (
        // <Card key={people.name} name={people.name} address={people.location} />

        <div
          style={{
            height: "100px",
            width: "100px",
            border: "solid 1px red",
          }}
        >
          Name: {people.name} Location: {people.location}
          <button onClick={() => handleDeleteButton(people.name)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Later;
