const LOAD_PROFILE = "profile/loadProfile";
const SET_PROFILE = "profile/setProfile";

export const loadProfile = (profile) => {
  return {
    type: LOAD_PROFILE,
    payload: profile,
  };
};

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    payload: profile,
  };
};

export const getProfile = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/profile/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const profile = await response.json();
    dispatch(loadProfile(profile));
    return profile;
  } else {
    return "No profile information to show"
  }
};

export const submitProfile = (
  bio,
  name,
  location,
  website,
  userId
) => async (dispatch) => {
  const response = await fetch(`/api/users/profile/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bio,
      name: name,
      location,
      website
    }),
  });
  const profile = await response.json();
  dispatch(setProfile(profile));
  return profile;
};

const profileReducer = (state = { profile: null }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_PROFILE:
      newState = action.payload;
      return newState;
    case SET_PROFILE:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};
export default profileReducer;
