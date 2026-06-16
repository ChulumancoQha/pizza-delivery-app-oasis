const Form = ({children, title}) => {
    return ( <div className="loginBG">
      <form className="formUser">
        <h1 className="text-white">{title}</h1>
        {children}
        </form>

    </div> );
}
 
export default Form;