const Admin = () => {
  return (
    <div className="flex-center h-screen w-screen bg-[url(./images/loginBG.png)] bg-no-repeat">
      <form>
        <h1>Admin login</h1>
        <input type="text" name="username" id="username" placeholder="Username" className="input" />
        <div className="flex flex-col items-end">
          <input type="password" name="password" id="password" placeholder="Password" className="input" />
          <p>Forgot Password?</p>
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Admin;
