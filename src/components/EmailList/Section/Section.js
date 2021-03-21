import React from "react";
import "./Section.css";
import { Typography } from "@material-ui/core";

function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <Typography variant="h6">{title}</Typography>
      <div
        className="section__bottomBorder"
        style={{
          backgroundColor: `${selected && color}`,
        }}
      ></div>
    </div>
  );
}

export default Section;
