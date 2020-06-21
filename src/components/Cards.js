import React from 'react';
import Circle from '../assets/circle.svg';
import Info from '../assets/info.svg';
import Calendar from '../assets/calendar.svg';

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let Cards = (props)=>(
    <div className="container-fluid customCard p-4">
        <div className="row">
            <div className="col-2 d-flex align-items-center justify-content-center">
                <img src={Circle} alt="Circle" height="40px" style={{opacity:"0.7"}} />
            </div>
            <div className="col-10">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12 courseName">
                            {props.course.title}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 courseTitle">
                            {props.course.instructor_name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-4 pt-4" style={{color: "grey"}}>
            <div className="col-2 mt-1 d-flex justify-content-center">
                <img src={Info} alt="Info" height="15px" />
            </div>
            <div className="col-10" dangerouslySetInnerHTML={{__html: props.course.description}}>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-2 mt-1 d-flex justify-content-center">
                <img src={Calendar} alt="Calendar" height="15px" />
            </div>
            <div className="col-10" style={{fontSize:"12px", color:"grey"}}>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12 font-weight-bold">
                            Pre-Registration
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 font-weight-bold">
                            {months[new Date(props.course.start_date).getMonth()]} {props.course.start_date.split('-')[2]} - {months[new Date(props.course.end_date).getMonth()]} {props.course.start_date.split('-')[2]}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <i>{Math.round(((new Date(props.course.end_date)).getTime() - (new Date(props.course.start_date)).getTime())/(7*86400000))} week course, {props.course.estimated_workload}</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Cards;