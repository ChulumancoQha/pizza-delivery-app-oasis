const Form = ({ children, title, handleSubmit, submitting}) => {
  return (
    <div className="loginBG">
      <form className="formUser" onSubmit={handleSubmit} noValidate aria-busy={submitting}>
        <h1 className="text-white">{title}</h1>
        {children}
      </form>
    </div>
  );
};

export default Form;
