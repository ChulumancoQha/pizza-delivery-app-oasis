import Form from "../../../common/form/form";
import Button from "../../../common/button/button";

const Forgot = () => {
  return (
  <Form title={"Forgot Password"}>
    <h2 className="text-2xl font-semibold">We'll send a link to rest youre password.</h2>
    <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="input"
      />
      <Button first={false} name={"Send"} onClick={() => console.log("pressed")}/>
  </Form>);
};

export default Forgot;
