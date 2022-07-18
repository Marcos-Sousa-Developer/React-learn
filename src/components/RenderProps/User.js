import React, { Component } from 'react'

class User extends Component {
  render() {
    
    return (
    // rechnique for sharing code between React components
      <div>
        
        {this.props.render(false)}
      </div>
    )
  }
}

export default User