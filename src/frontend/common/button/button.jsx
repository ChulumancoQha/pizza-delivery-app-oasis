const Button = ({name, onClick, first=true}) => {
    return ( 
        <button onClick={onClick} className={`${first ? "btn" : "btn-o"}`}>{name}</button>
     );
}
 
export default Button;