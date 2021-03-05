import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navigation/NavBar";
import SideBar from './components/SideBar/SideBar.js'
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LoginModal from "./components/Modals/LoginModal";
import SignupModal from "./components/Modals/SignupModal";
import Home from './components/Home'
// import { authenticate } from "./services/auth";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
      await dispatch(authenticate())
      await setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Switch>
          <Route path="/" exact={true}></Route>
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
          <div style={{display: "flex", flexDirection: "row", alignItems: 'center' }}>
              <SideBar />
              <Home />
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
