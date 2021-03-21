import React from "react";
import "./EmailRow.css";
import { IconButton, Typography } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../../../features/mailSlice";
function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const expandEmail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };
  return (
    <div className="emailRow" onClick={expandEmail}>
      <div className="emailRow__option">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow__title">
        <Typography variant="h6">{title}</Typography>
      </div>
      <div className="emailRow__massage">
        <Typography variant="h6">
          {subject} <span className="emailRow__description">{description}</span>
        </Typography>
      </div>
      <div className="emailRow__time">
        <Typography variant="caption">{time}</Typography>
      </div>
    </div>
  );
}

export default EmailRow;
