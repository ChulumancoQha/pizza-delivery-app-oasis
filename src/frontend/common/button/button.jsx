const Button = ({name, onClick, first=true, submitting}) => {
    return ( 
        <button onClick={onClick} disabled={submitting} className={`${first ? "btn" : "btn-o"}`}>{name}</button>
     );
}
 
export default Button;