import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-page center_content">
      <div>
        <h1>
          <small>Home</small> page
        </h1>
        <p>
          This is todo list application. I have created this app using React
          hooks.
        </p>
        <small>useState, useEffect, useContext, useMemo</small>
        <p style={{ paddingTop: 15 }}>
          Go to :{" "}
          <Link className="btn btn-sm btn-info" to="/todos">
            Todo list
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
