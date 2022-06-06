import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Social from "../Social/Social";
import "./Registration.css";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  if (user) {
    console.log("user", user);
  }
  if (loading) {
    return <Spinner></Spinner>;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.userName.value;
    const email = event.target.userEmail.value;
    const password = event.target.userPassword.value;
    const conPassword = event.target.ConfirmPassword.value;
    // const agree = event.target.terms.checked;

    if (password === conPassword) {
      await createUserWithEmailAndPassword(email, password);
      console.log("Profile Created");
      navigate("/");
    } else {
      toast("Password does not match");
    }
  };
  return (
    <div className="login-div">
      <div className="login-container">
        <div className="login-form">
          <h1>Registration</h1>
          <h1>
            <FaUserCircle></FaUserCircle>
          </h1>
          <form action="" onSubmit={handleRegister}>
            <label htmlFor="user-name">User Name</label>
            <input
              type="text"
              name="userName"
              id="user-name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              name="userEmail"
              id="user-email"
              placeholder="Enter eamil"
              required
            />
            <label htmlFor="user-password">Password</label>
            <input
              type="password"
              name="userPassword"
              id="user-password"
              placeholder="Enter password"
              required
            />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="ConfirmPassword"
              id="confirm-password"
              placeholder="confirm password"
              required
            />
            <button type="submit" className="login-btn">
              Submit
            </button>
          </form>
        </div>
        <ToastContainer></ToastContainer>
        <div className="social-signin">
          <p>Or</p>
          <Social title="Sign up with Google"></Social>
        </div>
        <div className="reg-link">
          <p>
            Already have an account? <Link to={"/login"}>log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
