import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Register() {
    const [registerName, setRegisterName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onNameChange = (event) => {
        setRegisterName(event.target.value);
    }

    const onEmailChange = (event) => {
        setRegisterEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setRegisterPassword(event.target.value);
    }

    const updateUserOnRegister = (user) => {
        console.log(user);
    }

    const onRegisterBtnClick = (event) => {
        event.preventDefault();
        console.log(registerEmail + registerName + registerPassword);
        if (registerEmail.length === 0 || registerName.length === 0 || registerPassword.length === 0) {
            setError('Please fill valid data');
        }
        else {
            setError('');
            fetch("http://localhost:5000/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: registerName,
                    email: registerEmail,
                    password: registerPassword,
                })
            }).then(response => {
                if (response.status === 200) {
                    (response.json().then(user => {
                        if (user.id) {
                            updateUserOnRegister(user);
                            navigate("/weather");
                        }
                    }
                    ))
                }
                else {
                    response.json().then(err => setError(err));
                }
            }).catch(err => setError("Unable to Register "));
        }

    }


    return (
        <div className="login-form">
            <div className="title">Register</div>
            <div className="form">
                <form onSubmit={onRegisterBtnClick}>
                    <div className="input-container">
                        <label>Email </label>
                        <input
                            type="email"
                            name="email"
                            required
                            onChange={onEmailChange}
                        />
                    </div>


                    <div className="input-container">
                        <label>Username </label>
                        <input
                            type="text"
                            name="uname"
                            required
                            onChange={onNameChange}
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
                        <input type="submit" value="Register" />
                    </div>

                    <div className='errorDiv'>
                        {error}
                    </div>

                    <div className='register-div'>
                        Already have an account?
                        <Link className='register-link' to='/signin'>
                            Signin Here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
