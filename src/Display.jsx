const Display = (props) => {
    return (
        
       <div>   
        <div>all {props.good+props.bad+props.neutral} </div>

        <div> average {( props.good - props.bad)/props.total}% </div>
        <div>positive {props.good/props.total}% </div>
       
        </div> 
     
        );
}
 
export default Display;