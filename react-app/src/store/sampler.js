import { AiOutlineConsoleSql } from "react-icons/ai";

const NEW_SAMPLER = "samples/newSampler";


export const setNewSampler = (sampler) => {
  return {
    type: NEW_SAMPLER,
    payload: sampler,
  }
}

export const newSampler = (userId, title, priv) => async (dispatch) => {
  const response = await fetch("/api/sampler/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      userId,
      priv,
    }),
  });
  console.log('thunkfetch', response)
  const sampler = await response.json();
  console.log('jsonthunk', sampler)

  dispatch(setNewSampler(sampler))
  return sampler
}

const samplerReducer = (state = { sampler: null }, action) => {
  let newState;
  switch (action.type) {
    case NEW_SAMPLER:
      newState.sampler = action.payload;
      return newState;
    default:
      return state;
  }
}

export default samplerReducer
