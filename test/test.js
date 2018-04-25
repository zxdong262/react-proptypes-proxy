
import React, { Component, PropTypes } from '../dist/react-proptypes-proxy.js'
import ReactDOM from 'react-dom'

describe('add', function () {

  let scope, sandboxEl

  beforeEach(function () {
    sandboxEl = $('<div>').attr('id', 'sandbox').appendTo($('body'))
  })

  afterEach(function() {
    $('#sandbox').remove()
  })

  function nextTick(run) {
    setTimeout(run, 100)
  }
  
  function prepare(x) {

    let mountNode = sandboxEl[0]
    class App extends Component {

      static propTypes = {
        x: PropTypes.string.isRequired
      }

      render() {
        return <div>{this.props.x}</div>
      }
    }

    ReactDOM.render(
      <App x={x} />,
      mountNode
    )

  }

  // Tests

  describe('basic', function () {

    it('should React.PropTypes works', function(done) {
      prepare('xx')
      setTimeout(function() {
        expect($('#sandbox').text()).to.equal('xx')
        done()
      }, 100)

    })

  })

  //end
})
