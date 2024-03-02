import React from "react";
import ProjectHolder from "../../components/ProjectHolder/ProjectHolder";
const projects = [
  {
    id: 1,
    title: "Cities Summary",
    url: "https://main--dancing-medovik-606d67.netlify.app/",
    code: "https://github.com/higashi04/cities-summary",
    description:
      "This web app highlights use of APIs. It integrates a geo cities API whose data I send then to OpenAI to get a paragraph describing the city and MapBox pins the city on the map.",
    screenshots: [
      "https://res.cloudinary.com/dngbwenom/image/upload/v1709357543/Screenshot_2024-03-01_233016_rfy8lt.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1709357543/Screenshot_2024-03-01_233016_rfy8lt.png",
      "https://res.cloudinary.com/dngbwenom/image/upload/v1709357543/Screenshot_2024-03-01_233148_ajfbu7.png",
    ],
  },
  {
    id: 2,
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
    id: 3,
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
  }
];

export default function Projects() {
  return (
    <>
      {projects.map((item) => (
        <ProjectHolder key={item.id} data={item} />
      ))}
      <div className="container project-box mb-3">
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
