import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './store/reducers'
const store = createStore(reducers)

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Main />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
