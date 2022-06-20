import React from "react";
import ProjectHolder from "../../components/ProjectHolder/ProjectHolder";
const projects = [
  {
    id: 1,
    title: "Transporte Villarreal",
    url: "https://transportevillarreal.herokuapp.com/",
    code: "https://github.com/higashi04/mapShowing",
    description:
      "Website made for former employer using ReactJs, before my contract ended I began incorporating Google Maps API for geolocation. Hosted on Heroku.",
    screenshots: [
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655672640/portfolio/googleMaps/Screenshot_2022-06-19_160315_mltmgm.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655672745/portfolio/googleMaps/Screenshot_2022-06-19_160524_fz9efn.png",
    ],
  },
  {
    id: 2,
    title: "2048 Clone",
    url: "https://higashi04.github.io/2048clone/",
    code: "https://github.com/higashi04/2048clone",
    description: "2048 clone I made. Note: It doesn't work on mobile.",
    screenshots: [
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655677473/portfolio/googleMaps/Screenshot_2022-06-19_172253_wspwci.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655677473/portfolio/googleMaps/Screenshot_2022-06-19_172334_sbvswp.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655677473/portfolio/googleMaps/Screenshot_2022-06-19_172418_uriytt.png",
    ],
  },
  {
    id: 3,
    title: "Rock, Paper, Scissors",
    url: "https://higashi04.github.io/Rock-paper-scissors/",
    code: "https://github.com/higashi04/Rock-paper-scissors",
    description:
      "Simple game I made using Vainilla JavaScript for a Frontend training I took.",
    screenshots: [
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655679817/portfolio/googleMaps/Screenshot_2022-06-19_180211_smte62.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655679817/portfolio/googleMaps/Screenshot_2022-06-19_180311_nlg710.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655679817/portfolio/googleMaps/Screenshot_2022-06-19_180230_aeyqbt.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655679817/portfolio/googleMaps/Screenshot_2022-06-19_180254_m5nn8m.png",
    ],
  },
  {
    id: 4,
    title: "Pokédex",
    url: "https://higashi04.github.io/dexfanmade/",
    code: "https://github.com/higashi04/dexfanmade",
    description:
      "A pokédex I made for 100 days of code. It's made in Vainilla JavaScript, and uses Axios to fetch data from an API.",
    screenshots: [
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655680456/portfolio/googleMaps/Screenshot_2022-06-19_181306_bve0xe.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655680456/portfolio/googleMaps/Screenshot_2022-06-19_181326_vlsz1i.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1655680456/portfolio/googleMaps/Screenshot_2022-06-19_181351_hgpbw2.png",
    ],
  },
  //   {
  //     id: 5,
  //     title: "Operative Transportation System",
  //     url: "https://afternoon-citadel-81863.herokuapp.com/",
  //     code: "https://github.com/higashi04/SOT",
  //     description: "Fullstack app made with NodeJs, Express, MongoDb and Mongoose ODM, and EJS for my former employer. It includes inventory control, personnel archives, user creation for the React App. Frontend was meant to be remade with React."
  //   }
];

export default function Projects() {
  return (
    <>
      {projects.map((item) => (
        <ProjectHolder key={item.id} data={item} />
      ))}
      <div className="container mb-3">
        <div className="row">
          <div className="col">
            <p>And this portfolio made with React and Bootstrap</p>
          </div>
          <div className="col">
            <a
              className="btn project-btn"
              href="https://github.com/higashi04/portfolio"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
