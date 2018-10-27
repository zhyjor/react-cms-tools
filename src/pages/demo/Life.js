import React from 'react'
import Child from './Child';
import './css/index.less'
import { Button,Input } from 'antd'

export default class Life extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        var style = {
            padding: 10
        }
        return (
            <div style={style}>
                <p className='content'>React生命周期</p>
                <Button onClick={this.handleAdd}>点击一下</Button>
                <Button onClick={this.handleClick.bind(this)}>点击一下</Button>
                <p>{this.state.count}</p>
                <Input></Input>
                <Child count={this.state.count}></Child>
            </div>
        )
    }
}