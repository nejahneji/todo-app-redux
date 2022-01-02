import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = ({filteredTodos}) => {
    // const todoTask=useSelector(state => state.todoTask)
    return (
        <div>
            {filteredTodos.map((item)=><Task item={item} key={item.id}/>)}
        </div>
    )
}

export default TaskList
