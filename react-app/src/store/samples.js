const SET_SAMPLES = 'samples/setSamples'


export const setSamples = (samples) => {
  return {
    type: SET_SAMPLES,
    payload: samples
  }
}

export const receiveSamples = (sendData) => async () => {
  // const {
  //   userId,
  //   sample1,
  //   sample2,
  //   sample3,
  //   sample4,
  //   sample5,
  //   sample6,
  //   sample7,
  //   sample8,
  // } = sendData
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
  // data.append('userId', userId)
  // data.append('sample1', sample1)
  // data.append('sample2', sample2)
  // data.append('sample3', sample3)
  // data.append('sample4', sample4)
  // data.append('sample5', sample5)
  // data.append('sample6', sample6)
  // data.append('sample7', sample7)
  // data.append('sample8', sample8)
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', data.get('sampleKey'))
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', data.get('sampleFile'))
  const res = await fetch(`/api/aws/sampler/${samplerId}`, {
    method: 'PUT',
    body: data
  })
  const samplerUrls = await res.json()
  console.log(samplerUrls)
  }
