import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import soundsMiddleware from 'redux-sounds'
import App from './components/App'
import reducer from './reducers/reducer'

const soundsData = {
  jump: './resources/sound/jump.wav',
  die: './resources/sound/dying.wav',
  win: './resources/sound/win.mp3'
}
const loadedSoundsMiddleware = soundsMiddleware(soundsData)
const logger = createLogger()
const store = createStore(reducer, applyMiddleware(logger, thunk, loadedSoundsMiddleware))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})

const isChromium = window.chrome,
  winNav = window.navigator,
  vendorName = winNav.vendor,
  isOpera = winNav.userAgent.indexOf("OPR") > -1,
  isIEedge = winNav.userAgent.indexOf("Edge") > -1,
  isIOSChrome = winNav.userAgent.match("CriOS");

if (isIOSChrome) {
  // is Google Chrome on IOS
} else if (isChromium !== null && isChromium !== undefined && vendorName === 'Google Inc.' && isOpera === false && isIEedge === false) {
  // is Google Chrome
} else {
  // not Google Chrome
  window.alert('This game is in alpha stage and only supports Google Chrome. The game may be squashed or look strange.')
}
