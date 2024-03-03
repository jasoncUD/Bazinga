import React from "react";
import "./loading.css";

export {};

export const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading">Loading...</div>
    </div>
  );
};
