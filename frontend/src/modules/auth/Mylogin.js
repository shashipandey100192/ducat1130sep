import React from 'react';
import { Link } from 'react-router-dom';

function Mylogin() {
  return (
    <div className='container page shadow p-5 border reg bg-light'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>User Login page</h1>
        </div>
        <div className='col-md-12 mt-2'>
          <label class="form-label">Email id</label>
          <input type="email" class="form-control" />
        </div>
        <div className='col-md-12 mt-2'>
          <label class="form-label">password</label>
          <input type="password" class="form-control" />
        </div>
        <div className='col-md-12 mt-2 text-center pt-2'>
          <button className='btn btn-success'> Login</button>
          <Link className='btn ms-3' to="registor">new user Registor</Link>
          <Link className='btn ms-3' to="dashboard">dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default Mylogin