import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject(stores =>({
    number: stores.counter.number,
    users: stores.apiStore.users,
    setResult: stores.apiStore.setResult,
    call: stores.apiStore.call,
    getUsers: stores.apiStore.getUsers,
    callOne: stores.apiStore.callOne,
    getUserInfo: stores.apiStore.getUserInfo
}))

@observer
class Headers extends Component {

    componentWillMount(){
        this.props.call();
    }

    callOne(no){
        this.props.callOne(no);
    }

    result(){
        console.log(this.props.getUserInfo)
    }

    getLocal(){
        console.log(localStorage.getItem('Token'));
    }

    render() {

        const users = this.props.getUsers
                        .map((val) => <div key={val.id}>{val.name}</div>);
                        
        return (
            <div>
                {users}
                <div>{this.props.number}</div>
                <button onClick={
                    () => this.callOne(1)
                }>callOne</button>
                <button
                    onClick={
                        () => this.result()
                    }
                >result</button>
                <button onClick={
                    ()=> this.getLocal()
                }>localStorage</button>
            </div>
        )
    }
}
export default Headers;