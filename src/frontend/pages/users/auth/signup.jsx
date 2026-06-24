import Button from "../../../common/button/button";
import Form from "../../../common/form/form";
import { useState } from "react";
import { useAuth } from "../../../../backend/firebaseAuth/authContext/index";
import { getAuthErrorMessage } from "../../../../backend/firebaseAuth/authErrors";

const MIN_PASSWORD_LENGTH = 8;

function getPasswordIssues(password) {
  const issues = [];
  if (password.length < MIN_PASSWORD_LENGTH)
    issues.push(`be at least ${MIN_PASSWORD_LENGTH} characters`);
  if (!/[a-z]/.test(password)) issues.push("include a lowercase letter");
  if (!/[A-Z]/.test(password)) issues.push("include an uppercase letter");
  if (!/[0-9]/.test(password)) issues.push("include a number");
  return issues;
}

const SignUp = () => {
  // const [email, setEmail] = useState("")
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const issues = getPasswordIssues(password);
    if (issues.length > 0) {
      setError(`Password must ${issues.join(", ")}.`);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      await signup(email.trim(), password);
      // onSuccess?.();
    } catch (err) {
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form
      title={"Sign Up!"}
      handleSubmit={handleSubmit}
      submitting={submitting}
    >
      {error && (
        <p role="alert" style={{ color: "#b00020" }}>
          {error}
        </p>
      )}

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="input"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        className="input"
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        className="input"
      /> */}
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="input"
        autoComplete="new-password"
        required
        minLength={MIN_PASSWORD_LENGTH}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        name="password2"
        id="password2"
        placeholder="Confirm Password"
        className="input"
        autoComplete="new-password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        first={false}
        submitting={submitting}
        name={submitting ? "Creating account…" : "Create account"}
        onClick={() => console.log("pressed")}
      />
      <p style={{ fontSize: "0.85rem", color: "#555" }}>
        We'll send a verification link to your email after sign-up.
      </p>
    </Form>
  );
};

export default SignUp;
