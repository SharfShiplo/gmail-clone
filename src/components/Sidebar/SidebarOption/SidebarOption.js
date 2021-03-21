import React from "react";
import "./SidebarOption.css";
import { Typography } from "@material-ui/core";
function SidebarOptions({ title, Icon, number, selected }) {
  return (
    <div className={`sidebarOption ${selected && "sidebar--active"}`}>
      <Icon />
      <Typography variant="body1">{title}</Typography>
      <Typography variant="caption">{number}</Typography>
    </div>
  );
}

export default SidebarOptions;
