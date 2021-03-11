import React from 'react';
import './Register.css';

function Register() {

    function handleChange(e) {
        console.log(e.target.value);
    }
    return (
        <div>
            <h3>Register page</h3>
            <div className="LoginForm">
                <label>User Name:</label>
                <input type="text" placeholder="Username" onChange={handleChange} />
                <br/>
                <label>Password :</label>
                <input type="password" placeholder="Password" onChange={handleChange} />
                <br />
                <input type="submit" value="Login"  />
            </div>
        </div>
    );
};

export default Register;
