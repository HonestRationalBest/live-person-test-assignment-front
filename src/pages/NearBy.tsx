import { useState } from "react";
import axios from "axios";

import { HouseInterface } from "../types/House";
import { BACKEND_HOST } from "../constants/host";

export const NearBy = () => {
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [houses, setHouses] = useState<HouseInterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const fetchedHouses = await axios.get(
        `${BACKEND_HOST}/houses/nearby?latitude=${latitude}&longitude=${longitude}`
      );
      setHouses(fetchedHouses.data);
      setError(null);
    } catch (e) {
      setError((e as Error).message);
      setHouses([]);
    }
  };

  return (
    <div>
      <h2>Search Nearby Houses</h2>
      <div>
        <input
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Latitude"
        />
        <input
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Longitude"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p>{error}</p>}
      {houses.map((house) => (
        <ul>
          <li key={house.id}>
            <strong>Name:</strong> {house.houseName}
          </li>
          <li>
            <strong>Number of Rooms:</strong> {house.numberOfRooms}
          </li>
          <li><strong>Build date:</strong> {new Date(house.builtDate).toLocaleDateString()}</li>
          <li>
            <strong>Latitude:</strong> {house.latitude}
          </li>
          <li>
            <strong>Longitude:</strong> {house.longitude}
          </li>
        </ul>
      ))}
    </div>
  );
};
