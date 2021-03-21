import React from "react";
import "./Mail.css";
import { IconButton, Typography, Hidden } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { selectedMail } from "../../features/mailSlice";
import { selectSidebar } from "../../features/layoutSlice";
function Mail() {
  const history = useHistory();
  const mail = useSelector(selectedMail);
  const sidebarIn = useSelector(selectSidebar);
  return (
    <div className="mail">
      <div
        className={`mail__conatiner ${sidebarIn && "mail__conatiner--active"}`}
      >
        <div className="mail__toolbar">
          <div className="mail__toolbarLeft">
            <IconButton onClick={() => history.push("/")}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
            <Hidden mdDown>
              <IconButton>
                <ErrorIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              <IconButton>
                <EmailIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              <IconButton>
                <WatchLaterIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              <IconButton>
                <CheckCircleIcon />
              </IconButton>
            </Hidden>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="mail__toolbarRight">
            <Hidden xsDown>
              <IconButton>
                <UnfoldMoreIcon />
              </IconButton>
            </Hidden>
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__body">
          <div className="mail__bodyTop">
            <div className="mail__bodyTopLeft">
              <Typography variant="h4">{mail?.subject}</Typography>
              <LabelImportantIcon className="mail__important" />
              <Typography variant="body1">{mail?.title}</Typography>
            </div>
            <div className="mail__bodyTopRight">
              <Typography variant="body2" className="mail__time">
                {mail?.time}
              </Typography>
            </div>
          </div>
          <div className="mail__message">
            <Typography variant="body1">{mail?.description}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
