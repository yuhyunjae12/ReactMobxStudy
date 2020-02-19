import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state ={value : ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        alert('value :' + this.state.value);
    }

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
