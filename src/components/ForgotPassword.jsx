import React, { useState } from 'react'

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [validEmail , setValidEmail] = useState(false);


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
        fetch("http://thinkfullyapi.dev.amediatek.com/user/"+email, requestOptions)
            .then(response => { return response.json() })
            .then(data => {
                 if(validate){
                      setValidEmail(true);
                 }
                 else{
                    setValidEmail(false);
                 }
            })
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={onSumitHandler}>
                    <div className="mb-3" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={EmailHandler} id="userName" name="userName" aria-describedby="emailHelp" value={email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" className="btn btn-primary mx-2 my-2">Submit</button>
                </form>
            </div>
        </>
    )
}
