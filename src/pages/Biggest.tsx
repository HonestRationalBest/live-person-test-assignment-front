import axios from "axios";
import { useState, useEffect } from "react";

import { HouseInterface } from "../types/House";
import { BACKEND_HOST } from "../constants/host";

export const Biggest = () => {
  const [houses, setHouses] = useState<HouseInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${BACKEND_HOST}/houses/top5`);
        setHouses(response.data);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Top 5 Houses by Number of Rooms</h2>
      <ul>
        {houses.map((house) => (
          <li key={house.id}>
            <strong>{house.houseName}</strong> - {house.numberOfRooms} rooms
          </li>
        ))}
      </ul>
    </div>
  );
};
