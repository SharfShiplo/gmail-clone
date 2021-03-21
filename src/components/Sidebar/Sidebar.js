import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption/SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";
import { selectSidebar } from "../../features/layoutSlice";
function Sidebar() {
  const dispatch = useDispatch();
  const sidebarIn = useSelector(selectSidebar);
  return (
    <div>
      <div className={`sidebar ${sidebarIn && "sidebar--active"}`}>
        <div
          className={`sidebar__conatiner ${
            sidebarIn && "sidebar__conteiner--active"
          }`}
        >
          <Button
            onClick={() => dispatch(openSendMessage())}
            className="sidebar__compose"
            startIcon={<AddIcon fontSize="large" />}
          >
            Compose
          </Button>
          <div className="sidebar__options">
            <SidebarOption
              selected
              title="Inbox"
              Icon={InboxIcon}
              number={240}
            />
            <SidebarOption title="Starred" Icon={StarIcon} number={4} />
            <SidebarOption title="Snoozed" Icon={AccessTimeIcon} number={14} />
            <SidebarOption title="Send" Icon={SendIcon} number={44} />
            <SidebarOption
              title="Draft"
              Icon={InsertDriveFileIcon}
              number={13}
            />
            <SidebarOption title="Trash" Icon={DeleteIcon} number={120} />
          </div>
          <div className="sidebar__footer">
            <div className="sidebar__footerIcon">
              <IconButton>
                <PersonIcon />
              </IconButton>
              <IconButton>
                <DuoIcon />
              </IconButton>
              <IconButton>
                <PhoneIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
