import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'
import routes from './routes'

import HeaderNav from './components/Navbar/Navbar'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'

import './reset.css'
import './App.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {}

    this.expandAsideNav = this.expandAsideNav.bind(this)
  }

  expandAsideNav(bool = true) {
    let masterGrid = document.getElementById('master-grid')

    if (masterGrid.classList.contains('master-grid-slid')) {
      masterGrid.classList.remove('master-grid-slid')
      masterGrid.classList.add('delay-overflow')
      setTimeout(function () {
        masterGrid.classList.remove('delay-overflow');

        let rotateArr = document.getElementsByClassName('aside-expand-arrow')
        for (let x = 0; x < rotateArr.length; x++) {
          if (rotateArr[x].classList.contains('rotate90')) {
            rotateArr[x].classList.remove('rotate90')
          }
        }
        let allUnsortedTabs = ['aside-news-h2s', 'aside-sports-h2s', 'aside-brandview-h2s', 'aside-tv-h2s', 'aside-radio-h2s', 'aside-obituaries-h2s', 'aside-weather-h2s']
        allUnsortedTabs.forEach(elementName => {
          document.getElementById(elementName).classList.remove(elementName)
        });

        let rotateMarket = document.getElementsByClassName('aside-expand-arrow-marketplace')
        for (let x = 0; x < rotateMarket.length; x++) {
          if (rotateMarket[x].classList.contains('rotate90')) {
            rotateMarket[x].classList.remove('rotate90')
          }
        }
        let allMarketplaceTabs = ['aside-classifieds-h2s', 'aside-cars-h2s', 'aside-homes-h2s', 'aside-jobs-h2s', 'aside-services-h2s']
        allMarketplaceTabs.forEach(elementName => {
          document.getElementById(elementName).classList.remove(elementName)
        });
      }, 200)
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
                <HeaderNav expandAsideNav={this.expandAsideNav} />
                {routes}
                <Footer />
              </div>
              {/* aside that cannot be seen unless we do something */}
              <div className='aside-parent'>
                <Aside expandAsideNav={this.expandAsideNav} />
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
