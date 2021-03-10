import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";


function ProfileForm({ userProfile, info, setInfo }) {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  function toggle() {
    setInfo(!info);
  }
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(bio, name, location, website)
    toggle()
  }
  useEffect(() => {
    setBio(userProfile.bio)
    setName(userProfile.name)
    setLocation(userProfile.location)
    setWebsite(userProfile.website)
  }, [userProfile])

  return (
    <div id="edit-about-user">
      <form id="about-user-form-wrap" onSubmit={onSubmit}>
        <label>
          Tell us about yourself?
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></input>
        </label>
        <label>
          What's your name?
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label>
          Where are you based out of?
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <label>
          Bandcamp link?
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          ></input>
        </label>
        <div>
          <button onClick={() => history.push(`/profile/${userId}`)}>
            cancel
          </button>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
export default ProfileForm
