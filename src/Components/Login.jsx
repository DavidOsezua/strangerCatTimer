import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Axios } from "../req";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  useEffect(() => {
    const accessToken  = localStorage.getItem("accessToken")
    if(accessToken) {
      navigate("/dashboard")
    }
  }, [])


  const handleLogin = async (e) => {
    e.preventDefault()
    if(!email){
      toast.warn("Email required")
      return 
    }

    if(!password) {
      toast.warn("Password Required")
      return 
    }
    const payload = {
      email,
      password
    }

    Axios.post("/login", JSON.stringify(payload)).then((res) => {
      localStorage.setItem("accessToken", res.data.access_token)
      toast.success("Login successful")
      navigate("/dashboard")
    }).catch((e) => {
      toast.warn(e.response.data.message)
    })

  }
  
  return (
    <div className={`${styles.loginContent}`}>
      <p>LOGIN</p>
      <form action="index.html" className={styles.form}>
        <div className={`${styles.inputDiv} one`}>
          <div className="i">
            <img />
          </div>
          <div className={`inputContainer`}>
            <p>Email</p>
            <input
              type="text"
              className={`input`}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className={`${styles.inputDiv} pass`}>
          <div className="i">
            <i className="fas fa-lock"></i>
          </div>
          <div className={`inputContainer`}>
            <p>Password</p>
            <input type="password" className={`input`} placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
        </div>

        <button className={`${styles.btn}`} onClick={handleLogin}>Login</button>

        <div
          className={`flex justify-between text-[#fff] text-[0.6rem] pt-[0.8rem]`}
        >
          <p>Remember Me</p>
          <p>Forgot Password</p>
        </div>

        <button className={` text-[#fff] text-[0.6rem] pt-[1rem]`}>
          <NavLink to="/createaccount">Need to create an account? Sign up</NavLink>
        </button>
      </form>
    </div>
  );
};

export default Login;
