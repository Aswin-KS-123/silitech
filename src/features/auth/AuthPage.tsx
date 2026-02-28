import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./auth.css";

export default function AuthPage() {
  const [isRightActive, setIsRightActive] = useState(false);

  return (
    <div className="auth-wrapper">
      <div className={`container ${isRightActive ? "right-panel-active" : ""}`} id="container">
        <RegisterForm />
        <LoginForm />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login</p>
              <button className="ghost" onClick={() => setIsRightActive(false)}>
                Sign In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details</p>
              <button className="ghost" onClick={() => setIsRightActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}