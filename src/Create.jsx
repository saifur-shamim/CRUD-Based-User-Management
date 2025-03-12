import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Create() {

  const [data, setData]=useState({
    name: "", 
    email: "", 
    phone:""

  });

  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let existingData = JSON.parse(localStorage.getItem('data'));
  
    if (!Array.isArray(existingData)) {
      existingData = []; 
    }
  
    const newData = { id: existingData.length + 1, ...data };
  
    const updatedData = [...existingData, newData]; 
    localStorage.setItem('data', JSON.stringify(updatedData));
  
    navigate('/');
  };
  
  
  

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>

    <div className='w-95 border bg-white shadow px-5 pt-3 pb-5 rounded'>

    <h1>Add a user </h1>

    <form onSubmit={handleSubmit}>

    <div className="mb-2">
    <label htmlFor="name">Name: </label>
    <input type="text" name='name' className='form-control' placeholder='Enter Name '
    onChange={e=>setData({...data,name:e.target.value})} />
    </div>

    <div className="mb-2">
    <label htmlFor="email">Email: </label>
    <input type="email" name='email' className='form-control' placeholder='Enter Email '
    onChange={e=>setData({...data,email:e.target.value})} />
    </div>

    <div className="mb-3">
    <label htmlFor="phone">Phone: </label>
    <input type="text" name='phone' className='form-control' placeholder='Enter phone ' 
    onChange={e=>setData({...data,phone:e.target.value})}/>
    </div>

    <button className='btn btn-success'>Submit</button>
    <Link to="/" className='btn btn-primary ms-3'>Back</Link>

    </form>

    </div>
      
    </div>
  )
}

export default Create
