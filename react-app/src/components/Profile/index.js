import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useParams, NavLink } from "react-router-dom";
import ProfileForm from './ProfileForm'
import { getProfile } from '../../store/profile'
import { newFollow, removeFollower, getFollowerList } from '../../store/friends'
import {fetchAllUserSamplers} from '../../store/sampler'
import "./profile.css";


function Profile() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const userProfile = useSelector((state) => state.profile);
  const userFriends = useSelector((state) => state.friends.userFollows);
  const userSamplers = useSelector((state) => state.sampler.userSamplers);
  const [info, setInfo] = useState(false);
  const [user, setUser] = useState({});

  function toggle() {
    setInfo(!info);
  }
  useEffect(() => {
    dispatch(getProfile(userId))
    if (!userId) {
      return
    }
      (async () => {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        await setUser(user);
        await dispatch(getFollowerList({ user_id: sessionUser.id }));
      })()
    dispatch(fetchAllUserSamplers(userId))
  }, [dispatch, userId])

  const followed = userFriends.filter((user) => user.id == userId);

  const addFollow = async (e) => {
    e.preventDefault();
    await dispatch(
      newFollow({
        follower_id: sessionUser.id,
        followed_id: userId,
      })
    );
  };

const unFollow = async (e) => {
  e.preventDefault();
  await dispatch(
    removeFollower({
      follower_id: sessionUser.id,
      followed_id: userId,
    })
  );
};
  return (
    <>
      <div id="profile-wrapper">
        <div className="dummy"></div>
        <div id="user-info">
          <div id="user-card"></div>
          <div id="about-user">
            <div id="user-header">
              {sessionUser.id == userId ? (
                <>
                  <h1>Hey there, {sessionUser && sessionUser.username}!</h1>
                  <button id="editprofilebutton" onClick={toggle}>
                    Edit profile
                  </button>
                </>
              ) : (
                <>
                  <h1>Hi! My name is {user && user.username}.</h1>
                  {followed ? (
                    <button
                      onClick={unFollow}
                      className="unfollow"
                      role="menuitem"
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      onClick={addFollow}
                      className="follow"
                      role="menuitem"
                    >
                      Follow
                    </button>
                  )}
                </>
              )}
            </div>
            <div id="profile-infoform-component">
              {info && (
                <ProfileForm
                  userProfile={userProfile}
                  info={info}
                  setInfo={setInfo}
                />
              )}
              <div id="component-wrapper" className={info ? "" : "hidden"}>
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
        <div className="dummy"></div>
        <div className="profile-sampler-links">
          {userSamplers &&
            userSamplers.map((sampler) => (

              <div
                key={`sampler-link-wrap-${sampler.id}`}
                className="sub-menu-link"
              >
                <NavLink
                  key={`sampler-link-${sampler.id}`}
                  to={`/sampler/${sampler.id}`}
                >
                  {sampler.title}
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export default Profile
