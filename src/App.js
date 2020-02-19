import React, { Component } from 'react'
import MainPage from './components/MainPage';
import { Route } from 'react-router-dom';
import AuthStudy from './auth/AuthStudy';
import { inject, observer } from 'mobx-react';

@inject(stores =>({
  getUserAuth: stores.usersStore.getUserAuth
}))
@observer
class App extends Component {

  // auth 결과에 따른 컴포넌트 리턴
  getAuthResult =() =>{
    return AuthStudy(this.props.getUserAuth)
  }

  render() {
    return (
      <div>
        <MainPage/>
        <Route exact path="/success" component={this.getAuthResult}/>
      </div>
    )
  }
}

export default App