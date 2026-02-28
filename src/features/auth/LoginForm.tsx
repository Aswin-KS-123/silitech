import { useState } from "react";
import { validateEmail } from "./validators"; // your validators.ts

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!email) errs.email = "Email required";
    else if (!validateEmail(email)) errs.email = "Invalid email";
    if (!password) errs.password = "Password required";

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setMessage("Login successful ✅ (simulated)");
    console.log("Login:", { email, password });
    alert("Navigate to dashboard (placeholder)");
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <small style={{ color: "red" }}>{errors.password}</small>}

        <button type="submit">Sign In</button>

        <p style={{ color: "blue", cursor: "pointer" }} onClick={() => alert("Forgot password flow placeholder")}>
          Forgot Password?
        </p>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}