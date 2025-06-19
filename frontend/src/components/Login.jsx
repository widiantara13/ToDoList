import React from 'react'
import { Navigate } from 'react-router-dom';
function Login() {
  return (
    <div className='bg-dark' style={{height:'100vh'}}>
         <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="row w-100">
            <div class="col-md-4 offset-md-3">
                <div class="p-4 bg-white rounded">
                    <h2 class="text-center mb-4">Login</h2>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary d-block mx-auto">Submit</button>
                        
                    </form>
                    <div class="text-center mt-3">
                        
                        <p>Don't have a                                                                                                                                                 n account? <a href="#">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login