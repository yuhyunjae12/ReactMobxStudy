import React, { Component } from 'react'

export default class LoginForm2 extends Component {

    constructor(props){
        super(props);
        this.state ={
                id:'',
                pw:'',
            };

        this.idOnChange = this.idOnChange.bind(this);
        this.pwOnChange = this.pwOnChange.bind(this);
    }

    idOnChange(e){
        this.setState({id: e.target.value});
    }

    pwOnChange(e){
        this.setState({pw: e.target.value});
    }

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
