import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex w-screen h-screen bg-[url(.\images\loginBG.png)] bg-no-repeat pl-8 justify-content-start items-center ">
      <form className="flex flex-col gap-4 bg-white/8 p-8 text-surface">
        <h1 className="text-white">Welcome Back!</h1>
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
        <button type="submit" className="btn-o">
          Login
        </button>
              <h1 className="font-bold text-3xl flex items-center gap-4 before:h-0.5 before:bg-accent before:flex-1 after:h-0.5 after:bg-accent after:flex-1">OR</h1>
              <div className="flex justify-center gap-8 w-100">
                <FcGoogle className="text-4xl"/>
              </div>

      </form>

    </div>
  );
};

export default Login;
