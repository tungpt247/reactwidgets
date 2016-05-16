import '../styles/index.scss'

import React from 'react'
import {render} from 'react-dom'
import App from './lib/App'

const containerEl = document.getElementById('rootContainer')

render(<App/>, containerEl)
