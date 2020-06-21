import React from 'react';
import Search from '../assets/search.svg';
import Radio from '../assets/radio.svg';
import RadioActive from '../assets/radioActive.svg';

let Sidebar = (props) => (
    <div className="container-fluid p-4">
        <div className="row">
            <div className="col-12 mt-1 mb-4 font-weight-bold" style={{fontSize:"14px"}}>
                Search for keywords
            </div>
        </div>
        <div className="row mt-1">
            <div className="col-12">
                <div className="inputBorder">
                    <img className="mr-2" src={Search} alt="Search" height="15px" />
                    <input type="text" className="customInput" placeholder="Filter Courses"  />
                </div>
            </div>
        </div>
        <div className="row mb-3 mt-3">
            <div className="col-12 font-weight-bold mt-2" style={{fontSize:"14px"}}>
                Category
            </div>
        </div>
        <div className="row">
            <div className="col-12 mt-2 d-flex align-items-center" style={{cursor:'pointer'}}>
              <img className="mr-2" src={Radio} alt="Radio" height="15px" />  All
            </div>
        </div>
        {props.categories.length > 0 && props.categories.map((category, index)=>(
            <div className="row" key={index}>
                <div className="col-12 mt-2 d-flex align-items-center" style={{cursor:'pointer'}}>
                    <img className="mr-2" src={Radio} alt="Radio" height="15px" />  {category}
                </div>
            </div>
        ))}
    </div>
);

export default Sidebar;