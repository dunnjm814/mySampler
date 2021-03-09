const SET_SAMPLES = 'samples/setSamples'


export const setSamples = (samples) => {
  return {
    type: SET_SAMPLES,
    payload: samples
  }
}

export const receiveSamples = (sendData) => async () => {
  const {
    samplerId,
    samples
  } = sendData

  const sendAudio = Object.entries(samples).filter(([ _key, sample ]) => {
    return sample !== "";
  })[0];

  const data = new FormData()
  data.append('sampleKey', sendAudio[0])
  data.append('sampleFile', sendAudio[1])
  const res = await fetch(`/api/aws/sampler/${samplerId}`, {
    method: 'PUT',
    body: data
  })
  const samplerUrls = await res.json()
  console.log(samplerUrls)
  }
