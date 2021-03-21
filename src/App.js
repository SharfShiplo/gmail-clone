import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailList from "./components/EmailList/EmailList";
import Mail from "./components/Mail/Mail";
import SendMail from "./components/SendMail/SendMail";
import { useSelector, useDispatch } from "react-redux";
import { selectMailIsOpen } from "./features/mailSlice";
import { selectUser, login } from "./features/userSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

function App() {
  const sendMessageOpen = useSelector(selectMailIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const persistent = () =>
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(
            login({
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            })
          );
        }
      });
    persistent();
    return () => {
      persistent();
    };
  }, [dispatch]);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <Sidebar />
          <div className="app__body">
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
            {sendMessageOpen && <SendMail />}
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
