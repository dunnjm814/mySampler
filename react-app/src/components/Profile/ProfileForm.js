import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { submitProfile } from "../../store/profile";
import './profile.css'


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
    await dispatch(submitProfile(bio, name, location, website, userId))
    toggle()
  }
    useEffect(() => {
      setBio(userProfile.bio);
      setName(userProfile.name);
      setLocation(userProfile.location);
      setWebsite(userProfile.website);
    }, [userProfile]);

  return (
    <div id="edit-about-user">
      <form id="about-user-form-wrap" onSubmit={onSubmit}>
        <textarea
          outline="none"
          rows="5"
          placeholder="Tell us about yourself?"
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <input
          placeholder="What's your name?"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Where are you based out of?"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <input
          placeholder="Bandcamp link?"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        ></input>
        <div>
          <button
            className="profile-form-buttons"
            onClick={() => history.push(`/profile/${userId}`)}
          >
            cancel
          </button>
          <button className="profile-form-buttons" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default ProfileForm
