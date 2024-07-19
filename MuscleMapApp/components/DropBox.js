import * as React from 'react';

export default function DropBox() {    
const [date , setDate] = React.useState("Monday")
    
    function changeDate(event){
        setDate(event.target.value)
    }
    return (
        <div className="DropBox">
            <select value={date} onChange={changeDate}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
            <list>
                {date == 'Monday'? <h1>First</h1> : null}
                {date == 'Tuesday'? <h1>Second</h1> : null}
            </list>
        </div>
    );
}
