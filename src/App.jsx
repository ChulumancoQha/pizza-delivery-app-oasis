// import Admin from "./frontend/pages/admin/admin";
import Login from "./frontend/pages/users/auth/login";
import Forgot from "./frontend/pages/users/auth/forgotpass";
import SignUp from "./frontend/pages/users/auth/signup";
import { Route, Routes } from "react-router";
import Profile from "./frontend/pages/users/profile/profile";
import Products from "./frontend/pages/users/products/products";
import Orders from "./frontend/pages/users/orders/orders";
import Checkout from "./frontend/pages/users/checkout/checkout";

const App = () => {
  return (
    // <>
    //   {/* <h1>Welcome to the Pizza Delivery App</h1> */}
    //   {/* <Admin /> */}
    //   {/* <Login /> */}
    //   {/* <SignUp /> */}
    //   {/* <Forgot /> */}

    // </>
    // <Router>
      <Routes>
        {/* This is the movement of the Users */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/forgotpassword" element={<Forgot />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/checkout" element={<Checkout />} />
        {/* End of user movement */}
        {/* <Route exact path="/signup">
          <SignUp />
        </Route> */}
      </Routes>
    // </Router>
  );
};

export default App;
