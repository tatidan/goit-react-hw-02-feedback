import React from "react";
import "../main/Main.css";

const Notification = ({ message }) => {
  return (
    <div>
      <p className="statsList">{message}</p>
    </div>
  );
};

export default Notification;
