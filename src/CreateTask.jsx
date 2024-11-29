import React, { useState } from 'react'

export default function CreateTask(props) {
    const[task,setTask] = useState({
        title:'',
        content:''
    })
    function detectChange(event)
    {
        const {name, value} = event.target;

        setTask((prevTask) => {
            return{
                ...prevTask,
                [name]:value,
            };
        })
    }

    function submitTask(event)
    {
        props.onAdd(task);
        setTask({
            title:'',
            content:''
        })
        event.preventDefault();
    }
  return (
    <div className='todoDivArea'>
      <form className='todoDiv'>
        <input type="text"
        className='form-control todoText mb-3'
        name='title'
        value={task.title}
        onChange={detectChange}
        placeholder='Başlık'/>

        <textarea name="content"
        rows={3}
        value={task.content}
        onChange={detectChange}
        className='form-control todoText mb-3'
        placeholder='Burayı doldurunuz.'></textarea>

        <button className='btn btn-primary todoButton' onClick={submitTask}>Ekle</button>
      </form>
    </div>
  )
}
