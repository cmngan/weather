import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from './store'
import App from './containers/App'
import './index.css'

const Index = () => 
  <Provider store={store}>
    <App />
  </Provider>

ReactDOM.render(<Index />, document.getElementById('root'))
