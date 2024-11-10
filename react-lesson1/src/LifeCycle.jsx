import React, { Component } from 'react'

class LifeCycle extends Component {

    constructor(props) {
        super(props)
        console.log('Constructor Start')

        this.state = {
            count: 0,
            data: []
        }
    }

    getData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const res = await data.json()
        console.log(res)
        this.setState({
            data: res
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            this.getData();
        }
        console.log("component is update")
    }

    componentDidMount() {
        console.log("component lifecycle start")
    }

    increaseHandler = () => {  
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increaseHandler}>Increase</button>
                {this.state.data.map((item,index) => (
                    <p key={index}>{item.name}</p>
                ))}
            </>
        )
    }
}

export default LifeCycle
