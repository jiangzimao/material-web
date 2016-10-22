import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

let rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)