import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Marcos'
        }

        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state) { //when state depends on changes in props over time
                                                  // and also didnt cause any side effects
                                                  // read props and state than return jsx
                                                  // set state
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() { //load data, to cause side effects //  
                            // call only once.
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() { //receive the updated props and state 
                              // all component should rerender or not by default class
                            // compare existing props and state values with next props and state
                            // return true ou false
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }


    getSnapshotBeforeUpdate(prevProps, prevState) { // accepts previos props and previous state
                                                    // before the change from the virutal dom are to be 
                                                    // reflected in the dom
                                                    // caputure method
                                                    // return null or value to the third parameter componetDidUpdate

        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() { // called after the render is finished in the re-render cycles
                            // confirm all components did update

                            // with previous props, prevState and snapshot
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'CodeEvolution'
        })
    }

    componentWillUnmount() {
        // when the component gets destroyed or unmoted from the dom
    }

  render() {
    console.log('LifecycleA render')
    return (
        <div>
            <div>LifecycleA</div>
            <button onClick={this.changeState}>Change State</button>
            <LifecycleB />
        </div>

    )
  }
}

export default LifecycleA