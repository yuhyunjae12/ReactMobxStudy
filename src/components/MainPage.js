import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import NoDecorator from './NoDecorator';

@inject(stores =>({
    user: stores.usersStore.user,
    auth: stores.usersStore.auth,
    login: stores.usersStore.login,
    logOut: stores.usersStore.logOut,
    getUserAuth: stores.usersStore.getUserAuth
}))
@observer
class MainPage extends Component {

    // login() 함수 호출 UsersStore에 auth state -> true
    loginAction = () =>{
        this.props.login()
    }

    // logOut() 함수 호출 UsersStore에 auth state -> false
    logOutAction =() =>{
        this.props.logOut()
    }

    // computed getUserAuth UsersStore에 getter auth state
    getAuth = () =>{
        console.log(this.props.getUserAuth);
    }

    render() {
        return (
            <div>
                <Link to="/success">Main</Link>
                <button onClick={this.loginAction}>login</button>
                <button onClick={this.getAuth}>getAuth</button>
                <button onClick={this.logOutAction}>logOut</button>
                <hr/>
                <NoDecorator/>
            </div>
        )
    }
}

export default MainPage;