import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      Home page
      <Link to={"/message"}>Message</Link>
    </div>
  );
};

export default HomePage;
