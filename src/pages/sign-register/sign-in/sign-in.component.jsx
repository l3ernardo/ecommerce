import React, { Component } from 'react';
import FormInput from '../../../components/form-input/form-input.component';
import Button from '../../../components/button/button-component';
import './sign-in.styles.scss';


class Signin extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.setState({email: "", password: ""})
        console.log(this.state)
    }

    HandleInput = (evt) => {
        evt.preventDefault();
        console.log("evt : ", evt.target.name, evt.target.value)

        this.setState({[evt.target.name]: evt.target.value});

        console.log("value final : ", this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        label="Email"
                        onChange={this.HandleInput} 
                        required 
                    />

                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        label="password"
                        handleChange={this.HandleInput} 
                        required 
                    />

                    <Button 
                        type="submit" 
                        value="submit"
                    > Sign in</Button>

                </form>
            </div>
        )
    }
}


export default Signin;