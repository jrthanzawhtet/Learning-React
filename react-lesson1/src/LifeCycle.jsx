import React, { Component } from 'react'

class LifeCycle extends Component {

    constructor(props) {
        super(props)
        console.log('Constructor Start')

        this.state = {
            count: 0
        }
    }

    getData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const res = await data.json()
        console.log(res)
    }

    componentDidMount() {
        this.getData();
        console.log("component lifecycle start")
    }

    componentDidUpdate(){
        console.log("component is update")
    }

    increaseHandler = () => {  
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log('render start')
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increaseHandler}>Increase</button>
            </>
        )
    }
}

export default LifeCycle
