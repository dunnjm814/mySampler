const NEW_SAMPLER = "sampler/setNewSampler";
const GET_SAMPLER = 'sampler/loadSampler'
const GET_ALL_USER_SAMPLER = 'sampler/getAllUserSampler'
const DESTROY_SAMPLER = 'sampler/destroySampler'

export const setNewSampler = (sampler) => {
  return {
    type: NEW_SAMPLER,
    payload: sampler,
  }
}
export const loadSampler = (sampler) => {
  return {
    type: GET_SAMPLER,
    payload: sampler,
  }
}
export const getAllUserSampler = (samplers) => {
  let samplerList = Object.values(samplers)
  console.log(samplerList)
  return { type: GET_ALL_USER_SAMPLER, samplerList }
}
export const destroySampler = (sampler) => {
  return {
    type: DESTROY_SAMPLER,
    payload: sampler
  }
}


export const getSampler = (samplerId) => async (dispatch) => {
  const response = await fetch(`/api/sampler/${samplerId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const sampler = await response.json()
    dispatch(loadSampler(sampler))
    return sampler
  }
  return response.errors
}
export const fetchAllUserSamplers = (userId) => async (dispatch) => {
  const response = await fetch(`/api/sampler/all/${userId}`)
  const samplers = await response.json()
  dispatch(getAllUserSampler(samplers));
  return samplers
}
export const newSampler = (title, priv) => async (dispatch) => {
  const response = await fetch("/api/sampler/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      priv,
    }),
  });
  const sampler = await response.json()
  dispatch(setNewSampler(sampler))
  return sampler
}

export const deleteSampler = (samplerId) => async (dispatch) => {
  const response = await fetch(
    `/api/sampler/delete/${samplerId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  });
  const sampler = await response.json()
  dispatch(destroySampler(sampler))
  return {}
}

const samplerReducer = (state = { sampler: null, userSamplers: [] }, action) => {
  let newState = { ...state }

  switch (action.type) {
    case NEW_SAMPLER:
      newState.sampler = action.payload;
      return newState;
    case GET_SAMPLER:
      newState.sampler = action.payload;
      return newState;
    case GET_ALL_USER_SAMPLER:
      newState.userSamplers = [...action.samplerList]
      return newState
    case DESTROY_SAMPLER:
      delete newState[action.payload]
      return newState
    default:
      return state;
  }
}

export default samplerReducer
