import React, { Component, PropTypes } from './react-proptypes-proxy.jsx'

export default class App extends Component {

  static propTypes = {
    x: PropTypes.string.isRequired
  }

  render() {

    return (
      <div id="xx">
        {this.props.x}
      </div>
    )
  }

}