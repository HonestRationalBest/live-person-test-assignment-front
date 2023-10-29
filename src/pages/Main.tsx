import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { HouseInterface } from "../types/House";
import { BACKEND_HOST } from "../constants/host";

export const Main = () => {
  const [houses, setHouses] = useState<HouseInterface[]>([]);

  useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await axios.get(`${BACKEND_HOST}/houses`);
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    }

    fetchHouses();
  }, []);

  const handleDelete = async (id?: number) => {
    try {
      await axios.delete(`${BACKEND_HOST}/houses/${id}`);
      setHouses(houses.filter((house) => house.id !== id)); 
    } catch (error) {
      console.error("Error deleting house:", error);
    }
  };

  return (
    <div>
      <h1>All Houses</h1>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <Link to={`/houses/find/${house.id}`}>{house.houseName}</Link>
            <span
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={() => handleDelete(house.id)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
