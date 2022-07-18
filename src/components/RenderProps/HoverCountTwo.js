import React, { Component } from 'react'

class HoverCountTwo extends Component {

  render() {
    const {count,incrementCount} = this.props

    return (
      <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
    )
  }
}

export default HoverCountTwo