
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {

  const [data, setData] =useState([]);

  const navigate=useNavigate();

  useEffect(() => {
    let parsedData = JSON.parse(localStorage.getItem('data')) || [];
    if (!Array.isArray(parsedData)) {
      parsedData = []; 
    }
    setData(parsedData);
  }, []);
  
  const handleDelete=(id)=> {
    const confirm = window.confirm("Would you like to delete?");
    if(confirm)
    {
      let parsedData = JSON.parse(localStorage.getItem('data')) || [];
      if (!Array.isArray(parsedData)) {
        parsedData = []; 
      }

      let newData = parsedData.filter(data=> data.id!==id); 
      setData(newData);
      localStorage.setItem('data', JSON.stringify(newData));

    }
  }
  

 // console.log(data);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 w-100'>
      <h1>List of users </h1>
      <div className="w-90 rounded bg-white border shadow p-4">
      <div className='d-flex justify-contend-end'>
      <Link to="/create" className='btn btn-success'> Add+ </Link>
      </div>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
       
        <tbody>
        {
           data.map((d,i)=>(
              <tr key={i}> 

                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                <Link to={`/read/${d.id}`}className='btn btn-sm btn-info me-2'>Read</Link>
                <Link to={`/update/${d.id}`}className='btn btn-sm btn-primary me-2'>Edit </Link>
                <button onClick={e=> handleDelete(d.id)}className='btn btn-sm btn-danger'>Delete </button>
                </td>
                
                
              </tr>
            ))
          }
          
        </tbody>
      </table>
      </div>
    </div>
  )


}

export default Home
