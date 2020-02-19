import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react';

@inject(stores =>({
    user: stores.usersStore.user,
    auth: stores.usersStore.auth,
    login: stores.usersStore.login,
    logOut: stores.usersStore.logOut,
    getUserAuth: stores.usersStore.getUserAuth
}))
@observer
class MainPage extends Component {

    constructor(props){
        super(props)
        this.state={
            auth: false
        }
    }

    loginAction = () =>{
        this.props.login()
    }

    logOutAction =() =>{
        this.props.logOut()
    }

    getAuth = () =>{
        console.log(this.props.getUserAuth);
        this.setState({auth: this.props.getUserAuth});
    }

    render() {
        return (
            <div>
                <Link to="/success">Main</Link>
                <button onClick={this.loginAction}>login</button>
                <button onClick={this.getAuth}>getAuth</button>
                <button onClick={this.logOutAction}>logOut</button>
            </div>
        )
    }
}

export default MainPage;