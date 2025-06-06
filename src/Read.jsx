import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let parsedData = JSON.parse(localStorage.getItem("data")) || [];

    const singleUser = parsedData.find(item => item.id === Number(id));

    if (singleUser) {
      setData(singleUser);
    } else {
      setData({});
    }

  }, [id]);

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light '>
      <div className="w-90 border bg-white shadow px-5 pt-3 pb-5 rounded ">
        <h3>Detail of user</h3>

        <div className="mb-2">
          <strong>Name: {data.name} </strong>
        </div>

        <div className="mb-2">
          <strong>Email: {data.email} </strong>
        </div>

        <div className="mb-2">
          <strong>Phone: {data.phone} </strong>
        </div>

        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>

      </div>
    </div>
  );
}

export default Read;
