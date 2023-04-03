import React from 'react'

import {HiPencil} from "react-icons/hi"
import {MdDelete} from "react-icons/md"

const ToDo = ({text, updateMode, deleteToDo}) => {
return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <HiPencil className='icon' onClick={updateMode} />
            <MdDelete className='icon' onClick={deleteToDo} />
        </div>
    </div>
)
}
export default ToDo
