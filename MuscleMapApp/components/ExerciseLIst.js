import * as React from 'react';

export default function ExerciseList() {    
    const [list, setList] = useState([]);
    const [value, setValue] = useState("");
    const [exerciseList, setExercise] = useState("");

    function addExercise(event){
        setExercise(event.target.val);
        let tempArr = list;
        tempArr.push(value);
        setList(tempArr);
        setValue("");
    }

    return(
        <div>
            <div className="ExerciseDrop">
                <select value={exerciseList} onChange={addExercise}>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
            </div>
            <div className="UserExerciseList">
                <ul>
                    {list.length > 0 &&
                    list.map((item, i) => <li onClick={() => deleteItem(i)}>{item} </li>)}
                </ul>
            </div>
        </div>
    )
}
