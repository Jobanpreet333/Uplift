import React from 'react'

function NeedHelp() {
  return (
   
      <>
       <div className='container'>
        <h1>NEED HELP</h1>
      <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="email"  required/>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password"  pattern=".{8,12}" required title="8 to 12 characters" className="form-control" id="password" />
                    </div> */}


                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
      </>
    
  )
}

export default NeedHelp
