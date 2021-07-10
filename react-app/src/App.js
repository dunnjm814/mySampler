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
import Profile from './components/Profile'
import NotFound from "./components/NotFound";
import Landing from "./components/Landing";

function App() {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);
  const [width, setWindowWidth] = useState(0)

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
    console.log(width)
  }

  useEffect(() => {
    dispatch(authenticate()).then(() => {
      setLoaded(true);
      updateDimensions();

      window.addEventListener("resize", updateDimensions);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    })}, [dispatch]);

  if (!loaded) {
    return null;
  }
  const styling = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  };
  return (
    <BrowserRouter>
      <NavBar width={width}/>
      <div style={styling}>
        <Switch>
          <Route path="/" exact={true}>
            <Landing />
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
                // alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              {(width > 600) && <SideBar />}
              <Home />
            </div>
          </ProtectedRoute>
          <ProtectedRoute path="/sampler/:samplerId" exact={true}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <SideBar />
              <Sampler />
            </div>
          </ProtectedRoute>
          <ProtectedRoute path="/profile/:userId" exact={true}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <SideBar />
              <Profile />
            </div>
          </ProtectedRoute>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
