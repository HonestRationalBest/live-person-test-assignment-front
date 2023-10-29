import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { HouseInterface } from "../types/House";
import { BACKEND_HOST } from "../constants/host";
import { Form } from "../components/Form";

export const HouseDetail = () => {
  const [house, setHouse] = useState<HouseInterface | null>(null);
  const [formData, setFormData] = useState<Partial<HouseInterface>>({
    houseName: "",
    numberOfRooms: 0,
    builtDate: new Date(),
    latitude: 0,
    longitude: 0,
  });

  const { id } = useParams<{ id: string }>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "date" ? new Date(e.target.value) : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${BACKEND_HOST}/houses/${id}`,
        formData
      );
      setHouse(response.data);
      alert("House successfully updated!");
    } catch (error) {
      alert("There are some errors in provided data!");
    }
  };

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await axios.get(`${BACKEND_HOST}/houses/find/${id}`);
        setHouse(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching house:", error);
      }
    }

    fetchHouse();
  }, [id]);

  if (!house) return <div>Loading...</div>;

  return (
    <div>
      <h1>House Detail</h1>
      <p>
        <strong>Name:</strong> {house.houseName}
      </p>
      <p>
        <strong>Number of Rooms:</strong> {house.numberOfRooms}
      </p>
      <p>
        <strong>Built Date:</strong>
        {new Date(house.builtDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Latitude:</strong> {house.latitude}
      </p>
      <p>
        <strong>Longitude:</strong> {house.longitude}
      </p>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        buttonText="Update House"
      />
    </div>
  );
};
