import { ToDoItem } from "./ToDoItem"

export function ToDoList({todos,toggleToDo, deleteToDo}){
    return (
        <ul className='list'>
        {todos.length === 0 && 'No todos'}
        {todos.map(todo =>{
            return (
                <ToDoItem id = {todo.id} completed={todo.completed} title={todo.title} toggleToDo={toggleToDo} deleteToDo={deleteToDo }/>
            )
          })} 
    
        </ul>
    )
}