import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GrowlerComponent from './GrowlerComponent'
import * as growlerActionCreators from '../../actions/growler.actions'


const mapStateToProps = state => ({
  growler: state.growler,
})
const mapDispatchToProps = dispatch => bindActionCreators(growlerActionCreators, dispatch)

class _GrowlerContainer extends React.Component {

  getMessage() {
    const lang = this.props.currentLocale || 'enUS'
    let message = this.props.growler.text
    if(this.props.messages && this.props.messages[lang]){
      return this.props.messages[lang][message] || message
    }
    return message
  }

  render() {
    const message = this.getMessage()
    this.props.hideTimeOutGrowler(this.props.growler, this.props.shownFor)
    return <GrowlerComponent {...this.props} message={message} />
  }
}

const GrowlerContainer = connect(mapStateToProps, mapDispatchToProps)(_GrowlerContainer)
export default GrowlerContainer
