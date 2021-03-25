# mySampler

  ![mySamplerLogo](https://user-images.githubusercontent.com/71041585/112358608-bcc16380-8c8d-11eb-9a28-f0be745bda18.png)

## Live Link
* [Link link](https://mysampler.herokuapp.com/)

## mySampler was developed with:

* React.js
* Redux
* JavaScript
* CSS
* Python
* Flask
* SQLAlchemy
* Alembic
* PostgreSQL
* [Tone.js](https://tonejs.github.io/)
* [AWS S3](https://aws.amazon.com/s3/?nc2=h_ql_prod_st_s3)
* [Web Audio API](https://webaudio.github.io/web-audio-api/)

## What is mySampler?

mySampler is an interactive site bringing a minimalist audio workflow to a browser environment.

## To use mySampler on your local machine you need:

* PostgreSQL
* Pipenv with Python v3.8
* Node.js
0. If you would like to contribute, please fork this repository before step 1. Make pull requests from your own branch when necessary.
1. `git clone` mySampler repository into a local folder
2. `cd mySampler`
3. Run `pipenv install -r --dev dev-requirements.txt && pipenv install -r requirements.txt`
4. Create your own `.env` credentials based on the provided `.env.example`
5. Create a user and database in PostgreSQL that matches requirements in `.env`
6. In one terminal run `pipenv shell` activate the pipenv environment
7. run `flask db upgrade`, `flask seed all`
8. In second terminal, `cd react-app`
9. `npm i`
10. Within pipenv terminal `flask run`
11. Within the react terminal `npm start`
12. Have fun!

## Challenges

1. In the processing graph for web audio context, each rerender (through `useEffect()` and UI experience) fetches the data from S3, which can be very expensive. This was remedied partially with a colorful array of react hooks, namely the `useRef()` which eliminated half the fetch requests. I'm still working out how to reduce the number of requests in the context itself.
2. Similar to the last challenge, due to some nodes in the processing graph not being recycled after many UI experiences the audio quality seems to degrade. This was also partially remedied through a refactor of my gain nodes, where a `useEffect()` was listening for a change in the key/value, deconstructing and disposing of the previous gain node, then rebuilding a new node from the UI change, and reconnecting to the sample player.
![gainNode snippet](https://user-images.githubusercontent.com/71041585/112362202-6b1ad800-8c91-11eb-85e1-f82d4d7d5944.png)

## Snippets!

 One piece I'm particularly proud of with this project is how we upload samples to the database. Here we search the object entries by filtering out the sample which is no longer an empty string, then append a `FormData()` object with the key, and the sample file, where
we update the respective column in the sampler through params.

![thunk](https://user-images.githubusercontent.com/71041585/112362781-090ea280-8c92-11eb-9867-57b3aa652aba.png)

![python](https://user-images.githubusercontent.com/71041585/112363003-470bc680-8c92-11eb-9b6d-e981e3f9d7c3.png)

## What's left?

A lot. Is a project ever really done?

1. Figuring how to reduce the overall number fetch requests within the audio context.
2. Separate UI change rerenders from the above fetch so changing tempo or volume doesn't create a new network request.
3. Playing with other effects! I'd like to have a main volume, filter, vibrato, and bitcrush, in addition to assigning delay and reverb to the mixer knobs (this is expensive, and was put on the backburner for presentations because the audio quality degraded QUICKLY and the reverb algorithm occasionally crashed the browser)
4. Search feature doesn't isolate the start of string input.
5. Occasionally on another user profile, the sidebar dropdown for the current logged in user renders the sampler info about the user whose profile you visit.
6. Chat! A chat function that allows users to communicate about the samples they have.
7. Save 'midi' presets. When you make a pattern you like with the sequencer wouldn't it be nice to save that pattern as a preset for access in a drop down?
