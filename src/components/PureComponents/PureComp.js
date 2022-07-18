import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  // implents should components update
  // prevents unacessry renderings
  render() {
    return (
      <div>Pure Component {this.props.name} </div>
    )
  }
}

export default PureComp