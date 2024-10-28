"use client";

import { useState } from "react";
import axios from "axios";

const ScraperForm = ({ onSubmit }) => {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("In Progress");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/scrape`,
        {
          url,
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to scrape data");
      }

      setStatus("Completed");
      onSubmit(response.data.data);
    } catch (error) {
      setStatus("Failed");
    }
  };

  const getStatusStyle = () => {
    switch (status) {
      case "In Progress":
        return { backgroundColor: "orange", color: "#fff" };
      case "Completed":
        return { backgroundColor: "green", color: "#fff" };
      case "Failed":
        return { backgroundColor: "red", color: "#fff" };
      default:
        return { backgroundColor: "#f0f0f0", color: "#333" };
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter MagicBricks Listing URL"
        required
        style={{
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          width: "300px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          borderRadius: "4px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Scrape
      </button>
      <p
        style={{
          padding: "8px 16px",
          borderRadius: "4px",
          textAlign: "center",
          ...getStatusStyle(),
        }}
      >
        Status: {status || "Not Started"}
      </p>
    </form>
  );
};

export default ScraperForm;
