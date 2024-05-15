export function ToDoItem({id, completed, title, toggleToDo, deleteToDo}){
    return (
        <li key = {id}>
              <label>
                <input type='checkbox' checked = {completed} 
                onChange={e=>{
                  toggleToDo(id,e.target.checked)}}
                  ></input>{title}
              </label>
              <button className='btn btn-danger' 
              onClick={()=>{deleteToDo(id)}}
              >
                Delete</button>
        </li>
    )
}