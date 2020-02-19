import React, { Component } from 'react'
import Counter from '../components/Counter'
import ApiTest from '../components/ApiTest'
import LoginForm from '../components/LoginForm'
import LoginForm2 from '../components/LoginForm2'

export default class RootComponent extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <hr/>
                <ApiTest />
                <hr/>
                <LoginForm/>
                <hr/>
                <LoginForm2/>
            </div>
        )
    }
}
