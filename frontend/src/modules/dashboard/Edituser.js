import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Edituser() {
    const {id} = useParams();
    const [sdata,supdat]=useState({
        fullname:"",
        email:"",
        phone:"",
        gender:"",
        city:"",
        pass:"",
        mypic:""
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

      const edituser = () => {
        axios.get(`https://ducat1130sep.onrender.com/singledata/${id}`).then((res) => {
            console.log(res.data);
            supdat(res.data);
        })
    }

    useEffect(() => {
        edituser();
    },[])

        const editupdate = async()=>{
            const {fullname,email,phone,gender,city,pass,mypic} = sdata;
            const res = await fetch(`https://ducat1130sep.onrender.com/updateuser/${id}`,{
              method:"PATCH",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify({
                fullname,email,phone,gender,city,pass,mypic
              })
            })
            window.location.href="/dashboard";
            const data1 = await res.json();
            console.log(data1);
        }



  return (
    <div className='container page shadow p-5 border reg bg-info'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>User Edit Page</h1>
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
        <div className='col-md-12 mt-2'>
          <label className="form-label">profile Image</label>
          <input type="text" placeholder="paste img url only" className="form-control" name='mypic' value={sdata.mypic} onChange={chanfunc}/>
        </div>
        <div className='col-md-12 mt-2 text-center pt-2'>
          <button className='btn btn-success' type='button' onClick={editupdate}> Update</button>
        
        </div>
      </div>
    </div>
  )
}

export default Edituser