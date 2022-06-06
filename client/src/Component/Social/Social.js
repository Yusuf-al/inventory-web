import React from "react";
import { FaGoogle } from "react-icons/fa";
import "./Social.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { toast, ToastContainer } from "react-toastify";

const Social = (props) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (error) {
    let errMsg = <p className="text-danger">Error: {error?.message}</p>;
    toast(errMsg);
  }

  const getToken = async (email) => {
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
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    navigate("/");
    console.log(user.user.email);
    getToken(user.user.email);
  }

  return (
    <div>
      <button onClick={() => signInWithGoogle()}>
        <FaGoogle />
        <span>{props.title}</span>
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Social;
