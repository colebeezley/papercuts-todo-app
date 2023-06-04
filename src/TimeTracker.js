import React from 'react';
import Quote from "./Quote";

function TimeTracker() {
    function handleTime(){
        console.log("event")
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleTime()
        }
    };
    return (
        <div id="content">

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">What are we working on right now?</h5>
                    <input type="text" id="papercut-message" className="form-control" placeholder="I'm 'developing' an app." autoComplete="off" onKeyDown={handleKeyDown} />
                    <button type="button" className="btn btn-outline-success" id="submit-button" onClick={handleTime}>Submit</button>
                </div>
            </div>
            <Quote />
        </div>
    )
}

export default TimeTracker