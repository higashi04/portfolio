import React from "react";
import "./About.css";
import Mongo from "../../assets/logo-mongodb-png-mongodb-logo-png-400.png";
import ReactLogo from "../../assets/react.png";
import Express from "../../assets/express-js.png"
import Node from "../../assets/node.png"
import Swift from "../../assets/swift.png"
import Csharp from "../../assets/csharp.png"

import TechStack from "../../components/TechStack/TechStack";

const stack = [
  {
    id: 1,
    logo: ReactLogo,
    name: "React",
  },
  {
    id: 2,
    logo: Mongo,
    name: "MongoDB",
  },
  {
    id: 3,
    logo: Express,
    name: "Express"
  },
  {
    id: 4,
    logo: Node,
    name: "NodeJS"
  }
];

const secondaryStack = [
  {
    id: 1,
    logo: Swift,
    name: "Swift for iOS",
  },
  {
    id: 2,
    logo: Csharp,
    name: "C#",
  },

]

const About = () => {
  return (
    <>
      <main className="about-container container">
        <p className="mt-5 about-p">
          My fullname is Luis César Higashi Salinas, but I usually go by César.
          I'm a self taught web developer.
        </p>
        <div className="container">
          <div className="row">
            <h2 className="my-3">Main Stack</h2>
          </div>
          {stack.map((item) => (
            <TechStack key={item.id} logo={item.logo} name={item.name} />
          ))}
        </div>
      </main>
      <section>
        <div className="container mt-5">
          <h3>More Things I want to learn</h3>
        </div>
        {secondaryStack.map(item =>  <TechStack key={item.id} logo={item.logo} name={item.name} />)}
      </section>
    </>
  );
};
export default About;
