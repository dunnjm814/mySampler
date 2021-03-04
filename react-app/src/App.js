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
      <div style={{ display: "flex", flexDirection: "column"} }>
        <NavBar  />
        <div style={{height: '100%' }}>
          <Switch>
            <Route path="/" exact={true}>
            </Route>
            <Route path="/login" exact={true}>
              <LoginForm  />
            </Route>
            <Route path="/sign-up" exact={true}>
              <SignUpForm  />
            </Route>
            <ProtectedRoute path="/users" exact={true} >
              <UsersList/>
            </ProtectedRoute>
            <ProtectedRoute path="/users/:userId" exact={true} >
              <User />
            </ProtectedRoute>
            <ProtectedRoute path="/home" exact={true} >
              <SideBar />

            </ProtectedRoute>
            <ProtectedRoute path='/profile/:userName' exact={true}>

            </ProtectedRoute>
          </Switch>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
