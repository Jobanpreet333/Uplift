import React from 'react'

function Sign() {
  return (
    <div>
      <>
      <div className='container'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Password</label>
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
    </div>
  )
}

export default Sign
