import React from 'react';
import Cards from './Cards';

let Courses = () => (
    <div className="container-fluid p-4">
        <div className="row">
            <div className="col-12">
                Courses
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-4">
                <Cards />
            </div>
            <div className="col-4">
                <Cards />
            </div>
            <div className="col-4">
                <Cards />
            </div>
        </div>
    </div>
);

export default Courses;