import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './lib/App'
import HomePage from './lib/pages/HomePage'

const routes = (
  <Route path="/" component={App}>
  <IndexRoute component={HomePage} />
  </Route>
  )

export default routes
