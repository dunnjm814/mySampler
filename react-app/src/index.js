import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { ModalProvider } from "./context/Modal";
import MixerProvider  from "./context/Mixer";
import configureStore from "./store";
import * as sessionActions from "./store/session";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <MixerProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MixerProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
