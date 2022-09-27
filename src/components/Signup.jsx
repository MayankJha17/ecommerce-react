import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';

export default function Signup() {

    const [signup, setSignup] = useState({
        "userName": "",
        "password": "",
        "confirmPassword": "",
        "inviteCode": "",
        "fullName": ""
    })


    const [signupSucess, setSignupSucess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");


    const SubmitHandler = (event) => {
        
        event.preventDefault();


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signup)
        };
        fetch("http://thinkfullyapi.dev.amediatek.com/user/create", requestOptions)
            .then(response => { return response.json() })
            .then(data => {
                if (data.status) {
                    setSignupSucess(true);
                }
                else {
                    setErrorMsg(data.message);
                }
            })
    }

    const OnChangeInput = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        setSignup({ ...signup, [name]: value });
    }

    if (signupSucess) {
        return (
            <>
                <Login/>
            </>
        );
    }
    else {
        return (
            <>
                <div className="container"><h1>Sign Up</h1></div>
                <div className="container">
                    <form onSubmit={SubmitHandler}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="userName" name="userName" aria-describedby="emailHelp" onChange={OnChangeInput} value={signup.userName} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" id="fullName" name="fullName" className="form-control" onChange={OnChangeInput} value={signup.fullName} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" id="password" name="password" className="form-control" onChange={OnChangeInput} value={signup.password} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" onChange={OnChangeInput} value={signup.confirmPassword} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Invite Code</label>
                            <input type="text" className="form-control" id="inviteCode" name="inviteCode" onChange={OnChangeInput} value={signup.inviteCode} />
                        </div>
                        <button type="submit" className="btn btn-primary mx-2 my-2">Submit</button>
                    </form>
                </div>
                <div className="container">
                    <h3>{errorMsg}</h3>
                </div>
            </>
        )
    }
}
