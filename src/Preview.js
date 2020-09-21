import React from 'react';
import './App.css';


function Preview(props) {
    return(
        <>
            <div className="col-xs-1"></div>
            <div className="col-xs-10" id='preview'>{props.markdown}</div>
            <div className="col-xs-1"></div>
        </>
    )
}

export default Preview;