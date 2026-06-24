import { FcGoogle } from "react-icons/fc";
import Button from "../../../common/button/button";
import Form from "../../../common/form/form";
import { useState } from "react";
import { useAuth } from "../../../../backend/firebaseAuth/authContext/index";
import { getAuthErrorMessage } from "../../../../backend/firebaseAuth/authErrors";

const Login = ({onForgotPassword, onSuccess}) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login(email.trim(), password, rememberMe);
      onSuccess?.();
    } catch (err) {
      // Firebase itself throttles repeated failures (auth/too-many-requests)
      // after a handful of attempts — no extra client-side rate limiting needed.
      setError(getAuthErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <Form
      title={"Welcome Back!"}
      handleSubmit={handleSubmit}
      submitting={submitting}
    >
      {error && (
        <p role="alert" style={{ color: "#b00020" }}>
          {error}
        </p>
      )}
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="input"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col items-end">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={onForgotPassword}
            style={{
              background: "none",
              border: "none",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Forgot password?
          </button>
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me on this device
          </label>
        </div>
      </div>
      <Button
        first={false}
        submitting={submitting}
        name={submitting ? "Signing in…" : "Sign in"}
        onClick={() => console.log("pressed")}
      />{" "}
      <h1 className="font-bold text-surface text-3xl flex items-center gap-4 before:h-0.5 before:bg-surface before:flex-1 after:h-0.5 after:bg-surface after:flex-1">
        OR
      </h1>
      <div className="flex justify-center gap-8 w-100">
        <FcGoogle className="text-4xl" />
      </div>
    </Form>
  );
};

export default Login;
