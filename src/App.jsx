// import Admin from "./frontend/pages/admin/admin";
import Login from "./frontend/pages/users/auth/login";
import Forgot from "./frontend/pages/users/auth/forgotpass";
import SignUp from "./frontend/pages/users/auth/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router";
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
    <Router>
      <Switch>
        {/* This is the movement of the Users */}
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/forgotpassword">
          <Forgot />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        {/* End of user movement */}
        {/* <Route exact path="/signup">
          <SignUp />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
