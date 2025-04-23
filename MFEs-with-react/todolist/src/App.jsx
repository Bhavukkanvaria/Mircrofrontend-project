import React, { useState } from 'react';



const App = ()=> {

    const [todoList, setTodoList] = useState([]);

    const onAddTask = (task)=>{
        if(task){
            setTodoList([...todoList, task])
        }
    }

    const deleteTodo = (id)=>{
        if(id){
            const newTaskList = todoList.filter((task)=> task.id!=id);
            setTodoList(newTaskList);
        }
    }

    return(
        <div className='todo-app'>
            <div className="header">
                <h2>Product List</h2>
            </div>
            <ToDoForm onAddTask={onAddTask}/>
            <TodoList items={todoList} deleteTodo={deleteTodo} />
        </div>
    )
}

const ToDoForm = ({onAddTask})=>{
    const [value, setValue] = useState('');

    const onChangehandler = (e)=>{
        setValue(e.target.value);
    } 

    const onAddhandler = ()=>{
        const newTask = {
            id: Date.now().toString(),
            text: value
        }
        onAddTask(newTask);
        setValue('')
    }

    return(
        <>
            <input type='text' value={value} onChange={onChangehandler} />
            <button onClick={onAddhandler}>Add</button>
        </>
    )
}


const TodoList = ({items, deleteTodo})=>{
    return(
        <ul className="item-wrapper">
        {
            items && items.length>0 &&
            items.map((item)=>{
                return(
                    <Todo key={item.id} item={item} deleteTodo={deleteTodo} />
                )
            })
        }
        </ul>
    )
}

const Todo = ({item,deleteTodo})=>{

    const handleSubmit = ()=>{
        deleteTodo(item.id)
    }

    return(
        <li className="todo">
            <span className="todo-label">{item.text + "  "}</span>
            <button className="todo-delete" onClick={handleSubmit}>
                Delete
            </button>
        </li>
    )
}

export default App