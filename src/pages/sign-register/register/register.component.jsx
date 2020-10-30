import React, { useState } from 'react';
import './register.styles.scss';

import FormInput from '../../../components/form-input/form-input.component';
import Button from '../../../components/button/button-component';
import { auth, createUserProfileDocument } from '../../../utils/firebase/firebase.utils';

const Register = () => {


    
    const [inputData, setInputData ] = useState( {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    );

    const { displayName, email, password, confirmPassword } = inputData;

    const handleChange = evt => {
        const { name, value } = evt.target;
    
        setInputData({ ...inputData, [name]: value });
    };


    const handleSubmit = async evt => {
        evt.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
          }
      
          try {
            const { user } = await auth.createUserWithEmailAndPassword(
              email,
              password
            );
      
            await createUserProfileDocument(user, { displayName });
      
            setInputData({
              displayName: '',
              email: '',
              password: '',
              confirmPassword: ''
            });
          } catch (error) {
            console.error(error);
          }
        };



    return (
        <>
        <h2>Register Your-Self</h2>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <Button type='submit'>SIGN UP</Button>
        </form>
        </>
    )
}

export default Register;
