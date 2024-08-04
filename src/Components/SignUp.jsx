import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Axios } from "../req";
import { useNavigate } from "react-router-dom";

const validateEmail = (email) => {
  // Regular expression for basic email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault();
    const isEmail = validateEmail(email);

    if (!isEmail) {
      toast.warn("Invalid email");
      return;
    }

    if (!password) {
      toast.warn("Password required");
      return;
    }

    if (!confirmPassword) {
      toast.warn("Confirm Password required");
      return;
    }

    if (password.length < 6) {
      toast.warn("Password not strong enough");
      return;
    }

    if (password != confirmPassword) {
      toast.warn("Password mismatch");
      return;
    }
    const data = {
      email,
      password,
      confirm_password: confirmPassword,
    };

    toast
      .promise(Axios.post("/register", data), {
        pending: "Creating Account",
        success: "Account created",
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/dashboard");
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

  return (
    <div className={`${styles.loginContent}`}>
      <p>SignUp</p>
      <form action="index.html" className={styles.form}>
        <div className={`${styles.inputDiv} one`}>
          <div className="i">
            <img />
          </div>
          <div className={`inputContainer`}>
            <input
              type="text"
              className={`input`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className={`${styles.inputDiv} pass`}>
          <div className={`inputContainer`}>
            <input
              type="password"
              className={`input`}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className={`${styles.inputDiv} pass`}>
          <div className={`inputContainer`}>
            <input
              type="password"
              className={`input`}
              placeholder=" Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="text-[#fff] text-[0.6rem] ">
          <p className="pb-[0.7rem]">
            Sign me up to receive email notification from us about updates on
            the presale and wen launch!
          </p>
        </div>

        <button className={`${styles.btn}`} onClick={createAccount}>
          Create account
        </button>

        <button className={` text-[#fff] text-[0.6rem] pt-[1rem]`}>
          <NavLink to="/login">
            {" "}
            Already have an account? Sign in instead
          </NavLink>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
