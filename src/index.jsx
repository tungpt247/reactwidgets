import '../styles/index.scss'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class App extends Component {

  render() {
    return (
      <div>Simple React + Babel + Bootstrap + Webpack</div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector('#myApp'))
