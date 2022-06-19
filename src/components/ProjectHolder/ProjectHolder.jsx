import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import "./ProjectHolder.css";

export default function ProjectHolder({ data }) {
  return (
    <div className="container project-box mx-5">
      <div className="row">
        <h2>{data.title}</h2>
      </div>
      <div className="row">
        <div className="col">
          <ImageList sx={{ width: 800, height: 500 }} cols={2} rowHeight={450} rowWidth={500}>
            {data.screenshots.map((item) => (
              <ImageListItem key={item}>
                <img
                  src={item}
                  alt="slide"
                />
              </ImageListItem>
            ))}
          </ImageList>
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
