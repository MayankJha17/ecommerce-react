import React from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <>
            <div className="container"><h1>Sign Up</h1></div>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Invite Code</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <Link to='/'><button type="submit" className="btn btn-primary mx-2 my-2">Submit</button></Link>
                </form>
            </div>
        </>
    )
}
