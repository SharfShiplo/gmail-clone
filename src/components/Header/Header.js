import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar, Typography, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSidebar,
  openSidebar,
  closeSidebar,
} from "../../features/layoutSlice";
import { useHistory } from "react-router-dom";
import { selectUser, logout } from "../../features/userSlice";
import { auth } from "../../firebase";
function Header() {
  const [logoutInfo, setLogoutInfo] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const sidebarIn = useSelector(selectSidebar);
  const user = useSelector(selectUser);
  const sidebarToggler = () => {
    if (!sidebarIn) {
      dispatch(openSidebar());
    } else {
      dispatch(closeSidebar());
    }
  };
  const logoutInfoHandler = () => {
    setLogoutInfo(!logoutInfo);
  };
  const logoutHandler = () => {
    auth.signOut().then(() => {
      setLogoutInfo(false);
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={sidebarToggler}>
          <MenuIcon />
        </IconButton>
        <img
          onClick={() => history.push("/")}
          src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="gmail logo"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail..." type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <div className="reader__rightAvatar" onClick={logoutInfoHandler}>
          <Avatar src={user?.photoURL} />
        </div>
        {user && logoutInfo && (
          <div className="header__rightUserInfo">
            <Avatar src={user?.photoURL} />
            <Typography variant="h5">{user?.displayName}</Typography>
            <Typography variant="body2">{user?.email}</Typography>
            <Button variant="outlined" onClick={logoutHandler}>
              Sign out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
