import React from "react";

import "./ProjectHolder.css";

export default function ProjectHolder({ data }) {
  return (
    <div className="container project-box">
      <div className="row">
        <h2>{data.title}</h2>
      </div>
      <div className="row">
        <div className="col">
         
            {data.screenshots.map((item) => (
    
                <img
                className="project-img"
                  src={item}
                  alt="slide"
                />
            
            ))}
          
          <div className="row my-3 project-btnContainer">
            <div className="col">
              <a className="btn project-btn" href={data.url}>
                Demo
              </a>
            </div>
            <div className="col">
              <a className="btn project-btn" href={data.code}>
                Code
              </a>
            </div>
            <div className="row my-3">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
