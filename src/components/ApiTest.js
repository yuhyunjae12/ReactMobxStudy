import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'


// 필요한 store만 설정해서 사용한다면  number: store.counter.number 와 같이 다른 스토어도 사용가능
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

    // 마운트 되었을때 call함수 호출
    componentWillMount(){
        this.props.call();
    }

    // callOne (id : 1) 유저 정보 호출
    callOne(no){
        this.props.callOne(no);
    }

    // 유저 정보 호출
    result(){
        console.log(this.props.getUserInfo)
    }

    // 로컬 스토리지 정보 호출
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