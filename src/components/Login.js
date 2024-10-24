import React from 'react'

function Login() {
    return (
        <>
            <div className='container'>
                <h1>LOGIN</h1>
                <form>
                 
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"  required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
