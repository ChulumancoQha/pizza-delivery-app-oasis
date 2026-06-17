import Button from "../../../common/button/button";
import Form from "../../../common/form/form";
// import { useState } from "react";

const SignUp = () => {
    // const [email, setEmail] = useState("")
  return (
    <Form title={"Sign Up!"}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="input"
      />
      <input
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
      />
      <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="input"
          />
      <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm Password"
            className="input"
          />
          <Button first={false} name={"Sign Up"} onClick={() => console.log("pressed")}/>
    </Form>
  );
};

export default SignUp;
