import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from 'react'

import "./styles.css";
import AppName from "./components/AppName";
import ListItem from "./components/ListItem";
import RemoveCompletedTaskButton from './components/RemoveCompletedTaskButton';
import AddTask from './components/AddTask';

export default function App() {

  const [tasks,setTasks]=React.useState([{
                                              "desc" : "Read Springboot",
                                              "isCompleted" : false
                                          },
                                          {
                                              "desc" : "Complete Assignments",
                                              "isCompleted" : false
                                          },
                                          {
                                              "desc" : "Prepare Breakfast",
                                              "isCompleted" : false
                                          },
                                          {
                                              "desc" : "Sleep for 2 hours",
                                              "isCompleted" : false
                                          },
                                          {
                                              "desc" : "Take a Shower",
                                              "isCompleted" : false
                                          }]);

  {/*
    useEffect(()=>{
      async function getTasks(){
        const taskFromServerResponse=await fetch("http://localhost:3000/tasks");
        const taskFromServerJson=await taskFromServerResponse.json();
        return taskFromServerJson;
      }

      const existingTask=getTasks();
      if(!existingTask){
        existingTask=[];
      }
      setTasks(existingTask);
    },[tasks])
  */}

  function handleClearAllTask(){
    setTasks((prevTasks)=>{
      return prevTasks.filter((task)=>{
        return !task.isCompleted;
      })
    })
  }

  function handleTaskComplete(e,index){
    console.log("called for index ",index);
    const updatedTask={desc: tasks[index].desc,
                      isCompleted: !tasks[index].isCompleted};
    setTasks((prevTasks)=>{
      return [...prevTasks.slice(0,index),updatedTask,...prevTasks.slice(index+1)];
    });
  }

  function handleAddNewTask(e,newAddedTaskDesc){
    const newTask={desc: newAddedTaskDesc,
                  isCompleted: false};
    setTasks((prevTasks)=>{
      return [...prevTasks,newTask];
    })
  }

  return (
    <div className="main-container">
      <div className="list-container">

        <AppName />
        <AddTask onAddTask={handleAddNewTask}/>
        <ul>
          { tasks.length==0 ? 
            "Noting to do buddy. Sleep!!" : 
            tasks.map((task,index)=>{
            return <ListItem key={index} id={index} desc={task.desc} isCompleted={task.isCompleted} onTaskComplete={handleTaskComplete}/>
          })}
        </ul>

        <RemoveCompletedTaskButton onClearTaskClick={handleClearAllTask}/>
        
      </div>
      
    </div>
  );
}
