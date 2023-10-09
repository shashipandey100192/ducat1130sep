import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Landingpage() {

    const [single, dufncion] = useState([]);

    const Mygetalldata = () => {
        axios.get('http://localhost:8080/alldata').then((res) => {
            console.log(res.data);
            dufncion(res.data);
        })
    }
    useEffect(() => {
        Mygetalldata();
    }, [])


    const deleterecor = async(id)=>{
        await axios.delete(`http://localhost:8080/deleterecord/${id}`).then((res)=>{
            console.log(res.data);
            Mygetalldata();
            });
    }




    return (
        <div className='container page'>
            <div className='row'>
                <div className='col-12 text-end'>
                    <p className='h2'>Total:{single.length}</p>
                </div>
                <div className='col-12'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">SNo</th>
                                <th scope="col">Mongodb id</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Gender</th>
                                <th scope="col">City</th>
                                <th scope="col">Profile</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {single.map((d,i=1) => {
                                return (
                                    <tr>
                                        <td>{++i}</td>
                                        <th scope="row">{d._id} </th>
                                        <td>{d.fullname}</td>
                                        <td>{d.email}</td>
                                        <td>{d.phone}</td>
                                        <td>{d.gender}</td>
                                        <td>{d.city}</td>
                                        <td><img src={d.mypic} width="50" alt="user pro"/></td>
                                        <td>
                                            <Link className='btn btn-sm btn-primary' to={`userdetail/`+d._id}>View</Link>
                                            <button className='btn btn-sm btn-warning ms-2'>Edit</button>
                                            <button className='btn btn-sm btn-danger ms-2' onClick={()=>deleterecor(d._id)}>Del</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Landingpage