
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setUser } from '../../actions';
import { connect } from 'react-redux';

/*
const mapStateToProps = (state) => {
  console.log(state.loadUserOnSignIn.loggedInUser);
  return {
    loggedInUser: state.loadUserOnSignIn.loggedInUser,
    isSignedIn: state.loadUserOnSignIn.isSignedIn
  }
}
*/



const mapDispatchToProps = (dispatch) => {
  return {
    updateUserOnLogin: (user) => dispatch(setUser(user))
  }
}


function Signin(props) {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { updateUserOnLogin } = props;

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  }

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  }

  const onSignInBtnClick = (event) => {
    event.preventDefault();
    console.log(signInEmail);
    console.log(signInPassword);
    if (signInEmail.length === 0 || signInPassword.length === 0) {
      setError("Email and password cannot be empty");
    }
    else {
      setError("");
      fetch("http://localhost:5000/signin", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({
          email: signInEmail,
          password: signInPassword
        })
      }).then(response => response.json()).then(user => {
        if (user.id != null) {
          updateUserOnLogin(user);
          navigate("/weather");
        }
        else {
          setError("Wrong Credentials please try again!!!!!!");
        }
      })
    }
  }



  return (
    <div className="login-form">
      <div className="title">Sign In</div>
      <div className="form">
        <form onSubmit={onSignInBtnClick}>
          <div className="input-container">
            <label>Email </label>
            <input
              type="text"
              name="email"
              required
              onChange={onEmailChange}
            />

          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              type="password"
              name="pass"
              required
              onChange={onPasswordChange}
            />

          </div>
          <div className="button-container">
            <input type="submit" value="Signin" />
          </div>

          <div className='errorDiv'>
            {error}
          </div>

          <div className='register-div'>
            Do not have a account?
            <Link className='register-link' to='/register'>
              Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );

}


export default connect(null, mapDispatchToProps)(Signin);