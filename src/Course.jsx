const Course = (props) => {

    var sum=0;
    const {course} = props;

    console.log(course[1].parts)
    sum= course[0].parts.reduce((accumulator,courses)=>{
        console.log(accumulator +  courses.exercises);
        return accumulator +  courses.exercises;
    },0)



console.log(course[0].name);

    return ( 
        <div>
        {course.map((courseItem) => (
            <div key={courseItem.id}>
                <h1>{courseItem.name}</h1>
                {courseItem.parts.map((part) => (
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
                ))}
                <p>Total exercises: {courseItem.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
            </div>
        ))}
    </div>
    
    );
}
 
export default Course;