import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Detailspage() {
    const {id} = useParams();
    const [single, dufncion1] = useState({});

    const Singleuser = () => {
        axios.get(`http://localhost:8080/singledata/${id}`).then((res) => {
            console.log(res.data);
            dufncion1(res.data);
        })
    }

    useEffect(() => {
        Singleuser();
    },[])



  return (
   <div className='container page border shadow p-5'>
    <div className='row mb-5 border-bottom'>
        <div className='col-10'>
            <h2>User Details Page</h2>
        </div>
        <div className='col-2 text-end'>
            <Link to="/dashboard" className='btn btn-sm btn-dark'>Back</Link>
        </div>
    </div>
    <div className='row'>
        <div className='col-md-6'>
            <img src={single.mypic} alt="profile imgs" className='img-fluid'/>
        </div>
        <div className='col-md-6'>
           <h3>Mongose Id:<span className='text-primary bg-light p-2 shadow'> {single._id}</span></h3>
           <h3>UserName: <span className='text-primary bg-light p-2 shadow'>{single.fullname}</span></h3>
           <h3>Email id:<span className='text-primary bg-light p-2 shadow'> {single.email}</span></h3>
           <h3>City: <span className='text-primary bg-light p-2 shadow'> {single.city}</span></h3>
           <h3>Gender: <span className='text-primary bg-light p-2 shadow'>{single.gender}</span></h3>
           <h3>Phone No: <span className='text-primary bg-light p-2 shadow'>{single.phone}</span></h3>
        </div>
    </div>
   </div>
  )
}

export default Detailspage