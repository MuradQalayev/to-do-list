import { useEffect, useState } from 'react'
import './styles.css'
import { NewToDoForm } from './NewToDoForm'
import { ToDoList } from './ToDoList'
// import { json } from 'express'

export default function App(){

  const [todos, setToDos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
    
  })

  useEffect(()=>{
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  function AddToDo(title){
      setToDos(currentToDos=>{
        return [
          ...currentToDos, {id: crypto.randomUUID(),title,completed: false}
        ]
      }) 
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
    <NewToDoForm onSubmit ={AddToDo} />
    <h1>To do list</h1>
    <ToDoList todos = {todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
    </>
  )
}