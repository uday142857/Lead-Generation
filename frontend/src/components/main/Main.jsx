import React, { useEffect, useState } from 'react'
import "./Main.css"
import axios from "axios"
import { toast } from "react-toastify";

function Main() {
    const [data, setData]=useState({
      fname: "",
      lname: "",
      email: "",
      company: "",
      message:"",
    });
    const onChangeHandler = (event) => {
      const key = event.target.name;
      const value = event.target.value;
      setData({ ...data, [key]: value });
    };

    // useEffect(() => {
    //   console.log(data);
    // }, [data]);

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const sendData = async (event) => {
        event.preventDefault()

        if (!data.fname.trim()) {
          return alert("First name is required");
        }
        if (!data.lname.trim()) {
          return alert("Last name is required");
        }
        if (!data.email.trim()) {
          return alert("Email is required");
        }
        if (!validateEmail(data.email)) {
          return alert("Please enter a valid email address");
        }

        try {
          var newUrl = "http://localhost:3232/api/data/getdata";
          const userData = await axios.post(newUrl, data);
          if (userData.data.success) {
            console.log("data sended");
            toast.success(userData.data.message);
            setData({
              fname: "",
              lname: "",
              email: "",
              company: "",
              message: "",
            });
          } else {
            console.log("sumition failed");
            toast.error(userData.data.message);
          }
        } catch (error) {
          console.log(error)
        }
        
        
    }

  return (
    <div className="login-page">
      <form onSubmit={sendData} className="login-form">
        <div className="login-title">
          <h2>Details Submission</h2>
        </div>
        <div className="login-inputs">
          <div className="name">
            <input
              type="text"
              onChange={onChangeHandler}
              name="fname"
              value={data.fname}
              placeholder="First Name"
              // required
            />
            <input
              type="text"
              onChange={onChangeHandler}
              name="lname"
              value={data.lname}
              placeholder="Last Name"
              // required
            />
          </div>

          <input
            type="email"
            onChange={onChangeHandler}
            name="email"
            value={data.email}
            placeholder="Enter Your Email Id"
            // required
          />
          <input
            type="text"
            onChange={onChangeHandler}
            name="company"
            value={data.company}
            placeholder="Enter Campony Name"
          />
          <input
            type="text"
            onChange={onChangeHandler}
            name="message"
            value={data.message}
            placeholder="Feel Free to Share your Message to Us"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Main