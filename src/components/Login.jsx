import { Link } from 'react-router-dom';
import React, { useState } from 'react'

export default function Login() {

    const [login, setLogin] = useState({
        "userName": "",
        "password": ""
    })

    const [loginSucess , setLoginSucess] = useState(false);
    const [errorMsg , setErrorMsg] = useState("");


    function onSumitHandler(event) {

        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        };
        console.log(process.env.REACT_APP_BASE_URL);
        fetch("https://thinkfully.dev.amediatek.com/user/login", requestOptions)
            .then(response => { return response.json() })
            .then(data => {
                if(data.status){
                    setLoginSucess(true);
                }
                else{
                    setErrorMsg(data.message);
                }
            })

    }

    const OnChangeInput = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        setLogin({ ...login, [name]: value });
    }


    return (
        <>  
            <div className='container my-2'><h1>Login Page</h1></div>
            <div className='container'>
                <form onSubmit={onSumitHandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="userName" name="userName" aria-describedby="emailHelp" onChange={OnChangeInput} value={login.userName} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={OnChangeInput} value={login.password} />
                    </div>
                    <button type="submit" className="btn btn-primary mx-2 my-2">Submit</button>
                    <Link to='/signup'><button type="submit" className="btn btn-primary mx-2 my-2">Sign up</button></Link>
                </form>
            </div>
            <div><h3>{errorMsg}</h3></div>
        </>
    )
}

