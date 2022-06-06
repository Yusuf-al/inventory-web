import React, { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Social from "../Social/Social";
import "./Login.css";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef("");

  let from = location.state?.from?.pathname || "/";

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Password reset email has been Send");
    } else {
      toast("please enter your email address");
    }
  };

  if (loading || sending) {
    return <Spinner></Spinner>;
  }
  if (user) {
    //navigate(from, { replace: true });
  }

  if (error) {
    toast("email or password is not found");
  }

  const handleLogIn = async (event) => {
    event.preventDefault();
    const email = event.target.userEmail.value;
    const password = event.target.userPassword.value;

    await signInWithEmailAndPassword(email, password);

    const url = "https://frozen-earth-93030.herokuapp.com/login";

    let data = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    data = await data.json();
    localStorage.setItem("acc-token", data.token);
    navigate(from, { replace: true });
  };
  return (
    <div className="login-div">
      <div className="login-container">
        <div className="login-form">
          <h1>Log in</h1>
          <h1>
            <FaUserCircle></FaUserCircle>
          </h1>
          <form action="" onSubmit={handleLogIn}>
            <label htmlFor="user-email">Email</label>
            <input
              type="email"
              ref={emailRef}
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
            <p
              onClick={resetPassword}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Reset Password
            </p>
            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>
        </div>
        <div className="social-signin">
          <p>Or</p>
          <Social title="Sing in with Google"></Social>
        </div>
        <div className="reg-link">
          <p>
            Don't have an account?{" "}
            <Link to={"/registration"}>Please Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
