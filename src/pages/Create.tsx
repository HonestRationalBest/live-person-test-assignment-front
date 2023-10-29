import React, { useState } from "react";
import axios from "axios";

import { HouseInterface } from "../types/House";
import { BACKEND_HOST } from "../constants/host";
import { Form } from "../components/Form";

export const Create = () => {
  const [formData, setFormData] = useState<Partial<HouseInterface>>({
    houseName: "",
    numberOfRooms: 0,
    builtDate: new Date(),
    latitude: 0,
    longitude: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "date" ? new Date(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_HOST}/houses`, formData);

      alert("House created!");
    } catch (error) {
      alert("There are some errors in provided data!");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Create House
      </h1>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        buttonText="create"
      />
    </div>
  );
};
