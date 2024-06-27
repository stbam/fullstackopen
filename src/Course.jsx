const Course = (props) => {

    var sum=0;

 

const {course} = props;
console.log(course.parts[0])

console.log(course)
sum= course.parts.reduce((accumulator,courses)=>{
    return accumulator +  courses.exercises;
},0)



    return ( <div>


 

         <h1>{props.course.name}</h1>
        
       {course.parts.map(courses=>
            <p key={courses.id}> 
                {/*console.log(courses.exercises)*/}
                {courses.name} {courses.exercises}  

            </p>
        )}
       
        

       {/*
        const sum = course.parts.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.exercises;
    }, 0);
     */}


    <p>The total is {sum}</p>

      {/*   <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
        <p>{props.course.parts[1].name}  {props.course.parts[1].exercises}</p>
        <p>{props.course.parts[2].name}  {props.course.parts[2].exercises}</p>
       */ }
         </div> );
}
 
export default Course;