import React from 'react';

let Sidebar = (props) => (
    <div className="container-fluid p-4">
        <div className="row">
            <div className="col-12">
                Search for keywords
            </div>
        </div>
        {props.categories.length > 0 && props.categories.map((category, index)=>(
            <div className="row" key={index}>
                <div className="col-12">
                    {category}
                </div>
            </div>
        ))}
    </div>
);

export default Sidebar;