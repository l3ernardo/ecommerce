import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../../../utils/firebase/firebase.utils';


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

        const {email, password } = this.state;
        try{
            auth.signInWithEmailAndPassword(email, password)
            this.setState({email: "", password: ""})
        } catch (error) {
            console.log(error)
        }
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

                    <div className='buttons'>
                        <Button type='submit'> Sign in </Button>

                        <Button onClick={signInWithGoogle} googleSignIn>
                            Sign in with Google
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Signin;