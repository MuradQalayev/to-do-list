import { useState } from 'react'
import './styles.css'
export default function App(){

  const [newItem, setNewItem] = useState("");
  const [todos, setToDos] = useState([])


  function handleSubmit(e){
    e.preventDefault();
    // SetToDos([...todos,{id: crypto.randomUUID(),title: newItem, completed: false}])
    setToDos(currentToDos =>[
        ...currentToDos,
        {id: crypto.randomUUID(), title: newItem, completed: false},
    ])
    setNewItem('')
  
  }
  function toggleToDo(id, completed){
    setToDos(currentToDos =>{
      return currentToDos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  
function deleteToDo(id){
  setToDos(currentToDos =>{
    return currentToDos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
        <form onSubmit = {handleSubmit} className='new-item-form'>
          <div className='form-row'>
          <label htmlFor='item'>New item</label>
          <input type='text' id='item' value={newItem} onChange={e => setNewItem(e.target.value)}></input>
          <button className='btn'>Add</button>
      </div>
    </form>
    <h1>To do list</h1>
    <ul className='list'>
    {todos.map(todo =>{
        return (
          <li key = {todo.id}>
          <label>
            <input type='checkbox' checked = {todo.completed} onChange={e=>{
              toggleToDo(todo.id,e.target.checked)
            }}></input>{todo.title}
          </label>
          <button className='btn btn-danger' onClick={()=>{deleteToDo(todo.id)}}>Delete</button>
        </li>
        )
      })} 

    </ul>
    </>
  )
}