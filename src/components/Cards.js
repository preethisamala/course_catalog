import React from 'react';
import Circle from '../assets/circle.svg';
import Info from '../assets/info.svg';
import Calendar from '../assets/calendar.svg';

let Cards = ()=>(
    <div className="container-fluid customCard p-4">
        <div className="row">
            <div className="col-2 d-flex align-items-center justify-content-center">
                <img src={Circle} alt="Circle" height="40px" style={{opacity:"0.7"}} />
            </div>
            <div className="col-10">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12 courseName">
                            Course Name
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 courseTitle">
                            Course Title
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-4 pt-4">
            <div className="col-2 mt-1 d-flex justify-content-center">
                <img src={Info} alt="Info" height="15px" />
            </div>
            <div className="col-10" style={{fontSize:"14px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-2 mt-1 d-flex justify-content-center">
                <img src={Calendar} alt="Calendar" height="15px" />
            </div>
            <div className="col-10" style={{fontSize:"14px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>
    </div>
);

export default Cards;