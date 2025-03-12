import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
      });
const [data, setData] = useState([]);

const {id}=useParams();

useEffect(() => {
    let parsedData = JSON.parse(localStorage.getItem("data")) || [];
    let newData = parsedData.find((item) => item.id == id); 
  
    if (newData) {
      setValues({
        id: newData.id,
        name: newData.name || "",
        email: newData.email || "",
        phone: newData.phone || "",
      });
    }
  }, [id]); 

const navigate = useNavigate();
const handleUpdate = (event) => {
    event.preventDefault();
    console.log(id);
    let parsedData = JSON.parse(localStorage.getItem("data")) || [];
    if (!Array.isArray(parsedData)) {
      parsedData = [];
    }

    let newData = parsedData.filter((data) => data.id !==Number(id));

    // console.log("parsedData"),parsedData;
    // console.log("newData",newData);

    const newOne = { id: id, ...values };
  
    const updatedData = [...newData, values]; 

    // console.log("updatedData",updatedData);

    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    navigate('/');

  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-95 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update user </h1>

        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name "
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email "
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter phone "
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>

          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
