const Course = (props) => {

    var sum=0;
    const {course} = props;

    console.log(course[1].parts)
    sum= course[0].parts.reduce((accumulator,courses)=>{
        console.log(accumulator +  courses.exercises);
        return accumulator +  courses.exercises;
    },0)
var sum2=course[1].parts.reduce((accumulator,courses)=>{
    console.log(accumulator +  courses.exercises);
    return accumulator +  courses.exercises;
},0)
console.log(course[0].name);

    return ( 
    <div>
        <h1>{course[0].name}</h1>
        
       {/*course.map((name,i)=>
           
            <h1 key={name.id}>{name.name}</h1>
    )*/}     
            
            
       {course[0].parts.map(courses=>
            <p key={courses.id}> 
                
                {courses.name} {courses.exercises}  
            </p>
        )}
    <p>The total is {sum}</p>

        <h1>{course[1].name}</h1>

        {course[1].parts.map(courses=>
            <p key={courses.id}> 
                
                {courses.name} {courses.exercises}  
            </p>
        )}
       <p>The total is {sum2}</p>

       {/*
        const sum = course.parts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.exercises;
    }, 0);
     */}


  

      {/*   <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
        <p>{props.course.parts[1].name}  {props.course.parts[1].exercises}</p>
        <p>{props.course.parts[2].name}  {props.course.parts[2].exercises}</p>
       */ }
         </div> );
}
 
export default Course;