import React from 'react';

const ProgressBar = (props) => {
    debugger;
    return (
        <div>  
            <div className="progress">
                <div className={`progress-bar ${props.progressClassName}`}
                    style={{ width: props.progessValue }}> {props.progessValue}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;