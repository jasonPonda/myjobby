import React from "react";
import head from "../../../assets/img-1.jpg";

import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <img src={head} alt="" />

      <div className="contentBx">
        <h1>Home</h1>
      </div>
    </section>
  );
};

export default Home;
