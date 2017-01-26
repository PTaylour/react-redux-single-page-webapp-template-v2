/* @flow */

import React from 'react'
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router'
import Growler from './components/Growler' // original repo needs babel es7 features https://github.com/posabsolute/redux-flash-notification
import IndexRouteContainer from './containers/IndexRouteContainer.jsx'


require('./styles/gutenberg/style/index.scss')

const Foo = () => (
    <div>
      <h1>Foo Bar Page!</h1>
      <h2>Love the Foo Bar</h2>
      <p>Paragraph foo bar</p>
    </div>
)

const Navigation = () => (
  <nav className=''>
    <IndexLink className='' to='/'>Home Page</IndexLink>
    <ul className=''>
    </ul>
    <div className=''>
      <Link to='/foo/bar'>
        <button className='btn btn-primary-outline' type='submit'>
          BAR
        </button>
      </Link>
    </div>
  </nav>
)

const Main = ({children}) => (
    <div>
      <header>
        <Growler />
        <Navigation />
      </header>
      {children}
    </div>
)


export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={IndexRouteContainer} />
          <Route path='/foo/bar' component={Foo}/>
        </Route>
      </Router>
    )
  }
}
