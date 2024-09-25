import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
return (
<ul>
    {tasks.map((task, index) => (
    <li key={index}>
        <span
        style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'lightgray' : 'black',
            cursor: 'pointer',
        }}
        onClick={() => toggleTaskCompletion(index)}
        >
        {task.name}
        </span>
        <button onClick={() => deleteTask(index)}>Eliminar</button>
    </li>
    ))}
</ul>
);
};

export default TaskList;
