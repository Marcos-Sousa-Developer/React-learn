import React, { Component } from 'react'

class UserGreeting extends Component {
  
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn && <div>Welcome Marcos</div>

        // return (

        //      this.state.isLoggedIn ? 
        //      <div>Welcome Marcos</div> :
        //      <div>Welcome Guest </div>

        // )

        // let message

        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Marcos</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Marcos</div>

        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }
    // return (
    //     <div>
    //         <div>Welcome Marcos</div>
            
    //     </div>

    // )
  }
}

export default UserGreeting