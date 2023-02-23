import React, { useState, useEffect } from "react";
import axios from "axios";

import CardR from "../CardUnit/CardR";

const endpoint = 'http://localhost:8000/api'

function Dashboard() {
  const [dreams, setDreams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllDreams();
  }, []);

  const getAllDreams = async () => {
    const response = await axios.get(`${endpoint}/remembers`);
    console.log(response.data);
    setDreams(response.data);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDreams = dreams.filter(
    (remember) =>
      remember.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      remember.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by title or description"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div>
        {filteredDreams.map((remember) => {
          return <CardR key={remember.id} remember={remember} />;
        })}
      </div>
    </>
  );
}

export default Dashboard;
