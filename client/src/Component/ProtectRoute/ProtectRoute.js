import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";

const ProtectRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Spinner></Spinner>;
  }

  if (error) {
    return toast(error.message);
  }
  if (sending) {
    return <Spinner></Spinner>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div style={{ height: "100vh" }}>
        <div className="modalBackground">
          <div className="modalContainer">
            <h3 className="title">Your Email is not verified!!</h3>
            <h5 className="title"> Please Verify your email address</h5>
            <button
              className="send-btn"
              onClick={async () => {
                await sendEmailVerification();
                toast("Sent email");
              }}
            >
              Send Verification Email Again
            </button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectRoute;
