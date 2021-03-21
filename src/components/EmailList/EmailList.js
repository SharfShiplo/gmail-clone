import React, { useState, useEffect } from "react";
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { IconButton, Hidden } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section/Section";
import EmailRow from "./EmailRow/EmailRow";
import { db } from "../../firebase";
import { selectSidebar } from "../../features/layoutSlice";
import { useSelector } from "react-redux";
function EmailList() {
  const sidebarIn = useSelector(selectSidebar);
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const fetchEmail = () => {
      return db
        .collection("emails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setEmails(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    };
    fetchEmail();
    return () => {
      fetchEmail();
      setEmails();
    };
  }, []);
  return (
    <div className="emailList">
      <div
        className={`emailList__container ${
          sidebarIn && "emailList__container--active"
        }`}
      >
        <div className="emailList__settings">
          <div className="emailList__settingsLeft">
            <IconButton>
              <CheckBoxOutlineBlankIcon />
            </IconButton>

            <Hidden xsDown>
              <IconButton>
                <ArrowDropDownIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              <IconButton>
                <RedoIcon />
              </IconButton>
            </Hidden>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="emailList__settingsRight">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <Hidden xsDown>
              <IconButton>
                <KeyboardHideIcon />
              </IconButton>
            </Hidden>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
        </div>
        <div className="emailList__sections">
          <Section Icon={InboxIcon} title="Primary" color="#d93025" selected />
          <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
          <Section Icon={LocalOfferIcon} title="Promotions" color="#188038" />
        </div>
        <div className="emailList__rows">
          {emails.map((email) => (
            <EmailRow
              key={email.id}
              id={email.id}
              title={email.data.to}
              subject={email.data.subject}
              description={email.data.message}
              time={new Date(
                email.data.timestamp?.seconds * 1000
              ).toLocaleDateString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmailList;
