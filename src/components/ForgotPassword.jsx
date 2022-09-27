import React, { useState } from 'react'

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [validEmail , setValidEmail] = useState(false);
    const [msg , setMsg] = useState('');


    const EmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const validate = () => {
        return email.trim.length !== 0;
    }

    const onSumitHandler = (event) => {

        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch("https://thinkfullyapi.dev.amediatek.com/user/forgot/"+email, requestOptions)
            .then(response => { return response.json() })
            .then(data => {
                 if(validate){
                      setValidEmail(true); 
                      setMsg("A password reset link has been sent to your mail");
                 }
                 else{
                    setValidEmail(false);
                 }
            })
            .catch((error)=> {
                setMsg("Reset email cannot be send")
            })
    }


    return (
        <>
            <div className='container'>
                <form onSubmit={onSumitHandler}>
                    <div className="mb-3" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={EmailHandler} id="userName" name="userName" aria-describedby="emailHelp" value={email} />
                        <div id="emailHelp" className="form-text">Please enter valid email ID</div>
                    </div>
                    <button type="submit" className="btn btn-primary mx-2 my-2">Submit</button>
                </form>
            </div>
            <div className="container">
                <h3>{msg}</h3>
            </div>
        </>
    )
}
