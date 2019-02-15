import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
import routes from './routes'

import HeaderNav from './components/Navbar/Navbar'
import Aside from './components/Aside/Aside'

import './reset.css'
import './userContainer.scss'
import './App.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {}

    this.expandAsideNav = this.expandAsideNav.bind( this )
  }

  expandAsideNav(bool = true) {
    let masterGrid = document.getElementById('master-grid')

    if (masterGrid.classList.contains('master-grid-slid')) {
      masterGrid.classList.remove('master-grid-slid')
      masterGrid.classList.add('delay-overflow')
      setTimeout(function() {masterGrid.classList.remove('delay-overflow');},200)
    }
    else if (bool) {
      masterGrid.classList.add('master-grid-slid')
    }
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div id='master-grid' className='master-grid'>
              {/* main content, nav, footer */}
              <div>
                <HeaderNav expandAsideNav={this.expandAsideNav}/>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
                <p>word</p>
              </div>
              {/* aside that cannot be seen unless we do something */}
              <div className='aside-parent'>
                <Aside expandAsideNav={this.expandAsideNav}/>
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
