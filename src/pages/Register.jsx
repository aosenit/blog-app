import React from 'react'
import { Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  let history = useHistory();
    return (
      <div className="register">
        <Button
          colorScheme="orange"
          size="sm"
          onClick={() => history.push('/login')}
        >
          Login
        </Button>

        <form className="loginForm">
          <h1>Register</h1>
          <div className="loginFormContainer">
            <h4>Username</h4>
            <input type="text" placeholder="enter username..." required />
            <h4>Email</h4>
            <input type="email" placeholder="enter email..." required />
            <h4>Password</h4>
            <input type="password" placeholder="enter password..." required />
            <button>Register</button>
          </div>
        </form>
      </div>
    );
}

export default Register
