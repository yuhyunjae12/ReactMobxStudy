import React, { Component } from 'react'

// Form 사용 방법 ( 페이지가 리로드됨.)
export default class LoginForm extends Component {
    constructor(props){
        super(props);
        // 생성자에 state 선언
        this.state ={value : ''};

        // handleSubmit 함수 호출시 바인드
        this.handleSubmit = this.handleSubmit.bind(this);
        // value 값 바인드
        this.handleChange = this.handleChange.bind(this);
    }

    // submit시 state value값 확인창
    handleSubmit(e){
        alert('value :' + this.state.value);
    }

    // input value를 state에 setState();
    handleChange(e){
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        name : <input type='text' value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type='submit' value='submit'/>
                </form>
                
            </div>
        )
    }
}
