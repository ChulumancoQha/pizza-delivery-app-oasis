const button = ({name, onClick}) => {
    return ( 
        <button onClick={onClick} className="btn">{name}</button>
     );
}
 
export default button;