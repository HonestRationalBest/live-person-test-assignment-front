import React from "react";

import { HouseInterface } from "../types/House";

interface FromProps {
  handleSubmit: (e: React.FormEvent) => void;
  formData: Partial<HouseInterface>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buttonText: string;
}

export const Form: React.FC<FromProps> = ({
  handleSubmit,
  formData,
  handleChange,
  buttonText,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "40px",
        gap: "15px",
        width: "500px",
      }}
    >
      <label>
        House Name:
        <input
          name="houseName"
          value={formData.houseName}
          onChange={handleChange}
          placeholder="House Name"
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </label>
      <label>
        Number of Rooms:
        <input
          type="number"
          name="numberOfRooms"
          value={formData.numberOfRooms}
          onChange={handleChange}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </label>
      <label>
        Built Date:
        <input
          type="date"
          name="builtDate"
          value={
            formData.builtDate
              ? new Date(formData.builtDate).toISOString().split("T")[0]
              : ""
          }
          onChange={handleChange}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </label>
      <label>
        Latitude:
        <input
          type="number"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </label>
      <label>
        Longitude:
        <input
          type="number"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </label>
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          alignSelf: "center",
        }}
      >
        {buttonText}
      </button>
    </form>
  );
};
