import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { People } from "./people/Pepole";
import data from "./data";

function App() {
  let [people, setpeople] = useState(data);
  return (
    <div className="App">
      <h1>{data.length} birthdays</h1>
      <People person={people} />
      <button
        onClick={() => setpeople([])}
        className="btn btn-outline-danger m-2"
      >
        Clear All
      </button>
      <button
        onClick={() => setpeople(data)}
        className="btn btn-outline-primary m-2"
      >
        Add All
      </button>
    </div>
  );
}

export default App;
