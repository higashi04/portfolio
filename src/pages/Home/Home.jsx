import React from "react";
import "./Home.css";
import Logo from "../../assets/ch.png";
const Home = () => {
  return (
    <>
      <main className="mainPadding">
        <div className="logoCenter">
          <img className="logoImg img-fluid" src={Logo} alt="logo" />
        </div>
      </main>
    </>
  );
};

export default Home;
