import React from "react";
import "./Home.css";
import Logo from "../../assets/ch.png";
const Home = () => {
  return (
    <>
      <main className="mainPadding">
        <h1>Front-end, Back-end</h1>
        <div className="logoCenter">
          <img className="logoImg" src={Logo} alt="logo" />
        </div>
      </main>
    </>
  );
};

export default Home;
