import { FcGoogle } from "react-icons/fc";
import Button from "../../../common/button/button";
import Form from "../../../common/form/form";

const Login = () => {
  return (
    <Form title={"Welcome Back!"}>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="input"
        />
        <div className="flex flex-col items-end">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
          />
          <p>Forgot Password?</p>
        </div>
      </div>
      <Button name="Login" onClick={null} first={false} />
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
