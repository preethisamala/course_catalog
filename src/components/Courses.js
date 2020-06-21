import React from 'react';
import Cards from './Cards';

let Courses = (props) => (
    <div className="container-fluid p-4">
        <div className="row">
            <div className="col-12">
                Courses
            </div>
        </div>
        <div className="row mt-3">
            {props.courses.length > 0 && props.courses.map((course, index)=>(
                <div className="col-4 mt-4" key={index}>
                    <Cards course={course} />
                </div>
            ))}
        </div>
    </div>
);

export default Courses;