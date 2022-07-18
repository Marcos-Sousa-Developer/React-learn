import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Marcos'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Marcos'
            })
            
        },2000)
    }
  render() {
    return (
      <div>
        Parent Compoent
        {/* <RegComp name={this.state.name}></RegComp> */}
        <PureComp name={this.state.name}></PureComp>
        <MemoComp name={this.state.name}></MemoComp>
      </div>

    )
  }
}

export default ParentComp