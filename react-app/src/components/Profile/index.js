import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
// import AboutUserForm from "./AboutUserForm";
import "./profile.css";


function Profile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const userProfile = useSelector((state) => state.profile);
  const [info, setInfo] = useState(false);

  function toggle() {
    setInfo(!info);
  }

  return (
    <>
      <div id="profile-wrapper">
        <div id="user-info">
          <div id="user-card"></div>
          <div id="about-user">
            <div id="user-header">
              <h1>Hi! My name is {sessionUser && sessionUser.username}</h1>
              {sessionUser.id == userId ? (
                <button id="editprofilebutton" onClick={toggle}>
                  Edit profile
                </button>
              ) : null}
            </div>
            <div id="profile-infoform-component">
              <div id="component-wrapper" className={info ? "" : "hidden"}>
                {/* form goes here */}
                {!info && (
                  <div id="profile-info">
                    {userProfile.bio && (
                      <div>
                        <h2>Bio</h2>
                        <p>{userProfile.bio}</p>
                      </div>
                    )}
                    {userProfile.name && (
                      <div>
                        <h2>First Name</h2>
                        <p>{userProfile.name}</p>
                      </div>
                    )}
                    {userProfile.location && (
                      <div>
                        <h2>Location</h2>
                        <p>{userProfile.location}</p>
                      </div>
                    )}
                    {userProfile.website && (
                      <div>
                        <h2>Website</h2>
                        <p>{userProfile.website}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile
