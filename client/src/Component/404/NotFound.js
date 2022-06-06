import React from "react";
import "./404.css";

const NotFound = () => {
  return (
    <div className="container not-found-div">
      <div>
        <img
          src="https://media0.giphy.com/media/yIgR9t9b53uZG/giphy.gif"
          alt="Page not found"
        />
      </div>
      <div>
        <h1>Oops !</h1>
        <h2>I think you are lost</h2>
      </div>
    </div>
  );
};

export default NotFound;
