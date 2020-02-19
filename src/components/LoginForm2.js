import React, { Component } from 'react'

export default class LoginForm2 extends Component {

    constructor(props){
        super(props);

        // id,pw state 선언
        this.state ={
                id:'',
                pw:'',
            };

        // id 값 바인드
        this.idOnChange = this.idOnChange.bind(this);
        // pw 값 바인드
        this.pwOnChange = this.pwOnChange.bind(this);
    }

    // id 값 onChange
    idOnChange(e){
        this.setState({id: e.target.value});
    }

    // pw 값 onChange
    pwOnChange(e){
        this.setState({pw: e.target.value});
    }

    // state 값 콘솔
    LoginSubmit =() =>{
        console.log(this.state.id);
        console.log(this.state.pw);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.id} onChange={this.idOnChange} />
                <hr/>
                <input type="text" value={this.state.pw} onChange={this.pwOnChange}/>
                <hr/>
                <button onClick={this.LoginSubmit}>submit</button>
            </div>
        )
    }
}
