import { useState } from "react";
import { validateEmail } from "./validators";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!name) errs.name = "Name required";
    if (!email) errs.email = "Email required";
    else if (!validateEmail(email)) errs.email = "Invalid email";
    if (!password) errs.password = "Password required";
    else if (password.length < 6) errs.password = "Password must be 6+ chars";
    if (password !== confirmPassword) errs.confirmPassword = "Passwords do not match";

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setMessage("Registered successfully ✅ (simulated)");
    console.log("Register:", { name, email, password });
    alert("Navigate to dashboard (placeholder)");
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <small style={{ color: "red" }}>{errors.password}</small>}

        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {errors.confirmPassword && <small style={{ color: "red" }}>{errors.confirmPassword}</small>}

        <button type="submit">Sign Up</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}