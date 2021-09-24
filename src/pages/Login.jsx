import React from 'react'
import { Button} from '@chakra-ui/react';
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
    return (
      <div className="login">
        <Button 
          colorScheme="orange" 
          size="sm"
          onClick = {() => history.push("/register")}
        >
          Register
        </Button>

        <form className="loginForm">
          <h1>Login</h1>
          <div className="loginFormContainer">
            <h4>Username</h4>
            <input type="text" placeholder="enter username..." required />
            <h4>Password</h4>
            <input type="password" placeholder="enter password..." required />
            <button>Login</button>
          </div>
        </form>
      </div>
    );
}

export default Login
