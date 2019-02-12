import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
import routes from './routes'

import HeaderNav from './components/Navbar/Navbar'

import './reset.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <HeaderNav/>
              {routes}
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
