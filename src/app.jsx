import React from 'react'
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router'
import Growler from './components/Growler' // original repo needs babel es7 features https://github.com/posabsolute/redux-flash-notification
import IndexRouteContainer from './containers/IndexRouteContainer.jsx'


require('rd-ux-bootstrap')
require('./styles/index.scss')


const Foo = () => (
    <div>
        <h1>Foo Bar Page!</h1>
    </div>
)

const Navigation = () => (
  <nav className='navbar navbar-light bg-faded'>
    <IndexLink className='navbar-brand' to='/'>IPStudio Template</IndexLink>
    <ul className='nav navbar-nav'>
    </ul>
    <div className='form-inline pull-sm-right'>
      <Link to='/foo/bar'>
        <button className='btn btn-primary-outline' type='submit'>
          BAR
        </button>
      </Link>
    </div>
  </nav>
)

const Main = ({children}) => {
  return (  
    <div>
      <header>
        <Growler />
        <Navigation />
      </header>
      {children}
    </div>
  )
}


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
