import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IndexView from '../components/IndexView'
import { foo } from '../actions/foo.actions'
import { hashHistory as history } from 'react-router'

const mapStateToProps = (state) => {
  return {
    world: state.foo.world
  }
}

const mapDispatchToProps = (createGroup) => (dispatch) => ({
    foo: bindActionCreators(foo, dispatch)
})

const IndexRoute =
  connect(mapStateToProps, mapDispatchToProps)(IndexView)

export default IndexRoute
