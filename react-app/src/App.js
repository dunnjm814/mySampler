import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import NavBar from "./components/Navigation/NavBar";
import SideBar from './components/SideBar/SideBar.js'
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LoginModal from "./components/Modals/LoginModal";
import SignupModal from "./components/Modals/SignupModal";
import Home from './components/Home'
import Sampler from "./components/Sampler";
import AudioPlayers from './components/AudioPlayers'


function App() {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(authenticate()).then(() => {
      setLoaded(true);
    })}, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route path="/" exact={true}>
            <h2>hello</h2>
          </Route>
          <Route path="/login" exact={true}>
            <LoginModal />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignupModal />
          </Route>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/home" exact={true}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <SideBar />
              <Home />
            </div>
          </ProtectedRoute>
          <ProtectedRoute path="/sampler/:samplerId" exact={true}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <SideBar />
              <Sampler />
              <div style={{display: 'none'} }>
                <AudioPlayers />
              </div>
            </div>
          </ProtectedRoute>
          <ProtectedRoute
            path="/profile/:userName"
            exact={true}
          ></ProtectedRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
