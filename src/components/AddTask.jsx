import React from 'react'

function AddTask({onAddTask}) {

    const [newTaskDesc,setNewTaskDesc]=React.useState("");

    function handleAddTask(e){
        e.preventDefault();
        onAddTask(e,newTaskDesc);
        setNewTaskDesc("");
    }

    function handleTaskChange(e){
        setNewTaskDesc(e.target.value);
    }

  return (
    <div>
        <form onSubmit={handleAddTask}>
            <input placeholder='What Next!' value={newTaskDesc} onChange={handleTaskChange}/>
            <button>Let's Do</button>
        </form>
    </div>
  )
}

export default AddTask