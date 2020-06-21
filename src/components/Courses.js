import React from 'react';
import Cards from './Cards';

let Courses = (props) => {
    let filteredCourses = props.courses;
    if(props.radio !== "All")
    {
        filteredCourses = filteredCourses.filter((course)=>course.category===props.radio);
    }
    if(props.search !== "")
    {
        const searchQuery = new RegExp(".*"+props.search+".*", "i");
        filteredCourses = filteredCourses.filter((course)=>{
            if(searchQuery.test(course.title))
                return true;
            if(searchQuery.test(course.instructor_name))
                return true;
            if(course.description.indexOf('>') !== '-1' && course.description.indexOf('</') !== '-1')
            {    
                if(searchQuery.test(course.description.slice(course.description.indexOf('>'), course.description.indexOf('</'))))
                    return true
            }
            else if(searchQuery.test(course.description))
                return true;
            if(searchQuery.test(course.category))
                return true;
            if(new Date(course.start_date) > new Date() && searchQuery.test("Pre-registration"))
                return true;
            if(new Date(course.end_date)  < new Date() && searchQuery.test("Completed"))
                return true;
            if(new Date(course.start_date) < new Date() && new Date(course.end_date) > new Date())
                if(searchQuery.test("Ongoing"))
                    return true;
            return false;
        });
    }
    return(
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-12" style={{color: "#808080", fontSize:"20px"}}>
                    {filteredCourses.length} courses open for registration
                </div>
            </div>
            <div className="row">
                {filteredCourses.length > 0 && filteredCourses.map((course, index)=>(
                    <div className="col-4 mt-4" key={index}>
                        <Cards course={course} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;