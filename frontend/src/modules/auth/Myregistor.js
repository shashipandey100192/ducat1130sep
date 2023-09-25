import React,{useState} from 'react'

function Myregistor() {
const [sdata,supdat]=useState({
  fullname:"",
  email:"",
  phone:"",
  gender:"",
  city:"",
  pass:""
})

const chanfunc = (e) => {
  const { name, value } = e.target;
  supdat((preval) => {
      return {
          ...preval,
          [name]: value
      }
  })
}

const Myregistoruser= ()=>{
  alert("hi");
  console.log(sdata);
}


  return (
    <div className='container page shadow p-5 border reg bg-light'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>User Registor page</h1>
        </div>
        <div className='col-md-6 mt-2'>
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name='fullname' value={sdata.fullname} onChange={chanfunc}/>
        </div>
        <div className='col-md-6 mt-2'>
          <label className="form-label">Email id</label>
          <input type="email" className="form-control" name='email' value={sdata.email} onChange={chanfunc}/>
        </div>
        <div className='col-md-6 mt-2'>
          <label className="form-label">Phone no</label>
          <input type="text" className="form-control" name="phone" value={sdata.phone} onChange={chanfunc}/>
        </div>
        <div className='col-md-6 mt-2'>
          <label className="form-label">Gender</label>
          <select className="form-control" name='gender' value={sdata.gender} onChange={chanfunc}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className='col-md-6 mt-2'>
          <label className="form-label">city</label>
          <input type="text" className="form-control" name='city' value={sdata.city} onChange={chanfunc}/>
        </div>
        <div className='col-md-6 mt-2'>
          <label className="form-label">password</label>
          <input type="password" className="form-control" name='pass' value={sdata.pass} onChange={chanfunc}/>
        </div>
        <div className='col-md-12 mt-2 text-center pt-2'>
          <button className='btn btn-success' type='button' onClick={Myregistoruser}> Registor</button>
          <button className='btn btn-danger ms-3'> Cancle</button>
        </div>
      </div>
    </div>
  )
}

export default Myregistor