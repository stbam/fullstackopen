const Button = (props) => {
    
    return ( 
        <>
        <button onClick={props.goodClick}>good</button>
        <button onClick={props.neutralClick}>neutral</button>
        <button onClick={props.badClick}>bad</button>
        </>
 
     );
}
 
export default Button;